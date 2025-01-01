import Router from "express";

import {
  stockCreated,
  getAllStock,
  getStockById,
  updateStock,
  deleteStock,
} from "../controllers/stock.controller.js";

import {
  createPortfolio,
  getPortfolioByUserId,
  addStockToPortfolio,
  removeStockFromPortfolio,
  updatePortfolioBalance,
} from "../controllers/portfolio.controller.js";

const router = Router();

/* Stock Routes */
router.post("/newstocks", stockCreated);
router.get("/getstocks", getAllStock);
router.get("/stocks/:id", getStockById);
router.put("/stocks/:id", updateStock);
router.delete("/stocks/:id", deleteStock);

/* Portfolio Routes */
router.post("/portfolios", createPortfolio);
router.get("/portfolios/:userId", getPortfolioByUserId);
router.post("/portfolios/add-stock", addStockToPortfolio);
router.post("/portfolios/remove-stock", removeStockFromPortfolio);
router.put("/portfolios/update-balance", updatePortfolioBalance);

export default router;
