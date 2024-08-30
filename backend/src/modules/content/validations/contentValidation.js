const joi = require("joi");

const CreateContent = {
  body: joi.object().keys({
    title: joi.string().required().min(3),
    text: joi.string(),
  }),
};

const verifyContent = {
  params: joi.object().keys({
    id: joi.string().required(),
  }),
  query: joi
    .object()
    .keys({
      status: joi.string().required().valid("verified", "rejected"),
    })
    .required(),
};

module.exports = {
  CreateContent,
  verifyContent,
};
