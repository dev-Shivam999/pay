import { save } from "../../models/models.js";

export const sav=async(req, res)=>{

    const{dat,na}=req.body
   await save.find()
   dat.name=na
   const data=dat
//    console.log(data);
   const {token}=req.cookies
    const validation=await save.findOne({userId:token})
   
   try {
     if (!validation) {
            await save.create({userId:token,save:[data]})

      
        return res.json({error:false,message:"successfully save"})
    }
    else{
        
        await save.findOneAndUpdate({userId:token},  { $push: { save: data } })
        
        return res.json({error:false,message:"successfully save and update"})

    }
} catch (error) {
       res.json({error:true,message:"something wrong"})
    console.log("lol");
   }

}



