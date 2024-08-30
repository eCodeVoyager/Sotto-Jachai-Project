const passport = require("passport");
const httpStatus = require("http-status");

const ApiError = require("../../../utils/apiError");
const ApiResponse = require("../../../utils/apiResponse");
const { generateAccessToken } = require("../../../utils/jwtToken");
const userService = require("../../users/services/userService");

/**
 * Initiates Google OAuth 2.0 authentication.
 *
 * @returns {Object} - The response object containing the authentication process.
 */
const googleAuth = passport.authenticate("google", {
  scope: ["profile", "email"],
});

/**
 * Callback for handling Google OAuth 2.0 authentication response.
 *
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @param {Function} next - The callback function.
 * @returns {Object} - The response object containing the JWT token or an error message.
 */
const googleAuthCallback = (req, res, next) => {
  passport.authenticate("google", { session: false }, (err, user) => {
    if (err || !user) {
      return res.json(
        new ApiResponse(
          httpStatus.UNAUTHORIZED,
          null,
          "Unauthorized! Please login/register"
        )
      );
    }
    const token = generateAccessToken(user, { role: "user" });
    return res.json(
      new ApiResponse(httpStatus.OK, { token }, "Login/Register successful")
    );
  })(req, res, next);
};

const registerUser = async (req, res, next) => {
  try {
    const user = await userService.createUser(req.body);
    const token = generateAccessToken(user, { role: "user" });
    return res.json(
      new ApiResponse(
        httpStatus.CREATED,
        { token },
        "User registered successfully"
      )
    );
  } catch (error) {
    return next(error);
  }
};

const loginUser = async (req, res, next) => {
  try {
    const user = await userService.getUserByEmail(req.body.email);
    if (!user) {
      throw new ApiError(httpStatus.UNAUTHORIZED, "User not registered");
    }
    const isMatch = await user.comparePassword(req.body.password);
    if (!isMatch) {
      throw new ApiError(
        httpStatus.UNAUTHORIZED,
        "Incorrect email or password"
      );
    }
    const token = generateAccessToken(user, { role: user.role });
    return res.json(
      new ApiResponse(httpStatus.OK, { token }, "Login successful")
    );
  } catch (error) {
    return next(error);
  }
};

const registerAdmin = async (req, res, next) => {
  try {
    req.body.role = "admin";
    const user = await userService.createUser(req.body);
    const token = generateAccessToken(user, { role: "admin" });
    return res.json(
      new ApiResponse(
        httpStatus.CREATED,
        { token },
        "Admin registered successfully"
      )
    );
  } catch (error) {
    return next(error);
  }
};

const loginAdmin = async (req, res, next) => {
  try {
    const user = await userService.getUserByEmail(req.body.email);
    if (!user) {
      throw new ApiError(httpStatus.UNAUTHORIZED, "Admin not registered");
    }
    const isMatch = await user.comparePassword(req.body.password);
    if (!isMatch) {
      throw new ApiError(
        httpStatus.UNAUTHORIZED,
        "Incorrect email or password"
      );
    }
    const token = generateAccessToken(user, { role: user.role });
    return res.json(
      new ApiResponse(httpStatus.OK, { token }, "Admin login successful")
    );
  } catch (error) {
    return next(error);
  }
};

const loggedInUser = async (req, res, next) => {
  try {
    const user = await userService.getUserById(req.user.id);
    return res.json(
      new ApiResponse(httpStatus.OK, user, "Logged in user details retrieved")
    );
  } catch (error) {
    return next(error);
  }
};
module.exports = {
  googleAuth,
  googleAuthCallback,
  registerUser,
  loginUser,
  registerAdmin,
  loginAdmin,
  loggedInUser,
};
