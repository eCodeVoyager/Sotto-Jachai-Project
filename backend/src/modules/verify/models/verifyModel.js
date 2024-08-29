const mongoose = require("mongoose");

const verifySchema = new mongoose.Schema({
  contentId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Content",
  },
  key: {
    type: String,
    required: true,
    unique: true,
  },
});

module.exports = mongoose.model("Verify", verifySchema);
