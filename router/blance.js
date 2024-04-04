import  express  from "express";
import { isAuthenticated,  } from "../utils/utils.js";
import { first } from "../controllers/balController/first.js";
import { second } from "../controllers/balController/second.js";
import { th } from "../controllers/balController/th.js";
import { sav } from "../controllers/balController/sav.js";
import { his } from "../controllers/balController/his.js";
import { del } from "../controllers/balController/del.js";

const balance =express.Router()


balance.get('/balance',isAuthenticated,first)
balance.post('/pay', isAuthenticated,second);




balance.get('/get/balance',isAuthenticated,th)
balance.post('/save', isAuthenticated,sav)
balance.get('/history', isAuthenticated,his)
balance.post('/del', isAuthenticated,del)



export default balance






