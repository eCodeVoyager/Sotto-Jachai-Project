// src/config/db.js

/**
 * Database connection file.
 *
 * @requires mongoose
 * @description This file connects to the MongoDB database.
 * @exports {Function} ConnectDB - The function to connect to the database.
 *
 */

const mongoose = require("mongoose");

const ConnectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);

    console.log(`🎯 MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

module.exports = ConnectDB;
