// Load environment variables
require("dotenv").config();

// - npm packages
const hpp = require("hpp");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const express = require("express");
const bodyParser = require("body-parser");
const rateLimit = require("express-rate-limit");
const mongoSanitize = require("express-mongo-sanitize");

// - custom error handling and routes
const { verify, auth, content } = require("./index");
const { errorHandler, notFoundHandler } = require("./utils/errorHandler");

const app = express();

//Middlewares
const allMiddlewares = [
  morgan(process.env.LOGGER_LEVEL === "development" ? "dev" : "combined"),
  helmet(),
  rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 20000,
  }),
  mongoSanitize(),
  hpp(),
  bodyParser.json(),
  cors(),
];

// Use middlewares
app.use(allMiddlewares);

//base route
app.get("/", (_, res) => {
  res.json({
    message: "Welcome to the Sotto-Jachai API😀",
    status: "Success✅",
    server_status: "Working🆙",
    server_time: `${new Date().toLocaleString()}⌛`,
  });
});
// Use routes
app.use("/api/v1/auth", auth.authRoutes);
app.use("/api/v1/verify", verify.verifyRoutes);
app.use("/api/v1/content", content.contentRoutes);

// Error handling middleware
app.use(notFoundHandler);
app.use(errorHandler);

module.exports = app;
