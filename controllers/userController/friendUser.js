import { Message, friend } from "../../models/models.js";

export const friendUser = async (req, res) => {
  const { id } = req.body;
  const { token } = req.cookies;

  try {
    const existingFriend = await friend.findOne({ userId: id });
    const blName = await Message.findOne({ _id: token });
    const VlName = await Message.findOne({ _id: id });
    
    const validUser = await friend.findOne({ userId: token });

    if (!existingFriend) {
      // Create friend for id
      await friend.create({
        userId: id,
        for: [blName]
      });

      if (!validUser) {
        await friend.create({
          userId: token,
          for: [VlName]
        });
      } else {
        await friend.findOneAndUpdate(
          { userId: token },
          { $push: { for: VlName } }
        );
      }

      res.json({ done: true });
    } else {
     

      const lol=existingFriend.for.some(i=>i.email==blName.email)
      
      if (!lol) {
        await friend.findOneAndUpdate(
          { userId: id },
          { $push: { for: blName } }
        );
 if (!validUser) {
        await friend.create({
          userId: token,
          for: [VlName]
        });
      }else{
        await friend.findOneAndUpdate(
          { userId: token },
          { $push: { for: VlName } }
        );
      }

        res.json({ done: true });
      } else {
        res.json({ done: false });
      }
    }
  } catch (error) {
    console.log(error, "lol");
    res.status(500).json({ error: "Internal server error" });
  }
};






