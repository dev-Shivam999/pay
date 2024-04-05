import express from 'express';
import cookieParser from 'cookie-parser';
import { db } from './db/db.js';
import cors from 'cors'

// import dotenv, { config } from "dotenv"
import router from './router/router.js';
import balance from './router/blance.js';


export const app = express();

app.use(cors({
    origin:'http://localhost:5173',
    credentials:true,
}))
app.use(cookieParser());
app.use(express.json());


// config({ path: "./.env" })

db()



// Middleware

app.use("/user",router)
app.use("/bal",balance)


const PORT = 7852;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});







