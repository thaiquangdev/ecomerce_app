const router = require("express").Router();
const BcategoryController = require("../controllers/blogCategory");
const { verifyAccessToken, isAdmin } = require("../middlewares/verifyToken");

router.post(
  "/",
  verifyAccessToken,
  isAdmin,
  BcategoryController.createBcategory
);
router.get("/", BcategoryController.getBcategories);
router.get(
  "/:bcid",
  verifyAccessToken,
  isAdmin,
  BcategoryController.getBcategory
);
router.put(
  "/:bcid",
  verifyAccessToken,
  isAdmin,
  BcategoryController.updateBcategory
);
router.delete(
  "/:bcid",
  verifyAccessToken,
  isAdmin,
  BcategoryController.deleteBcategory
);

module.exports = router;
