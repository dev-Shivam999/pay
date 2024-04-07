import express from 'express';
import cookieParser from 'cookie-parser';
import { db } from './db/db.js';
import cors from 'cors'

import dotenv, { config } from "dotenv"
import router from './router/router.js';
import balance from './router/blance.js';


export const app = express();

config({ path: "./.env" })
// origin:,
app.use(cors({
    origin:'https://harshita-gori.netlify.app',
    credentials:true,
}))
app.use(cookieParser());
app.use(express.json());



db()



// Middleware

app.use("/user",router)
app.use("/bal",balance)


const PORT = 7852;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});







