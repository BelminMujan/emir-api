const mongoose = require("mongoose");

const actionSchema = mongoose.Schema({
  stage: { type: mongoose.Schema.Types.ObjectId, ref: "stage" },
  title: { type: String },
});

module.exports = mongoose.model("Action", actionSchema);
