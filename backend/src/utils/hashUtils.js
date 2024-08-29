const crypto = require("crypto");

/**
 * Generates a 128-bit key.
 * @returns {String} The generated key.
 */
const generateKey = () => {
  return crypto.randomBytes(16).toString("hex");
};

module.exports = {
  generateKey,
};
