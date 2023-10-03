const Brand = require("../models/brand");
const asyncHandler = require("express-async-handler");

const createBrand = asyncHandler(async (req, res) => {
  try {
    if (Object.keys(req.body).length === 0) throw new Error("Missing input");
    const newBrand = await Brand.create(req.body);
    res.status(200).json({
      success: newBrand ? true : false,
      newBrand,
    });
  } catch (error) {
    throw new Error(error);
  }
});

const updateBrand = asyncHandler(async (req, res) => {
  const { bid } = req.params;
  try {
    if (Object.keys(req.body).length === 0) throw new Error("Missing input");
    const updateBrand = await Brand.findByIdAndUpdate(bid, req.body, {
      new: true,
    });
    res.status(200).json({
      success: updateBrand ? true : false,
      updateBrand,
    });
  } catch (error) {
    throw new Error(error);
  }
});

const getBrand = asyncHandler(async (req, res) => {
  const { bid } = req.params;
  try {
    const getBrand = await Brand.findById(bid);
    res.status(200).json({
      success: getBrand ? true : false,
      getBrand,
    });
  } catch (error) {
    throw new Error(error);
  }
});

const getBrands = asyncHandler(async (req, res) => {
  try {
    const getBrands = await Brand.find();
    res.status(200).json({
      success: getBrands ? true : false,
      getBcategories,
    });
  } catch (error) {
    throw new Error(error);
  }
});

const deleteBrand = asyncHandler(async (req, res) => {
  const { bcid } = req.params;
  try {
    const deleteBrand = await Brand.findByIdAndDelete(bcid);
    res.status(200).json({
      success: deleteBrand ? true : false,
      deleteBrand,
    });
  } catch (error) {
    throw new Error(error);
  }
});

module.exports = {
  createBrand,
  getBrand,
  getBrands,
  updateBrand,
  deleteBrand,
};
