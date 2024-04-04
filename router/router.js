import express from "express";
import { isAuthenticated, jwtScree, tokenone } from "../utils/utils.js";
import { Bace, Message, Time, friend } from "../models/models.js";
import zod from "zod";
import { Home } from "../controllers/userController/Home.js";
import { si } from "../controllers/userController/sie.js";
import { lo } from "../controllers/userController/lo.js";
import { se } from "../controllers/userController/se.js";
import { del } from "../controllers/userController/del.js";
import { id } from "../controllers/userController/id.js";
import { friendUser } from "../controllers/userController/friendUser.js";
import { Lol } from "../controllers/userController/Lol.js";

const router = express.Router();

// Route to retrieve messages, requires authentication
router.get("/home", isAuthenticated, Home);

// Schema for signup validation

// Route for user signup
router.post("/sign", si);

// Route for user login

router.post("/login", lo);

router.post("/search", se);

router.get("/logout", (req, res) => {
  res.clearCookie("token").json({ error: false });
});

router.get("/del",isAuthenticated, del);

router.post("/id",id);



router.post("/friend", friendUser);
router.get("/lol",isAuthenticated, Lol);
export default router;


