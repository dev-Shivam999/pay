import mongoose, { Mongoose } from "mongoose";

const messageSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true

    }
    ,password: {
        type: String,
        required: true

    }
},{ suppressReservedKeysWarning: true });




const balanceSchema = new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Message",
        required: true
        
    },
    balance:{
        type:Number,
        required: true
    },
  
},{ suppressReservedKeysWarning: true });

const time =new mongoose.Schema({
   userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Message",
        required: true
    },
   
    min:{
        type:String,
        default:0
    }
},{ suppressReservedKeysWarning: true })
const friendsSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Message",
    // required: true
  },
  for: {
    type: [mongoose.Schema.Types.Object] // Assuming 'for' is an array of ObjectIds
  }
},{ suppressReservedKeysWarning: true });
const saveSchema = new mongoose.Schema({
    userId:{
        type: mongoose.Schema.Types.ObjectId,
    ref: "Message",
    },
    save:{
        type: [mongoose.Schema.Types.Object]
    }
},{ suppressReservedKeysWarning: true })

export const friend = mongoose.model("Friend", friendsSchema);


export const Message = mongoose.model("Message", messageSchema);
export const Bace = mongoose.model("Bace", balanceSchema);

export const Time=mongoose.model("Time", time);
export const save=mongoose.model("save",saveSchema) 




