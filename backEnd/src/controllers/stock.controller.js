import { Stock } from "../models/stock.model.js";
import { ApiError, ApiResponse, asyncHandler } from "../utils/index.js";

const registerStock = asyncHandler(async (req, res) => {
  try {
    const { Symbol, companyName, quantity, lastDayTraderPrice, currentPrice } =
      req.body;

    // Validate input
    // if (
    //   [Symbol, companyName, quantity, lastDayTraderPrice, currentPrice].some(
    //     (field) => typeof field !== "string" || field.trim() === ""
    //   )
    // ) {
    //   throw new ApiError(400, "All fields are required");
    // }

    // Check if stock already exists
    const existingStock = await Stock.findOne({ Symbol });
    if (existingStock) {
      throw new ApiError(400, "Stock already exists");
    }

    // Create new stock
    const newStock = await Stock.create({
      Symbol,
      companyName,
      lastDayTraderPrice,
      currentPrice,
      quantity,
    });

    const createdStock = await Stock.findById(newStock._id);

    if (!createdStock) {
      throw new ApiError(
        500,
        "Something went wrong while generating the stock"
      );
    }

    return res
      .status(201) // 201 is the appropriate status for resource creation
      .json(new ApiResponse(201, createdStock, "Stock created successfully"));
  } catch (error) {
    console.error(error); // Log the actual error
    throw new ApiError(400, error.message || "Error while creating stock");
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
    if (!getStockById) {
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

export { registerStock, getAllStock, getStockById, updateStock, deleteStock };
