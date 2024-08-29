const mongoose = require("mongoose");

const contentSchema = new mongoose.Schema({
  title: String,
  text: String,
  image: [String],
  video: [String],
  status: {
    type: String,
    required: true,
    enum: ["pending", "approved", "rejected"],
  },
  submittedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

module.exports = mongoose.model("Content", contentSchema);
