const http = require("http");
const app = require("./app");
const connectDB = require("./config/db");
const checkEnvVariables = require("./utils/envChecker");

// Connect to the database and check environment variables
connectDB();
checkEnvVariables();

// Start the server
const PORT = process.env.PORT || 3000;
http.createServer(app).listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
