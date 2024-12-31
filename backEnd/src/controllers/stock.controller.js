import { Stock } from "../models/stock.model";
import { ApiError, ApiResponse, asyncHandler } from "../utils/index";

const stockCreated = asyncHandler(async (req, res) => {
  try {
    const { tickerSymbol, companyName, tradeType, quantity, averagePrice } =
      req.body;

    if (
      [tickerSymbol, companyName, tradeType, quantity, averagePrice].some(
        (field) => field.trim() === ""
      )
    ) {
      throw new ApiError(400, "All Field is required");
    }

    const stock = await Stock.create({
      tickerSymbol,
      companyName,
      tradeType,
      quantity,
      averagePrice,
    });

    const createdStock = await Stock.findById(stock._id);

    if (!createdStock) {
      throw new ApiError(505, "Something went wrong while generated the stock");
    }

    return res
      .status(202)
      .json(new ApiResponse(200, createdStock, "stock created succefully"));
  } catch (error) {
    throw new ApiError(400, "error while created stock");
  }
});
const getAllStock = asyncHandler(async (req, res) => {
  try {
    const getstocks = await Stock.find();
    res
      .status(200)
      .json(new ApiResponse(200, getstocks, "stock fetch suceefully"));
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
const getStockById = asyncHandler(async (req, res) => {
  try {
    const getStockById = await Stock.findById(req.params.id);
    if (!stock) {
      return res.status(404).json({ message: "Stock not found" });
    }
    res
      .status(200)
      .json(new ApiResponse(202, getStockById, " geting Stock succefully"));
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update a stock
const updateStock = async (req, res) => {
  try {
    const stock = await Stock.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!stock) {
      return res.status(404).json({ message: "Stock not found" });
    }
    res.status(200).json({ message: "Stock updated successfully", stock });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete a stock
const deleteStock = async (req, res) => {
  try {
    const stock = await Stock.findByIdAndDelete(req.params.id);
    if (!stock) {
      return res.status(404).json({ message: "Stock not found" });
    }
    res.status(200).json({ message: "Stock deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export { stockCreated, getAllStock, getStockById, updateStock, deleteStock };
