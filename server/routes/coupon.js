const router = require("express").Router();
const couponController = require("../controllers/coupon");
const { verifyAccessToken, isAdmin } = require("../middlewares/verifyToken");

router.post("/", verifyAccessToken, isAdmin, couponController.createCoupon);
router.get("/", couponController.getCoupons);
router.put("/:cid", verifyAccessToken, isAdmin, couponController.updateCoupon);

module.exports = router;
