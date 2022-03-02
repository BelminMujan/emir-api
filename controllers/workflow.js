const stage = require("../models/stage");
const workflow = require("../models/workflow");

const getWorkflows = async (req, res) => {
  let data = await workflow.find({});
  res.send(data);
};
const getWorkflow = async (req, res) => {
  let data = await workflow.find({ _id: req.params.id });
  res.send(data);
};
const getWorkflowStages = async (req, res) => {
  try {
    const stages = await stage.find({ workflow: req.params.id });
    res.send(stages);
  } catch (e) {
    res.send(e);
  }
};

const addWorkflow = async (req, res) => {
  try {
    let temp = new workflow(req.body);

    let saved = await temp.save();
    res.send(saved);
  } catch (e) {
    console.log(e);
  }
};
const updateWorkflow = async (req, res) => {
  try {
    let id = req.params.id;
    const updated = await workflow.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.send(updated);
  } catch (e) {
    res.send("Error: ", e);
  }
};
const deleteWorkflow = async (req, res) => {
  try {
    let id = req.params.id;
    await workflow.findOneAndRemove({ _id: id });
    res.status(204).send("Post Deleted");
  } catch (e) {
    res.status(404);
    res.send("Error: ", e);
  }
};

module.exports = {
  getWorkflows,
  getWorkflow,
  getWorkflowStages,
  addWorkflow,
  updateWorkflow,
  deleteWorkflow,
};
