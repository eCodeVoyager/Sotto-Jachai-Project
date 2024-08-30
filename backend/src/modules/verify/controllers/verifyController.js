const httpStatus = require("http-status");
const ApiResponse = require("../../../utils/apiResponse");
const verifyService = require("../services/verifyService");

/**
 * Gets content by key.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @param {Function} next - The next middleware function.
 *
 * @returns {Promise<Object>} The promise object that represents the content.
 */
const getContentByKey = async (req, res, next) => {
  try {
    const content = await verifyService.getContentByKey(req.params.key);
    return res
      .status(httpStatus.OK)
      .json(
        new ApiResponse(
          httpStatus.OK,
          content,
          "Content retrieved successfully"
        )
      );
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getContentByKey,
};
