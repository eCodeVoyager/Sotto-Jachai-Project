require("dotenv").config();
// src/app.js

const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");
const mongoSanitize = require("express-mongo-sanitize");
const hpp = require("hpp");
const bodyParser = require("body-parser");

// Import routes
const { auth, verify, content } = require("./index");

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
    server_time: new Date().toLocaleString() + "⌛",
  });
});
// Use routes
app.use("/api/v1/auth", auth.authRoutes);
app.use("/api/v1/verify", verify.verifyRoutes);
app.use("/api/v1/content", content.contentRoutes);

// Error handling middleware
const { errorHandler, notFoundHandler } = require("./utils/errorHandler");

app.use(notFoundHandler);
app.use(errorHandler);

module.exports = app;
