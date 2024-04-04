import { Message } from "../../models/models.js";
import { tokenone } from "../../utils/utils.js";

export const se= async (req, res) => {
  try {
    
    
    const query = req.query.q;
    const results = await Message.find({ name: { $regex: String(query), $options: 'i' } }); // Case-insensitive search

    // console.log(data);
    res.json({error:false, results: results.filter(i => i._id != tokenone.token)});
  } catch (error) {
    console.error('Error searching:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}



