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
// app.use(cors({
//     origin:process.env.WEB,
//     credentials:true,
// }))
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:5173');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  // Allow preflight requests to pass without 403 error
  if (req.method === 'OPTIONS') {
    res.sendStatus(200);
  } else {
    next();
  }
}); 
db()


// Middleware

app.use("/user",router)
app.use("/bal",balance)


// Start the server
const PORT = process.env.PORT || 10001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});







