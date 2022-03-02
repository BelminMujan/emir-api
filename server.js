const bodyParser = require("body-parser");
const express = require("express");
const cors = require("cors");

require("dotenv").config();
const db = require("./mongodb");
const workflowRouter = require("./routes/workflow");
const stageRouter = require("./routes/stage");
const actionRouter = require("./routes/action");
const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use("/api/workflow", workflowRouter);
app.use("/api/stage", stageRouter);
app.use("/api/action", actionRouter);

app.listen(process.env.PORT, () => {
  console.log("Server has started!");
});
