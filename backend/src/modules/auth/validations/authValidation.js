const joi = require("joi");

const RegisterUserValidation = {
  body: joi.object().keys({
    email: joi.string().email().required(),
    password: joi.string().required().min(6),
    name: joi.string().required(),
  }),
};
const RegisterAdminValidation = {
  body: joi.object().keys({
    email: joi.string().email().required(),
    password: joi.string().required().min(6),
    name: joi.string().required(),
    adminSecret: joi.string().required(),
  }),
};
const LoginValidation = {
  body: joi.object().keys({
    email: joi.string().email().required(),
    password: joi.string().required().min(6),
  }),
};

module.exports = {
  RegisterUserValidation,
  RegisterAdminValidation,
  LoginValidation,
};
