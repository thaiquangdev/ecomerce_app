const User = require("../models/user");
const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const sendMail = require("../utils/sendMail");
const {
  generalAccessToken,
  generalRefreshToken,
} = require("../middlewares/jwt");

const register = asyncHandler(async (req, res) => {
  const { email, password, firstname, lastname } = req.body;
  try {
    if (!email || !password || !firstname || !lastname)
      return res.status(400).json({
        success: false,
        mes: "Missing input",
      });

    const user = await User.findOne({ email });

    if (user) throw new Error("User has existed!");
    else {
      const newUser = await User.create(req.body);
      return res.status(200).json({
        success: newUser ? true : false,
        mes: newUser
          ? "Register is successfully. Please go login!"
          : "Register is Failed",
      });
    }
  } catch (error) {
    throw new Error(error);
  }
});

const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  try {
    if (!email || !password)
      return res.status(400).json({
        success: false,
        mes: "Missing input",
      });

    const user = await User.findOne({ email });
    if (user && user.isCorrectPassword(password)) {
      const { password, refreshToken, ...userData } = user.toObject();
      const accessToken = generalAccessToken(user._id, user.role);
      const newRefreshToken = generalRefreshToken(user._id);
      await User.findByIdAndUpdate(
        user._id,
        { refreshToken: newRefreshToken },
        { new: true }
      );
      res.cookie("refreshToken", newRefreshToken, {
        httpOnly: true,
        maxAge: 7 * 24 * 60 * 60 * 1000,
      });
      return res.status(200).json({
        success: true,
        accessToken,
        userData,
      });
    } else {
      throw new Error("Invalid credentials!");
    }
  } catch (error) {
    throw new Error(error);
  }
});

const refreshAccessToken = asyncHandler(async (req, res) => {
  const cookie = req.cookies;
  try {
    if (!cookie && !cookie.refreshToken)
      throw new Error("No refresh token in cookies");
    const rs = jwt.verify(cookie.refreshToken, process.env.JWT_SECRET);

    const response = await User.findOne({
      _id: rs._id,
      refreshToken: cookie.refreshToken,
    });

    return res.status(200).json({
      success: response ? true : false,
      newAccessToken: response
        ? generalAccessToken(response._id, response.role)
        : "Refresh token valid",
    });
  } catch (error) {
    throw new Error(error);
  }
});

const logout = asyncHandler(async (req, res) => {
  const cookie = req.cookies;
  try {
    if (!cookie || !cookie.refreshToken)
      throw new Error("No refresh token in cookies");
    await User.findOneAndUpdate(
      { refreshToken: cookie.refreshToken },
      { refreshToken: "" },
      { new: true }
    );
    res.clearCookie("refeshToken", {
      httpOnly: true,
      secure: true,
    });
    return res.status(200).json({
      success: true,
      mes: "Logout is successfully",
    });
  } catch (error) {
    throw new Error(error);
  }
});

const forgotPassword = asyncHandler(async (req, res) => {
  const { email } = req.query;
  try {
    if (!email) throw new Error("Missing Email");
    const user = await User.findOne({ email });
    if (!user) throw new Error("User not found");
    const resetToken = await user.createPasswordChangedToken();
    await user.save();

    const html = `Vui lòng click vào link dưới đây để thay đổi mật khẩu của bạn. Link này sẽ hết hạn sau 15 phút. <a href=${process.env.URL_SERVER}/api/user/reset-password/${resetToken}>Click Here</a>`;

    const data = {
      email,
      html,
    };

    const rs = await sendMail(data);
    return res.status(200).json({
      success: true,
      rs,
    });
  } catch (error) {
    throw new Error(error);
  }
});

const resetPassword = asyncHandler(async (req, res) => {
  const { password, token } = req.body;
  try {
    if (!password || !token) throw new Error("Mising input");
    const passwordResetToken = crypto
      .createHash("sha256")
      .update(token)
      .digest("hex");
    const user = await User.findOne({
      passwordResetToken,
      passwordResetExpires: { $gt: Date.now() },
    });
    if (!user) throw new Error("Invalid reset token");
    user.password = password;
    user.passwordResetToken = undefined;
    user.passwordChangedAt = Date.now();
    user.passwordResetExpires = undefined;
    await user.save();
    return res.status(200).json({
      success: user ? true : false,
      mes: user ? "Updated password" : "Something went wrong",
    });
  } catch (error) {
    throw new Error(error);
  }
});

const getUser = asyncHandler(async (req, res) => {
  const { _id } = req.user;
  try {
    const user = await User.findById(_id).select(
      "-password -role -refreshToken"
    );
    return res.status(200).json({
      success: user ? true : false,
      rs: user ? user : "User not found!",
    });
  } catch (error) {
    throw new Error(error);
  }
});

const getUsers = asyncHandler(async (req, res) => {
  try {
    const response = await User.find().select("-password -role -refreshToken");
    return res.status(200).json({
      success: response ? true : false,
      users: response,
    });
  } catch (error) {
    throw new Error(error);
  }
});

const updateUser = asyncHandler(async (req, res) => {
  const { _id } = req.user;

  try {
    if (Object.keys(req.body).length === 0) throw new Error("Missing input");
    const response = await User.findByIdAndUpdate(_id, req.body, {
      new: true,
    }).select("-password -role -refreshToken");
    return res.status(200).json({
      success: response ? true : false,
      updateUser: response ? response : "Some thing went wrong",
    });
  } catch (error) {
    throw new Error(error);
  }
});

const updateUserByAdmin = asyncHandler(async (req, res) => {
  const { uid } = req.params;

  try {
    if (Object.keys(req.body).length === 0) throw new Error("Missing input");
    const response = await User.findByIdAndUpdate(uid, req.body, {
      new: true,
    }).select("-password -role -refreshToken");
    return res.status(200).json({
      success: response ? true : false,
      updateUser: response ? response : "Some thing went wrong",
    });
  } catch (error) {
    throw new Error(error);
  }
});

const updateUserAddress = asyncHandler(async (req, res) => {
  const { _id } = req.user;

  try {
    if (!req.body.address) throw new Error("Missing input");
    const response = await User.findByIdAndUpdate(
      _id,
      { $push: { address: req.body.address } },
      {
        new: true,
      }
    ).select("-password -role -refreshToken");
    return res.status(200).json({
      success: response ? true : false,
      updateUser: response ? response : "Some thing went wrong",
    });
  } catch (error) {
    throw new Error(error);
  }
});

const updateCart = asyncHandler(async (req, res) => {
  const { _id } = req.user;
  const { pid, quantity, color } = req.body;
  try {
    if (!pid || !quantity || !color) throw new Error("Missing input");
    const user = await User.findById(_id).select("cart");
    const alreadyProduct = user?.cart?.find(
      (item) => item.product.toString() === pid
    );
    if (alreadyProduct) {
      if (alreadyProduct.color == color) {
        const response = await User.updateOne(
          { cart: { $elemMatch: alreadyProduct } },
          { $set: { "cart.$.quantity": quantity } },
          { new: true }
        );
        return res.status(200).json({
          success: response ? true : false,
          updateCart: response ? response : "Some thing went wrong",
        });
      } else {
        const response = await User.findByIdAndUpdate(
          _id,
          { $push: { cart: { product: pid, quantity, color } } },
          { new: true }
        );
        return res.status(200).json({
          success: response ? true : false,
          updateCart: response ? response : "Some thing went wrong",
        });
      }
    } else {
      const response = await User.findByIdAndUpdate(
        _id,
        { $push: { cart: { product: pid, quantity, color } } },
        { new: true }
      );
      return res.status(200).json({
        success: response ? true : false,
        updateCart: response ? response : "Some thing went wrong",
      });
    }
  } catch (error) {
    throw new Error(error);
  }
});

const deleteUser = asyncHandler(async (req, res) => {
  const { _id } = req.query;

  try {
    const response = await User.findByIdAndDelete(_id);
    return res.status(200).json({
      success: response ? true : false,
      deleteUser: response ? "User deleted" : "Some thing went wrong",
    });
  } catch (error) {
    throw new Error(error);
  }
});

module.exports = {
  register,
  login,
  refreshAccessToken,
  logout,
  forgotPassword,
  resetPassword,
  getUser,
  getUsers,
  updateUser,
  updateUserByAdmin,
  deleteUser,
  updateUserAddress,
  updateCart,
};
