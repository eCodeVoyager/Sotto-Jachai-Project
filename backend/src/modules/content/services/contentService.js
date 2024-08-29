const Content = require("../models/contentModel");
const { generateKey } = require("../../../utils/hashUtils");
const ApiError = require("../../../utils/apiError");
const httpStatus = require("http-status");
const Key = require("../../verify/models/verifyModel");

/**
 * Submits content.
 * @param {Object} contentBody - The content object.
 * @param {String} userId - The ID of the user submitting the content.
 * @returns {Promise<Object>} The promise object that represents the submitted content.
 */
const submitContent = async (contentBody, userId) => {
  try {
    const key = generateKey();

    const content = new Content({
      ...contentBody,
      status: "pending",
      submittedBy: userId,
    });
    await content.save();

    const keyRecord = new Key({ key, contentId: content._id });
    await keyRecord.save();

    return { content, key };
  } catch (error) {
    throw new ApiError(httpStatus.BAD_REQUEST, error.message);
  }
};

/**
 * Verifies content.
 * @param {String} contentId - The ID of the content to verify.
 * @param {String} status - The new status of the content.
 * @returns {Promise<Object>} The promise object that represents the updated content.
 */
const verifyContent = async (contentId, status) => {
  try {
    const content = await Content.findById(contentId);
    if (!content) {
      throw new ApiError(httpStatus.NOT_FOUND, "Content not found");
    }

    content.status = status;
    await content.save();

    return content;
  } catch (error) {
    throw new ApiError(httpStatus.BAD_REQUEST, error.message);
  }
};

const getContents = async (filter) => {
  try {
    const contents = await Content.find(filter);
    return contents;
  } catch (error) {
    throw new ApiError(httpStatus.BAD_REQUEST, error.message);
  }
};

const deleteContent = async (contentId) => {
  try {
    const content = await Content.findById(contentId);
    if (!content) {
      throw new ApiError(httpStatus.NOT_FOUND, "Content not found");
    }

    await content.remove();
  } catch (error) {
    throw new ApiError(httpStatus.BAD_REQUEST, error.message);
  }
};

module.exports = {
  submitContent,
  verifyContent,
  getContents,
  deleteContent,
};
