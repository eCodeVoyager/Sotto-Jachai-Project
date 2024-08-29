const keyModel = require("../models/verifyModel");
const contentService = require("../../content/services/contentService");
const ApiError = require("../../../utils/apiError");
const httpStatus = require("http-status");

/**
 * Gets content by key.
 * @param {String} key - The verification key.
 * @returns {Promise<Object>} The promise object that represents the content.
 */
const getContentByKey = async (key) => {
  try {
    const keyRecord = await keyModel.findOne({ key });
    if (!keyRecord) {
      throw new ApiError(httpStatus.NOT_FOUND, "Key not found");
    }
    const id = keyRecord.contentId;
    const content = await contentService.getContent(id);
    if (!content || content.length === 0) {
      throw new ApiError(httpStatus.NOT_FOUND, "Content not found");
    }

    return content;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getContentByKey,
};
