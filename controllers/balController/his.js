import {  save } from "../../models/models.js"

export const his=async(req, res) =>{
    const {token}=req.cookies
    let data=await save.findOne({userId:token})
   


    if (data) {
        return res.json({success:true,data:data})
        
    }else{

        return res.json({success:false})
    }
}


