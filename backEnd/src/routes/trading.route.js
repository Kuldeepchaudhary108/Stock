import Router from "express";

import { verifyJWT } from "../middlewares/auth.middleware.js";

import {
  getAllStock,
  getStockById,
  updateStock,
  deleteStock,
  registerStock,
} from "../controllers/stock.controller.js";

import {
  createPortfolio,
  getPortfolioByUserId,
  addStockToPortfolio,
  removeStockFromPortfolio,
  updatePortfolioBalance,
} from "../controllers/portfolio.controller.js";
import {
  buyStock,
  getAllHolding,
  sellStock,
} from "../controllers/holding.controller.js";
import { getOrder } from "../controllers/order.controller.js";

const router = Router();

/* Stock Routes */
router.route("/newstocks").post(verifyJWT, registerStock);
router.get("/getstocks", getAllStock);
router.get("/stocks/:id", getStockById);
router.put("/stocks/:id", updateStock);
router.delete("/stocks/:id", deleteStock);

//
router.route("/sell-stock").post(verifyJWT, sellStock);
router.route("/buy-stock").post(verifyJWT, buyStock);
router.route("/holding").get(verifyJWT, getAllHolding);
router.route("/order").get(verifyJWT, getOrder);

/* Portfolio Routes */
router.post("/portfolios", createPortfolio);
router.get("/portfolios/:userId", getPortfolioByUserId);
router.post("/portfolios/add-stock", addStockToPortfolio);
router.post("/portfolios/remove-stock", removeStockFromPortfolio);
router.put("/portfolios/update-balance", updatePortfolioBalance);

export default router;
