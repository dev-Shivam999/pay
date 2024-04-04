import mongoose from "mongoose";

export const db= async()=>{
    try {
        await mongoose.connect(process.env.DB)
    .then( () => console.log("Connected to MongoDB"))

    .catch((err) => console.error("Error connecting to MongoDB:", err));
    } catch (error) {
     console.log("not connect ");   

    }

}

