import zod from 'zod'
import { Bace, Message } from '../../models/models.js';
const loginSchema = zod.object({
    email: zod.string().email().optional(),
    password: zod.string().min(3).max(10).optional(),
});

export const lo= async function(req, res) {
    try {
        const { email, password } = req.body;
          const validationResult = loginSchema.safeParse(req.body);

        if (!validationResult.success) {
        
            return res.json({ error: true, message: `${validationResult.error.issues[0].path} ${validationResult.error.issues[0].message}` });
        }

        const existingUser = await Message.findOne({ email });

        if (existingUser && password === existingUser.password) {
            const userId = existingUser._id;

             res.cookie('token', userId, {
                httpOnly: true,
                expires: new Date(Date.now() + 60 * 100000)
                });
const baba=await Bace.findOne({userId:userId})
if (!baba) {
    

                await Bace.create({
            userId: userId,
            balance: Math.floor(Math.random() * 10000)
        });
        }
            res.json({ error: false, message: "User successfully logged in", });
        } else {
            return res.json({ error: true, message: "Invalid email or password" });
        }

    } catch (error) {
        console.error("Error:", error);
        return res.status(500).json({ error: true, message: "An error occurred" });
    }
}



