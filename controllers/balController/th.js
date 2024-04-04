import { Time } from "../../models/models.js";
import { mult } from "../../utils/utils.js";

export const th=async(req,res)=>{

    const token = req.cookies; 
    const userId = token.token
    const t=await Time.findOne({userId:userId});
 
    if (!t) {
        const data=new  Date()
        const minut=data.getTime()

       await Time.create({
            userId: userId,
            min:minut


        })
        mult(userId,res)
//           const  debB=await Bace.find({userId:userId})
//    const dbe=debB[0].balance
    // if (!debB) {
    //     return res.json({success:false,message:"plz try again"})
        
    // }
    //   await Bace.findOneAndUpdate({userId:userId}, { $set: { balance:parseInt(dbe)+1000}}, { new: true })
    //         .then(updatedDoc => {
    //             if (updatedDoc) {
    //                 return res.json({success:true,message:"ho gaya"})
                   
    //             } else {
    //                 return res.json({success:false,message:"No matching document found."})
    //             }
    //         })
    //         .catch(error => {
    //                 return res.json({success:false,message:"No matching document found."})
    //         });
    }
    else{
        const data=new  Date()
        const minut=data.getTime()
        const val=minut-parseInt(t.min)
        if(val>=3600000){
await Time.findOneAndUpdate({ userId: userId }, { $set: { min:minut} });

        mult(userId,res)
        }

        else{
            return res.json({success:false,message:`plz wait few time ${Math.floor(60-val/(1000*60))} minutes`})
          
        }

    }
   
}


