const httpStatus = require("http-status");
const userModel = require("../models/userModel");
const ApiError = require("../../../utils/apiError");

/**
 * Creates a new user.
 *
 * @param {Object} userBody - The user data.
 * @param {string} userBody.email - The user's email.
 * @param {string} userBody.phone - The user's phone number.
 * @returns {Promise<Object>} A promise that resolves to the newly created user.
 * @throws {ApiError} If the email or phone is already taken.
 */
const createUser = async (userBody) => {
  try {
    const existingUser = await userModel.findOne({ email: userBody.email });

    if (existingUser) {
      throw new ApiError(httpStatus.BAD_REQUEST, "Email already taken");
    }

    return await userModel.create(userBody);
  } catch (error) {
    throw error;
  }
};

/**
 * Gets all users.
 *
 * @returns {Promise<Object[]>} A promise that resolves to an array of users.
 */
const getAllUsers = async () => {
  try {
    return await userModel.find().select("-password -__v");
  } catch (error) {
    throw error;
  }
};

/**
 * Retrieves a user based on various criteria.
 *
 * @param {Object} body - The search criteria.
 * @param {string} [body.id] - The user's id.
 * @param {string} [body.email] - The user's email.
 * @param {string} [body.phone] - The user's phone number.
 * @param {string} [body.googleId] - The user's Google ID.
 * @returns {Promise<Object>} A promise that resolves to the user if found.
 */
const getUnprotectedUser = async (body) => {
  try {
    const { id, email, phone, googleId } = body;
    const query = {};
    if (id) query._id = id;
    if (email) query.email = email;
    if (phone) query.phone = phone;
    if (googleId) query.googleId = googleId;

    return await userModel.findOne(query);
  } catch (error) {
    throw error;
  }
};

/**
 * Retrieves a user by their ID.
 *
 * @param {string} id - The ID of the user.
 * @returns {Promise<Object>} A promise that resolves to the user if found.
 */
const getUserById = async (id) => {
  try {
    return await userModel.findById(id).select("-password -__v");
  } catch (error) {
    throw error;
  }
};

/**
 * Retrieves a user by their email.
 *
 * @param {string} email - The email of the user.
 * @returns {Promise<Object>} A promise that resolves to the user if found.
 */
const getUserByEmail = async (email) => {
  try {
    return await userModel.findOne({ email }).select("-password -__v");
  } catch (error) {
    throw error;
  }
};

/**
 * Updates a user by their ID.
 *
 * @param {string} userId - The ID of the user.
 * @param {Object} updateBody - The data to update.
 * @returns {Promise<Object>} A promise that resolves to the updated user.
 */
const updateUserById = async (userId, updateBody) => {
  try {
    return await userModel.findByIdAndUpdate(userId, updateBody, { new: true });
  } catch (error) {
    throw error;
  }
};

/**
 * Deletes a user by their ID.
 *
 * @param {string} userId - The ID of the user.
 * @returns {Promise<Object>} A promise that resolves to the deleted user.
 */
const deleteUserById = async (userId) => {
  try {
    return await userModel.findByIdAndDelete(userId);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getAllUsers,
  getUnprotectedUser,
  getUserById,
  getUserByEmail,
  createUser,
  updateUserById,
  deleteUserById,
};
