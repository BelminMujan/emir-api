const bodyParser = require("body-parser");
const express = require("express");
require("dotenv").config();
const Workflow = require("./models/workflow");
const db = require("./mongodb");
const workflowRouter = require("./routes/workflow");
const stageRouter = require("./routes/stage");
const app = express();
app.use(bodyParser.json());

app.use("/api/workflow", workflowRouter);
app.use("/api/stage", stageRouter);

app.listen(5000, () => {
  console.log("Server has started!");
});
