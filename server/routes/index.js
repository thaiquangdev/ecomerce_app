const userRouter = require("./user");
const productRouter = require("./product");
const PcategoryRouter = require("./productCategory");
const BcategoryRouter = require("./blogCategory");
const blogRouter = require("./blog");
const couponRouter = require("./coupon");
const orderRouter = require("./order");
const colorRouter = require("./color");
const sizeRouter = require("./size");
const insertData = require("./insert");
const { notFound, errHandler } = require("../middlewares/errHandler");

const initRoutes = (app) => {
  app.use("/api/user", userRouter);
  app.use("/api/product", productRouter);
  app.use("/api/pcategory", PcategoryRouter);
  app.use("/api/blog", blogRouter);
  app.use("/api/BcategoryRouter", BcategoryRouter);
  app.use("/api/coupon", couponRouter);
  app.use("/api/order", orderRouter);
  app.use("/api/color", colorRouter);
  app.use("/api/size", sizeRouter);
  app.use("/api/insert", insertData);

  app.use(notFound);
  app.use(errHandler);
};

module.exports = initRoutes;
