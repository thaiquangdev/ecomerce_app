const Coupon = require("../models/coupon");
const asyncHandler = require("express-async-handler");

const createCoupon = asyncHandler(async (req, res) => {
  const { name, discount, expiry } = req.body;
  try {
    if (!name || !discount || !expiry) throw new Error("Missing input");
    const response = await Coupon.create({
      ...req.body,
      expiry: Date.now() + +expiry * 24 * 60 * 60 * 1000,
    });
    return res.json({
      success: response ? true : false,
      createdCoupon: response ? response : " can not create coupon",
    });
  } catch (error) {
    throw new Error(error);
  }
});

const getCoupons = asyncHandler(async (req, res) => {
  try {
    const response = await Coupon.find().select("-createdAt -updatedAt");
    return res.json({
      success: response ? true : false,
      coupons: response ? response : "can not get all coupon",
    });
  } catch (error) {
    throw new Error(error);
  }
});

const updateCoupon = asyncHandler(async (req, res) => {
  const { cid } = req.params;
  try {
    if (Object.keys(req.body).length === 0) throw new Error("Missing input");
    if (req.body.expiry)
      req.body.expiry = Date.now() + +expiry * 24 * 60 * 60 * 1000;
    const response = await Coupon.findByIdAndUpdate(cid, req.body, {
      new: true,
    });
    return res.json({
      success: response ? true : false,
      updatedCoupon: response ? response : " can not update coupon",
    });
  } catch (error) {
    throw new Error(error);
  }
});

const deleteCoupon = asyncHandler(async (req, res) => {
  const { cid } = req.params;
  try {
    const response = await Coupon.findByIdAndDelete(cid);
    return res.json({
      success: response ? true : false,
      deletedCoupon: response ? response : " can not delete coupon",
    });
  } catch (error) {
    throw new Error(error);
  }
});

module.exports = {
  createCoupon,
  getCoupons,
  updateCoupon,
  deleteCoupon,
};
