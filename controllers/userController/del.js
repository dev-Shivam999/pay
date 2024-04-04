import { Bace, Message, Time, friend } from "../../models/models.js";
import { tokenone } from "../../utils/utils.js";

export const del=async (req, res) => {
  const token =tokenone.token
  try {
   const blName = await Message.findOne({ _id: token });
    await Message.deleteOne({ _id: token });
    await Bace.deleteOne({ userId: token });
    await Time.deleteOne({ userId: token });
    const o=await friend.deleteOne({ userId: token });
const i=await friend.updateOne(
            { "for": { $in: [blName] } }, // Match documents where data2 is in the save array
            { $pull: { "for": blName } }   // Pull (remove) data2 from the save array
        );
        console.log(i,o);
    res.cookie('token',"")
    res.json({ error: false });
  } catch (error) {
    console.log("lol");
  }
}