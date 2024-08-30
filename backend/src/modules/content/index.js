// Initialize the content module
const contentModel = require("./models/contentModel");
const contentRoutes = require("./routes/contentRoutes");
const contentService = require("./services/contentService");
const contentController = require("./controllers/contentController");

module.exports = {
  contentController,
  contentRoutes,
  contentService,
  contentModel,
};
