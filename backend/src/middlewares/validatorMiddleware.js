//src/middleware/validatorMiddleware.js

const Joi = require("joi");
const { pick } = require("lodash");
const httpStatus = require("http-status");

const ApiError = require("../utils/apiError");

/**
 * Middleware to validate request data using Joi schema.
 *
 * @param {Object} schema - Joi validation schema with possible keys: `params`, `query`, `body`.
 * @returns {Function} - Middleware function to validate request data.
 */
const validate = (schema) => (req, _, next) => {
  const validSchema = pick(schema, ["params", "query", "body"]);
  const object = pick(req, Object.keys(validSchema));

  // Validate request data against schema
  const { value, error } = Joi.compile(validSchema)
    .prefs({ errors: { label: "key" }, abortEarly: false })
    .validate(object);

  if (error) {
    // Construct error message from validation details
    const errorMessage = error.details
      .map((details) => details.message)
      .join(", ");
    return next(new ApiError(httpStatus.BAD_REQUEST, errorMessage));
  }

  // Assign validated value to request object
  Object.assign(req, value);
  return next();
};

module.exports = validate;
