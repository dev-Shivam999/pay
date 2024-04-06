import mongoose from "mongoose";

import dotenv, { config } from "dotenv"

config({ path: "./.env" })
export const db= async()=>{
    try {
        await mongoose.connect("mongodb+srv://shivamswami982:5ov3GxbPMMWtXtBQ@cluster0.xgwd95i.mongodb.net/pay")
    .then( () => console.log("Connected to MongoDB"))

    .catch((err) => console.error("Error connecting to MongoDB:", err));
    } catch (error) {
     console.log("not connect ");   

    }

}

