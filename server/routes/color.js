const router = require("express").Router();
const ColorController = require("../controllers/color");
const { verifyAccessToken, isAdmin } = require("../middlewares/verifyToken");

router.post("/", verifyAccessToken, isAdmin, ColorController.createColor);
router.get("/", ColorController.getColors);
router.get("/:cid", verifyAccessToken, isAdmin, ColorController.getColor);
router.put("/:cid", verifyAccessToken, isAdmin, ColorController.updateColor);
router.delete("/:cid", verifyAccessToken, isAdmin, ColorController.deleteColor);

module.exports = router;
