const router = require("express").Router();
const SizeController = require("../controllers/size");
const { verifyAccessToken, isAdmin } = require("../middlewares/verifyToken");

router.post("/", verifyAccessToken, isAdmin, SizeController.createSize);
router.get("/", SizeController.getSizes);
router.get("/:sid", verifyAccessToken, isAdmin, SizeController.getSize);
router.put("/:sid", verifyAccessToken, isAdmin, SizeController.updateSize);
router.delete("/:sid", verifyAccessToken, isAdmin, SizeController.deleteSize);

module.exports = router;
