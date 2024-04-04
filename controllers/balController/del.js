import { save } from "../../models/models.js";
export const del = async (req, res) => {
    const { data2 } = req.body;

    try {
        const result = await save.updateOne(
            { "save": { $in: [data2] } }, // Match documents where data2 is in the save array
            { $pull: { "save": data2 } }   // Pull (remove) data2 from the save array
        );

        console.log("Result:", result); // Log the result to check its value

        if (result && result.nModified > 0) {
            res.json({ success: false, message: " Data not found or not deleted ",  });
        } else {
            res.json({ success: true, message: "  Deleted successfully", });
        }
    } catch (error) {
        console.log("Error:", error); // Log the error to see what went wrong
        res.status(500).json({ success: false, message: "Internal server error", error: error.message });
    }
};




