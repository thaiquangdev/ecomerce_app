const Color = require("../models/color");
const asyncHandler = require("express-async-handler");

const createColor = asyncHandler(async (req, res) => {
  try {
    if (Object.keys(req.body).length === 0) throw new Error("Missing input");
    const newColor = await Color.create(req.body);
    res.status(200).json({
      success: newColor ? true : false,
      newColor,
    });
  } catch (error) {
    throw new Error(error);
  }
});

const updateColor = asyncHandler(async (req, res) => {
  const { cid } = req.params;
  try {
    if (Object.keys(req.body).length === 0) throw new Error("Missing input");
    const updateColor = await Color.findByIdAndUpdate(cid, req.body, {
      new: true,
    });
    res.status(200).json({
      success: updateColor ? true : false,
      updateColor,
    });
  } catch (error) {
    throw new Error(error);
  }
});

const getColor = asyncHandler(async (req, res) => {
  const { cid } = req.params;
  try {
    const getColor = await Color.findById(cid);
    res.status(200).json({
      success: getColor ? true : false,
      getColor,
    });
  } catch (error) {
    throw new Error(error);
  }
});

const getColors = asyncHandler(async (req, res) => {
  try {
    const getColors = await Color.find();
    res.status(200).json({
      success: getColors ? true : false,
      getColors,
    });
  } catch (error) {
    throw new Error(error);
  }
});

const deleteColor = asyncHandler(async (req, res) => {
  const { cid } = req.params;
  try {
    const deleteColor = await Color.findByIdAndDelete(cid);
    res.status(200).json({
      success: deleteColor ? true : false,
      deleteColor,
    });
  } catch (error) {
    throw new Error(error);
  }
});

module.exports = {
  createColor,
  getColor,
  getColors,
  updateColor,
  deleteColor,
};
