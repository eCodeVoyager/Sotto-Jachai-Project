//src/modules/auth/routes/authRoutes.js

const router = require("express").Router();
const authController = require("../controllers/authController");
const authenticate = require("../../../middlewares/authMiddleware");
const validate = require("../../../middlewares/validatorMiddleware");
const authValidation = require("../validations/authValidation");

// Local authentication routes
router.get("/me", authenticate, authController.loggedInUser);

router.post(
  "/register",
  validate(authValidation.RegisterUserValidation),
  authController.registerUser
);

router.post(
  "/login",
  validate(authValidation.LoginValidation),
  authController.loginUser
);

router.post(
  "/admin/login",
  validate(authValidation.LoginValidation),
  authController.loginAdmin
);

router.post(
  "/admin/register",
  validate(authValidation.RegisterAdminValidation),
  authController.registerAdmin
);

module.exports = router;
