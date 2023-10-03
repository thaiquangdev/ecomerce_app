const Order = require("../models/order");
const User = require("../models/user");
const Coupon = require("../models/coupon");
const asyncHandler = require("express-async-handler");

const createOrder = asyncHandler(async (req, res) => {
  const { _id } = req.user;
  const { coupon } = req.body;
  try {
    const userCart = await User.findById(_id)
      .select("cart")
      .populate("cart.product", "title price");
    const products = userCart?.cart?.map((item) => ({
      product: item.product._id,
      count: item.quantity,
      color: item.color,
    }));
    const total = userCart?.cart?.reduce(
      (sum, item) => item.product.price * item.quantity + sum,
      0
    );
    const createData = { products, total, orderBy: _id };
    if (coupon) {
      const selectCoupon = await Coupon.findById(coupon);
      total =
        total -
        Math.round((total * (1 - +selectCoupon.discount / 100)) / 1000) * 1000;
      createData.total = total;
      createData.coupon = coupon;
    }

    const rs = await Order.create(createData);
    return res.json({
      success: rs ? true : false,
      rs: rs ? rs : "Some thing went wrong",
    });
  } catch (error) {
    throw new Error(error);
  }
});

const updateStatus = asyncHandler(async (req, res) => {
  const { oid } = req.params;
  const { status } = req.body;
  try {
    if (!status) throw new Error("Missing input");
    const response = await Order.findByIdAndUpdate(
      oid,
      { status },
      { new: true }
    );

    return res.json({
      success: response ? true : false,
      rs: response ? response : "Some thing went wrong",
    });
  } catch (error) {
    throw new Error(error);
  }
});

const getUserOrder = asyncHandler(async (req, res) => {
  const { _id } = req.user;
  try {
    const response = await Order.findOne({ orderBy: _id });

    return res.json({
      success: response ? true : false,
      rs: response ? response : "Some thing went wrong",
    });
  } catch (error) {
    throw new Error(error);
  }
});

const getOrders = asyncHandler(async (req, res) => {
  try {
    const response = await Order.find();

    return res.json({
      success: response ? true : false,
      rs: response ? response : "Some thing went wrong",
    });
  } catch (error) {
    throw new Error(error);
  }
});

module.exports = {
  createOrder,
  updateStatus,
  getUserOrder,
  getOrders,
};
