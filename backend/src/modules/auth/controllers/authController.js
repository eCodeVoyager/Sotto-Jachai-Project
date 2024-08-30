const httpStatus = require("http-status");

const ApiError = require("../../../utils/apiError");
const ApiResponse = require("../../../utils/apiResponse");
const { generateAccessToken } = require("../../../utils/jwtToken");
const userService = require("../../users/services/userService");

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
    const user = await userService.getUnprotectedUser(req.body);
    if (!user) {
      throw new ApiError(httpStatus.UNAUTHORIZED, "User not registered");
    }
    if (user.role !== "user") {
      throw new ApiError(
        httpStatus.UNAUTHORIZED,
        "User not authorized to access this route"
      );
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
    if (req.body.adminSecret !== process.env.ADMIN_SECRET) {
      return res.json(
        new ApiResponse(
          httpStatus.UNAUTHORIZED,
          null,
          " Admin secret is incorrect"
        )
      );
    }
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
    const user = await userService.getUnprotectedUser(req.body);
    if (!user) {
      throw new ApiError(httpStatus.UNAUTHORIZED, "Admin not registered");
    }

    if (user.role !== "admin") {
      throw new ApiError(
        httpStatus.UNAUTHORIZED,
        "User not authorized to access this route"
      );
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
  registerUser,
  loginUser,
  registerAdmin,
  loginAdmin,
  loggedInUser,
};
