import { Bace, Message } from "../../models/models.js";

export const first=async(req,res)=>{
    const {token} = req.cookies; 
    const user=await Message.find({_id:token})
    const money=await Bace.find({userId:token})
    res.json({money: money,user:user})

}



