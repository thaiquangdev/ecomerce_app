const ProductCategory = require("../models/productCategory");
const asyncHandler = require("express-async-handler");

const createPcategory = asyncHandler(async (req, res) => {
  try {
    if (Object.keys(req.body).length === 0) throw new Error("Missing input");
    const newPcategory = await ProductCategory.create(req.body);
    res.status(200).json({
      success: newPcategory ? true : false,
      newPcategory,
    });
  } catch (error) {
    throw new Error(error);
  }
});

const updatePcategory = asyncHandler(async (req, res) => {
  const { pcid } = req.params;
  try {
    if (Object.keys(req.body).length === 0) throw new Error("Missing input");
    const updatePcategory = await ProductCategory.findByIdAndUpdate(
      pcid,
      req.body,
      { new: true }
    );
    res.status(200).json({
      success: updatePcategory ? true : false,
      updatePcategory,
    });
  } catch (error) {
    throw new Error(error);
  }
});

const getPcategory = asyncHandler(async (req, res) => {
  const { pcid } = req.params;
  try {
    const getPcategory = await ProductCategory.findById(pcid);
    res.status(200).json({
      success: getPcategory ? true : false,
      getPcategory,
    });
  } catch (error) {
    throw new Error(error);
  }
});

const getPcategories = asyncHandler(async (req, res) => {
  try {
    const getPcategories = await ProductCategory.find();
    res.status(200).json({
      success: getPcategories ? true : false,
      getPcategories,
    });
  } catch (error) {
    throw new Error(error);
  }
});

const deletePcategory = asyncHandler(async (req, res) => {
  const { pcid } = req.params;
  try {
    const deletePcategory = await ProductCategory.findByIdAndDelete(pcid);
    res.status(200).json({
      success: deletePcategory ? true : false,
      deletePcategory,
    });
  } catch (error) {
    throw new Error(error);
  }
});

module.exports = {
  createPcategory,
  getPcategory,
  getPcategories,
  updatePcategory,
  deletePcategory,
};
