import { Message, friend } from "../../models/models.js";
import { tokenone } from "../../utils/utils.js";

export const id= async (req, res) => {
  const { id } = req.body;
  const {token} =await req.cookies;
  try {
    const be = await Message.findOne({ _id: id });
    
    
    const blName = await Message.findOne({ _id: token });
  
  
    const existingFriend = await friend.findOne({ userId: id });
   
if (existingFriend==null) {
 return res.json({
        error: false,
        user:be,
        add:false
      });
  
}else{
      const lol=existingFriend.for.some(i=>i.email==blName.email)

    if (!be) {
      return res.json({ error: true, message: "user not found" });
    } else if(lol) {
      return res.json({
        error: false,
        user:be,
        add:true
      });
    }
    else{
      return res.json({
        error: false,
        user:be,
        add:false
      });

    }
  } }catch (error) {
    return res.json({ error: true, message: "user not found" });
  }
}



