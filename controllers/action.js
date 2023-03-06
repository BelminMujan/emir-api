const action = require("../models/action");

//get all stages of one workflow
const getActions = async (req, res) => {
  console.log(req.params);
  console.log('testing vscode live');
  let data = await action.find({});
  res.send(data);
};
const getAction = async (req, res) => {
  let data = await action.find({ _id: req.params.id });
  res.send(data);
};

const addAction = async (req, res) => {
  try {
    let temp = new action(req.body);
    let saved = await temp.save();
    res.send(saved);
  } catch (e) {
    console.log(e);
  }
};
const updateAction = async (req, res) => {
  try {
    let id = req.params.id;
    const updated = await action.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.send(updated);
  } catch (e) {
    res.send("Error: ", e);
  }
};
const deleteAction = async (req, res) => {
  try {
    let id = req.params.id;
    await action.findOneAndRemove({ _id: id });
    res.status(204).send("Post Deleted");
  } catch (e) {
    res.status(404);
    res.send("Error: ", e);
  }
};

module.exports = {
  getActions,
  getAction,
  addAction,
  updateAction,
  deleteAction,
};
