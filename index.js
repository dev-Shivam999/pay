import express from 'express';
import cookieParser from 'cookie-parser';
import { db } from './db/db.js';
import cors from 'cors'

import dotenv from "dotenv"
import router from './router/router.js';
import balance from './router/blance.js';
dotenv.config()

export const app = express();

app.use(cookieParser());
app.use(express.json());
app.use(cors({
    origin:process.env.WEB,
    credentials:true,
}))

db()


// Middleware

app.use("/user",router)
app.use("/bal",balance)


// Start the server
const PORT = process.env.PORT || 10001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});







