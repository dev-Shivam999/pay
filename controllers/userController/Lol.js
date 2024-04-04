import { friend } from "../../models/models.js";

export const Lol= async function(req, res) {
    const {token}=req.cookies
      const messages = await friend.find({userId:token})
      
    res.json({ error: false,messages:messages[0]?.for});
}



