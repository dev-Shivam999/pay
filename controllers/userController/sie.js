import zod from 'zod'
import { Bace, Message } from '../../models/models.js';
const signupSchema = zod.object({
    name: zod.string().min(3),
    email: zod.string().email(),
    password: zod.string().min(3).max(10),
});
export const si= async (req, res) => {
    try {
        const { name, email, password } = req.body;

        const validationResult = signupSchema.safeParse(req.body);
        if (!validationResult.success) {
            return res.status(400).json({ error: true, message: validationResult.error.message });
        }

        const existingUser = await Message.findOne({ email });
        
        if (existingUser) {
            return res.json({ error: true, message: "User already exists" });
        }

        // Create a new user



    const newMessage = await Message.create({ name, email, password });

const userId = newMessage._id;
         await Bace.create({
            userId: userId,
            balance: Math.floor(Math.random() * 10000)
        });
                // Set token in cookie
        res.cookie('token', userId, {
            httpOnly: true,
            expires: new Date(Date.now() + 60 * 100000)
        });

        // Create balance entry
      

        // Send success response
        res.json({ error: false, message: "User successfully created" });
      

    } catch (error) {
        console.error("Error:", error);
        return res.status(500).json({ error: true, message: "An error occurred" });
    }
}



