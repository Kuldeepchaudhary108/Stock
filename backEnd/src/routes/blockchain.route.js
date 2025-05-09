import express from "express";
import { verifyJWT } from "../middlewares/auth.middleware.js";

import {
  completeTask,
  getBalance,
} from "../controllers/blockchain.controller.js";

const router = express.Router();


router.route("/complete-task").post(verifyJWT, completeTask);
router.route("/balance").post(verifyJWT, getBalance);

export default router;
