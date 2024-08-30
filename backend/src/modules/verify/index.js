// Index file for verify module
const verifyModel = require("./models/verifyModel");
const verifyRoutes = require("./routes/verifyRoutes");
const verifyService = require("./services/verifyService");
const verifyController = require("./controllers/verifyController");

module.exports = {
  verifyController,
  verifyRoutes,
  verifyService,
  verifyModel,
};
