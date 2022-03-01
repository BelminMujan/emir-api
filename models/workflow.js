const mongoose = require("mongoose");

const workflowSchema = mongoose.Schema({
  title: { type: String },
  description: { type: String },
  smallText: { type: String },
  type: { type: String },
});

module.exports = mongoose.model("Workflow", workflowSchema);
