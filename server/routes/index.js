const userRouter = require("./user");
const productRouter = require("./product");
const PcategoryRouter = require("./productCategory");
const BcategoryRouter = require("./blogCategory");
const blogRouter = require("./blog");
const brandRouter = require("./brand");
const couponRouter = require("./coupon");
const orderRouter = require("./order");
const { notFound, errHandler } = require("../middlewares/errHandler");

const initRoutes = (app) => {
  app.use("/api/user", userRouter);
  app.use("/api/product", productRouter);
  app.use("/api/pcategory", PcategoryRouter);
  app.use("/api/blog", blogRouter);
  app.use("/api/BcategoryRouter", BcategoryRouter);
  app.use("/api/brand", brandRouter);
  app.use("/api/coupon", couponRouter);
  app.use("/api/order", orderRouter);

  app.use(notFound);
  app.use(errHandler);
};

module.exports = initRoutes;
