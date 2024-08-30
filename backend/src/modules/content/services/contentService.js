const httpStatus = require("http-status");
const ApiError = require("../../../utils/apiError");
const contentModel = require("../models/contentModel");
const { generateKey } = require("../../../utils/hashUtils");
const verifyModel = require("../../verify/models/verifyModel");

/**
 * Submits content.
 * @param {Object} contentBody - The content object.
 * @param {String} userId - The ID of the user submitting the content.
 * @returns {Promise<Object>} The promise object that represents the submitted content.
 */
const submitContent = async (contentBody, userId) => {
  try {
    const contentMain = new contentModel({
      ...contentBody,
      status: "pending",
      submittedBy: userId,
    });
    await contentMain.save();
    const content = await contentModel
      .findById(contentMain._id)
      .populate("submittedBy", "role email _id");
    return { content };
  } catch (error) {
    throw error;
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
    const content = await contentModel.findById(contentId);
    if (!content) {
      throw error;
    }

    content.status = status;

    if (status === "verified") {
      const key = generateKey();
      const keyRecord = new verifyModel({
        key,
        contentId,
      });
      await keyRecord.save();

      content.keyId = keyRecord._id;
    }

    await content.save();

    return content;
  } catch (error) {
    throw error;
  }
};

/**
 * Gets contents.
 * @param {Object} filter - The filter object.
 * @returns {Promise<Object>} The promise object that represents the contents.
 */

const getContents = async (filter) => {
  try {
    return await contentModel.find(filter).populate([
      {
        path: "submittedBy",
        select: "role email _id",
      },
      {
        path: "keyId",
        select: "key",
      },
    ]);
  } catch (error) {
    throw error;
  }
};

/**
 * Gets content.
 * @param {String} contentId - The ID of the content to get.
 * @returns {Promise<Object>} The promise object that represents the content.
 */

const getContent = async (contentId) => {
  try {
    return await contentModel.findById(contentId).populate([
      {
        path: "submittedBy",
        select: "role email _id",
      },
      {
        path: "keyId",
        select: "key",
      },
    ]);
  } catch (error) {
    throw error;
  }
};

/**
 * Deletes content.
 * @param {String} contentId - The ID of the content to delete.
 * @returns {Promise<Object>} The promise object that represents the deleted content.
 */

const deleteContent = async (contentId) => {
  try {
    const content = await contentModel.findByIdAndDelete(contentId);
    await verifyModel.findOneAndDelete({ contentId });
    if (!content) {
      throw new ApiError(httpStatus.NOT_FOUND, "Content not found");
    }
  } catch (error) {
    throw error;
  }
};
/**
 * Gets key by content ID.
 * @param {String} contentId - The ID of the content to get the key for.
 * @returns {Promise<Object>} The promise object that represents the key.
 */
const getKeybyContentId = async (contentId) => {
  try {
    return await verifyModel.findOne({ content: contentId });
  } catch (error) {
    throw error;
  }
};

module.exports = {
  submitContent,
  verifyContent,
  getContents,
  getContent,
  deleteContent,
  getKeybyContentId,
};
