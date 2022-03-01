const mongoose = require("mongoose");

const stageSchema = mongoose.Schema({
  workflow: { type: mongoose.Schema.Types.ObjectId, ref: "Workflow" },
  image: { type: String },
  type: { type: String },
  status: { type: String },
});

module.exports = mongoose.model("Stage", stageSchema);
