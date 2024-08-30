//Indexed file for auth module

const authRoutes = require("./routes/authRoutes");
const authController = require("./controllers/authController");

module.exports = {
  authController,
  authRoutes,
};
