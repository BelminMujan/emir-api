const stage = require("../models/stage");

const getStages = async (req, res) => {
  let data = await stage.find({});
  res.send(data);
};
const getStage = async (req, res) => {
  let data = await stage.find({ _id: req.params.id });
  res.send(data);
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
  addStage,
  updateStage,
  deleteStage,
};
