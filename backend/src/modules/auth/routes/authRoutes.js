//src/modules/auth/routes/authRoutes.js

const router = require("express").Router();
const authController = require("../controllers/authController");
const authenticate = require("../../../middlewares/authMiddleware");

// Google OAuth routes for authentication
router.get("/google", authController.googleAuth);

router.get("/google/callback", authController.googleAuthCallback);

router.post("/register", authController.registerUser);

router.post("/login", authController.loginUser);

router.post("/admin/login", authController.loginAdmin);

router.post("/admin/register", authController.registerAdmin);

router.get("/me", authenticate, authController.loggedInUser);

module.exports = router;
