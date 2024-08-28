//src/modules/auth/routes/authRoutes.js

const router = require("express").Router();
const authController = require("../controllers/authController");

// Google OAuth routes for authentication
router.get("/google", authController.googleAuth);

router.get("/google/callback", authController.googleAuthCallback);

module.exports = router;
