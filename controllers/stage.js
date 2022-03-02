const action = require("../models/action");
const stage = require("../models/stage");

//get all stages of one workflow
const getStages = async (req, res) => {
  console.log(req.params);
  let data = await stage.find({});
  res.send(data);
};
const getStage = async (req, res) => {
  let data = await stage.find({ _id: req.params.id });
  res.send(data);
};
const getStageActions = async (req, res) => {
  try {
    let actions = await action.find({ stage: req.params.id });
    res.send(actions);
  } catch (e) {
    res.send(e);
  }
};

const addStage = async (req, res) => {
  try {
    let temp = new stage(req.body);
    let saved = await temp.save();
    res.send(saved);
  } catch (e) {
    console.log(e);
  }
};
const updateStage = async (req, res) => {
  try {
    let id = req.params.id;
    const updated = await stage.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.send(updated);
  } catch (e) {
    res.send("Error: ", e);
  }
};
const deleteStage = async (req, res) => {
  try {
    let id = req.params.id;
    await stage.findOneAndRemove({ _id: id });
    res.status(204).send("Post Deleted");
  } catch (e) {
    res.status(404);
    res.send("Error: ", e);
  }
};

module.exports = {
  getStages,
  getStage,
  getStageActions,
  addStage,
  updateStage,
  deleteStage,
};
