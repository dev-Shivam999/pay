import { Message } from "../../models/models.js";

export const id= async (req, res) => {
  const { id } = req.body;

  try {
    const be = await Message.findById({ _id: id });

    if (!be) {
      return res.json({ error: true, message: "user not found" });
    } else {
      return res.json({
        error: false,
        user:be,
      });
    }
  } catch (error) {
    return res.json({ error: true, message: "user not found" });
  }
}



