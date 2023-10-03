const router = require("express").Router();
const userController = require("../controllers/user");
const { verifyAccessToken, isAdmin } = require("../middlewares/verifyToken");

router.post("/register", userController.register);
router.post("/login", userController.login);
router.post("/refreshtoken", userController.refreshAccessToken);
router.get("/logout", verifyAccessToken, userController.logout);

router.get("/current", verifyAccessToken, userController.getUser);
router.get("/", verifyAccessToken, isAdmin, userController.getUsers);

router.get("/forgotpassword", userController.forgotPassword);
router.put("/resetpassword", userController.resetPassword);

router.put("/", verifyAccessToken, userController.updateUser);
router.put("/address", verifyAccessToken, userController.updateUserAddress);
router.put("/cart", verifyAccessToken, userController.updateCart);
router.put(
  "/:uid",
  verifyAccessToken,
  isAdmin,
  userController.updateUserByAdmin
);

router.delete("/", verifyAccessToken, isAdmin, userController.deleteUser);

module.exports = router;
