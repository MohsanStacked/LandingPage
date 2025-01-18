import express from "express";
import { getAllUsers, addUser } from "../controllers/usersController.js";

const router = express.Router();

router.get("/all", getAllUsers);
router.post("/add", addUser);

export default router;
