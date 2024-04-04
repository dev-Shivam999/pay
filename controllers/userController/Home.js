import { Message } from "../../models/models.js";

export const Home= async function(req, res) {
      const messages = await Message.find()
      const token = req.cookies; 
    const userId = token.token;
  
    res.json({ error: false, messages: messages.filter(i => i._id != userId)});
}





