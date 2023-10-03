const router = require("express").Router();
const blogController = require("../controllers/blog");
const { verifyAccessToken, isAdmin } = require("../middlewares/verifyToken");
const uploader = require("../configs/cloudinary.config");

router.post("/", verifyAccessToken, isAdmin, blogController.createBlog);
router.get("/", blogController.getBlogs);
router.get("/:bid", blogController.getBlog);
router.put("/like", verifyAccessToken, blogController.likeBlog);
router.put("/dislike", verifyAccessToken, blogController.dislikeBlog);
router.put(
  "/uploadimage/:bid",
  verifyAccessToken,
  isAdmin,
  uploader.single("image"),
  blogController.uploadImagesBlog
);
router.put("/:bid", verifyAccessToken, isAdmin, blogController.updateBlog);
router.delete("/:bid", verifyAccessToken, blogController.deleteBlog);

module.exports = router;
