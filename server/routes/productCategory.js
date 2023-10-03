const router = require("express").Router();
const PcategoryController = require("../controllers/productCategory");
const { verifyAccessToken, isAdmin } = require("../middlewares/verifyToken");

router.post(
  "/",
  verifyAccessToken,
  isAdmin,
  PcategoryController.createPcategory
);
router.get("/", PcategoryController.getPcategories);
router.get(
  "/:pcid",
  verifyAccessToken,
  isAdmin,
  PcategoryController.getPcategory
);
router.put(
  "/:pcid",
  verifyAccessToken,
  isAdmin,
  PcategoryController.updatePcategory
);
router.delete(
  "/:pcid",
  verifyAccessToken,
  isAdmin,
  PcategoryController.deletePcategory
);

module.exports = router;
