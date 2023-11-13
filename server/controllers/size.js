const Size = require("../models/size");
const asyncHandler = require("express-async-handler");

const createSize = asyncHandler(async (req, res) => {
  try {
    if (Object.keys(req.body).length === 0) throw new Error("Missing input");
    const newSize = await Size.create(req.body);
    res.status(200).json({
      success: newSize ? true : false,
      newSize,
    });
  } catch (error) {
    throw new Error(error);
  }
});

const updateSize = asyncHandler(async (req, res) => {
  const { sid } = req.params;
  try {
    if (Object.keys(req.body).length === 0) throw new Error("Missing input");
    const updateSize = await Size.findByIdAndUpdate(sid, req.body, {
      new: true,
    });
    res.status(200).json({
      success: updateSize ? true : false,
      updateSize,
    });
  } catch (error) {
    throw new Error(error);
  }
});

const getSize = asyncHandler(async (req, res) => {
  const { sid } = req.params;
  try {
    const getSize = await Size.findById(sid);
    res.status(200).json({
      success: getSize ? true : false,
      getSize,
    });
  } catch (error) {
    throw new Error(error);
  }
});

const getSizes = asyncHandler(async (req, res) => {
  try {
    const getSizes = await Size.find();
    res.status(200).json({
      success: getSizes ? true : false,
      getSizes,
    });
  } catch (error) {
    throw new Error(error);
  }
});

const deleteSize = asyncHandler(async (req, res) => {
  const { sid } = req.params;
  try {
    const deleteSize = await Size.findByIdAndDelete(sid);
    res.status(200).json({
      success: deleteSize ? true : false,
      deleteSize,
    });
  } catch (error) {
    throw new Error(error);
  }
});

module.exports = {
  createSize,
  getSize,
  getSizes,
  updateSize,
  deleteSize,
};
