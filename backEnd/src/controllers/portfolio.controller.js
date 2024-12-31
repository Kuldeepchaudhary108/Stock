import { Portfolio } from "../models/portfolio.model.js";
import { Stock } from "../models/stock.model.js";
import { ApiError, ApiResponse } from "../utils/index.js";
// Create a new portfolio
const createPortfolio = async (req, res) => {
  try {
    const { stockHolder } = req.body;
    const portfolio = new Portfolio({ stockHolder });
    await portfolio.save();
    res
      .status(201)
      .json(new ApiResponse(202, portfolio, "Portfolio created successfully"));
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get a portfolio by user ID
const getPortfolioByUserId = async (req, res) => {
  try {
    const portfolio = await Portfolio.findOne({
      stockHolder: req.params.userId,
    }).populate("stocks");
    if (!portfolio) {
      throw new ApiError(404, "Portfolio not found");
    }
    res.status(200).json(new ApiResponse(202, portfolio));
  } catch (error) {
    throw new ApiError(404, error);
  }
};

// Add stock to portfolio
const addStockToPortfolio = async (req, res) => {
  try {
    const { portfolioId, stockId } = req.body;
    const portfolio = await Portfolio.findById(portfolioId);
    if (!portfolio) {
      throw new ApiError(404, "portfolio not found");
    }
    const stock = await Stock.findById(stockId);
    if (!stock) {
      throw new ApiError(404, "stock not found");
    }
    portfolio.stocks.push(stockId);
    await portfolio.save();
    res
      .status(200)
      .json(
        new ApiResponse(202, portfolio, "Stock added to portfolio successfully")
      );
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Remove stock from portfolio
const removeStockFromPortfolio = async (req, res) => {
  try {
    const { portfolioId, stockId } = req.body;
    const portfolio = await Portfolio.findById(portfolioId);
    if (!portfolio) {
      return res.status(404).json({ message: "Portfolio not found" });
    }
    portfolio.stocks = portfolio.stocks.filter(
      (id) => id.toString() !== stockId
    );
    await portfolio.save();
    res.status(200).json({
      message: "Stock removed from portfolio successfully",
      portfolio,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Update portfolio balance
const updatePortfolioBalance = async (req, res) => {
  try {
    const { portfolioId, balance } = req.body;
    const portfolio = await Portfolio.findByIdAndUpdate(
      portfolioId,
      { balance },
      { new: true }
    );
    if (!portfolio) {
      return res.status(404).json({ message: "Portfolio not found" });
    }
    res
      .status(200)
      .json({ message: "Portfolio balance updated successfully", portfolio });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export {
  updatePortfolioBalance,
  removeStockFromPortfolio,
  addStockToPortfolio,
  getPortfolioByUserId,
  createPortfolio,
};
