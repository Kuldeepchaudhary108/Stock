import express from "express";
import {
  completeTask,
  getBalance,
} from "../controllers/blockchain.controller.js";

const router = express.Router();

// Route to reward a user for completing a task
router.post("/complete-task", completeTask);
router.post("/balance", getBalance);

// Route to fetch the user's token balance
// router.get("/balance", getBalance);

export default router;
