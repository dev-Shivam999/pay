import { Bace, Message } from "../models/models.js";
export let tokenone
export const isAuthenticated = async (req, res, next) => {
  tokenone = req.cookies;  
  console.log(tokenone);
  const {token} =tokenone

if (token) {
    
    const message=await Message.find()
       const existingUser =  message.some(i=>i._id== token );
    if (existingUser) {
        next()
        
    }else{

        res.json({error: true,messages:"login first"})
    }
   
  }
else{
    
res.json({error: true,messages:"login first"})
}

}
export const jwtScree="lol"


export const mult=async(userId,res)=>{
     const  debB=await Bace.find({userId:userId})
   const dbe=debB[0].balance
    if (!debB) {
        return res.json({success:false,message:"plz try again"})
        
    }
      await Bace.findOneAndUpdate({userId:userId}, { $set: { balance:parseInt(dbe)+1000}}, { new: true })
            .then(updatedDoc => {
                if (updatedDoc) {
                    return res.json({success:true,message:"ho gaya"})
                   
                } else {
                    return res.json({success:false,message:"No matching document found."})
                }
            })
            .catch(error => {
                    return res.json({success:false,message:"No matching document found."})
            });
    }
   




    