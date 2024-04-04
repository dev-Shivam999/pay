import mongoose from "mongoose";

export const db= async()=>{
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/login2")
// await mongoose.connect("mongodb+srv://shivamswami982:5ov3GxbPMMWtXtBQ@cluster0.xgwd95i.mongodb.net/pay")
    .then( () => console.log("Connected to MongoDB"))

    .catch((err) => console.error("Error connecting to MongoDB:", err));
    } catch (error) {
     console.log("not connect ");   

    }

}

