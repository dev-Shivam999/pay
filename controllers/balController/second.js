import mongoose from "mongoose";
import { Bace } from "../../models/models.js";

export const second = async (req, res) => {
    const { payment, id } = req.body;
   
    const token = await req.cookies;
    const userId = token.token;


    try {

        const debB = await Bace.findOne({ userId: userId })
        const creB = await Bace.findOne({ userId: id })

        if (!debB || !creB) {
            return res.json({ success: false, message: "Error: User not found." });
        }

        const dbe = debB.balance;
        const cb = creB.balance;

        if (parseInt(dbe) < payment || payment <= 0 || parseInt(dbe) < 200) {
            return res.json({ success: false, message: "Insufficient balance or invalid payment amount." });
        }

        const newDebBalance = parseInt(dbe) - parseInt(payment);
        const newCreBalance = parseInt(cb) + parseInt(payment);

        // Update sender's balance
        await Bace.findOneAndUpdate({ userId: userId }, { $set: { balance: newDebBalance } })

        // Update receiver's balance
        await Bace.findOneAndUpdate({ userId: id }, { $set: { balance: newCreBalance } })

        // Commit the transaction

        return res.json({ success: true, message: "Transaction successful.", balance: { newDebBalance, creB, debB } });
    } catch (error) {
        console.error('Error processing transaction:', error);
 // Abort the transaction if there's an error
        return res.status(500).json({ success: false, message: "An error occurred while processing the transaction." });
    } 
}
