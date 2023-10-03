const blogCategory = require("../models/blogCategory");
const asyncHandler = require("express-async-handler");

const createBcategory = asyncHandler(async (req, res) => {
  try {
    if (Object.keys(req.body).length === 0) throw new Error("Missing input");
    const newBcategory = await blogCategory.create(req.body);
    res.status(200).json({
      success: newBcategory ? true : false,
      newBcategory,
    });
  } catch (error) {
    throw new Error(error);
  }
});

const updateBcategory = asyncHandler(async (req, res) => {
  const { bcid } = req.params;
  try {
    if (Object.keys(req.body).length === 0) throw new Error("Missing input");
    const updateBcategory = await blogCategory.findByIdAndUpdate(
      bcid,
      req.body,
      { new: true }
    );
    res.status(200).json({
      success: updateBcategory ? true : false,
      updateBcategory,
    });
  } catch (error) {
    throw new Error(error);
  }
});

const getBcategory = asyncHandler(async (req, res) => {
  const { bcid } = req.params;
  try {
    const getBcategory = await blogCategory.findById(bcid);
    res.status(200).json({
      success: getBcategory ? true : false,
      getBcategory,
    });
  } catch (error) {
    throw new Error(error);
  }
});

const getBcategories = asyncHandler(async (req, res) => {
  try {
    const getBcategories = await blogCategory.find();
    res.status(200).json({
      success: getBcategories ? true : false,
      getBcategories,
    });
  } catch (error) {
    throw new Error(error);
  }
});

const deleteBcategory = asyncHandler(async (req, res) => {
  const { bcid } = req.params;
  try {
    const deleteBcategory = await blogCategory.findByIdAndDelete(bcid);
    res.status(200).json({
      success: deleteBcategory ? true : false,
      deleteBcategory,
    });
  } catch (error) {
    throw new Error(error);
  }
});

module.exports = {
  createBcategory,
  getBcategory,
  getBcategories,
  updateBcategory,
  deleteBcategory,
};
