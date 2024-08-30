const contentService = require("../services/contentService");
const ApiResponse = require("../../../utils/apiResponse");
const httpStatus = require("http-status");
const {
  uploadFile,
  uploadMultipleFiles,
} = require("../../../utils/uploadUtils");

/**
 * Submits content, handling both single and multiple file uploads to Cloudinary.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @param {Function} next - The next middleware function.
 *
 * @returns {Promise<Object>} The promise object that represents the submitted content.
 */
const submitContent = async (req, res, next) => {
  try {
    let imageUrls = [];
    let videoUrls = [];

    // Process files if they exist
    if (req.files && req.files.length > 0) {
      // Filter and upload images
      const imageFiles = req.files.filter((file) =>
        file.mimetype.startsWith("image/")
      );
      if (imageFiles.length > 0) {
        const imageResults = await uploadMultipleFiles(imageFiles, {
          resource_type: "image",
        });
        imageUrls = imageResults.map((result) => result.secure_url);
      }

      // Filter and upload videos
      const videoFiles = req.files.filter((file) =>
        file.mimetype.startsWith("video/")
      );
      if (videoFiles.length > 0) {
        const videoResults = await uploadMultipleFiles(videoFiles, {
          resource_type: "video",
        });
        videoUrls = videoResults.map((result) => result.secure_url);
      }
    }

    // Add the media URLs to the content body if they exist
    const contentBody = {
      ...req.body,
      image: imageUrls,
      video: videoUrls,
      status: "pending", // Set default status to 'pending'
    };

    // Submit the content using the content service
    const content = await contentService.submitContent(
      contentBody,
      req.user.id
    );

    return res
      .status(httpStatus.CREATED)
      .json(
        new ApiResponse(
          httpStatus.CREATED,
          content,
          "Content submitted successfully"
        )
      );
  } catch (error) {
    next(error);
  }
};
/**
 * Verifies content.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @param {Function} next - The next middleware function.
 *
 * @returns {Promise<Object>} The promise object that represents the verification status.
 */
const verifyContent = async (req, res, next) => {
  try {
    const content = await contentService.verifyContent(
      req.params.id,
      req.query.status
    );
    return res
      .status(httpStatus.OK)
      .json(new ApiResponse(httpStatus.OK, content, "Content status updated"));
  } catch (error) {
    next(error);
  }
};

/**
 * Gets contents.
 * @param {Object} req - The request object.
 *
 * @param {Object} res - The response object.
 * @param {Function} next - The next middleware function.
 *
 * @returns {Promise<Object>} The promise object that represents the contents.
 */

const getContents = async (req, res, next) => {
  try {
    let filter = {};
    if (req.query.status) {
      filter.status = req.query.status;
    }
    const contents = await contentService.getContents(filter);
    if (!contents || contents.length === 0) {
      return res
        .status(httpStatus.NOT_FOUND)
        .json(
          new ApiResponse(
            httpStatus.NOT_FOUND,
            null,
            "No contents found for this query"
          )
        );
    }
    return res
      .status(httpStatus.OK)
      .json(
        new ApiResponse(
          httpStatus.OK,
          { contents },
          "Contents retrieved successfully"
        )
      );
  } catch (error) {
    next(error);
  }
};

const getContent = async (req, res, next) => {
  try {
    const content = await contentService.getContent(req.params.id);
    if (!content) {
      return res
        .status(httpStatus.NOT_FOUND)
        .json(
          new ApiResponse(httpStatus.NOT_FOUND, null, "Content not found ")
        );
    }
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

/**
 * Gets content by logged in user.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @param {Function} next - The next middleware function.
 *
 * @returns {Promise<Object>} The promise object that represents the contents.
 */

const getContentByLoggedInUser = async (req, res, next) => {
  try {
    const contents = await contentService.getContents({
      submittedBy: req.user.id,
    });

    if (!contents || contents.length === 0) {
      return res
        .status(httpStatus.NOT_FOUND)
        .json(
          new ApiResponse(
            httpStatus.NOT_FOUND,
            null,
            "No contents found for this user"
          )
        );
    }

    return res
      .status(httpStatus.OK)
      .json(
        new ApiResponse(
          httpStatus.OK,
          contents,
          "Contents retrieved successfully"
        )
      );
  } catch (error) {
    next(error);
  }
};
/**
 * Deletes content.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @param {Function} next - The next middleware function.
 *
 * @returns {Promise<Object>} The promise object that represents the deleted content.
 */

const deleteContent = async (req, res, next) => {
  try {
    const content = await contentService.getContent(req.params.id);
    if (
      req.user.role === "admin" ||
      content.submittedBy.toString() === req.user.id
    ) {
      await contentService.deleteContent(req.params.id);
      return res
        .status(httpStatus.OK)
        .json(
          new ApiResponse(httpStatus.OK, null, "Content deleted successfully")
        );
    } else {
      return res
        .status(httpStatus.FORBIDDEN)
        .json(
          new ApiResponse(
            httpStatus.FORBIDDEN,
            null,
            "Unauthorized to delete content"
          )
        );
    }
  } catch (error) {
    next(error);
  }
};

module.exports = {
  submitContent,
  verifyContent,
  getContents,
  getContent,
  deleteContent,
  getContentByLoggedInUser,
};
