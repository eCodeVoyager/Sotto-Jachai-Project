const passport = require("passport");
const httpStatus = require("http-status");

const ApiError = require("../../../utils/apiError");
const ApiResponse = require("../../../utils/apiResponse");
const { generateAccessToken } = require("../../../utils/jwtToken");

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

module.exports = {
  googleAuth,
  googleAuthCallback,
};
