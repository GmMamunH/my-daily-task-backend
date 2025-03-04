
const Tasks = require("../model/task.model");

// create new tasks
const createTask = async (req, res) => {
  console.log(req.body);
  
  try {
    const newTask = new Tasks({ title: req.body.title });
    
    await newTask.save();
    res.status(201).json(newTask);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getAllTask = async(req, res) => {
  try {
    const tasks = await Tasks.find();
    res.json(tasks);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}
const getOneTask = async(req, res) => {
  try {
    const task = await Tasks.findById(req.params.id);
    if (!task) return res.status(404).json({ message: "Task not found" });
    res.json(task);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

const updateTask = async(req, res) => {
  try {
    const task = await Tasks.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!task) return res.status(404).json({ message: "Task not found" });
    res.json(task);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

const deleteTask = async(req, res) => {
  try {
    const task = await Tasks.findByIdAndDelete(req.params.id);
    if (!task) return res.status(404).json({ message: "Task not found" });
    res.json({ message: "Task deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

module.exports = { createTask, getAllTask, getOneTask, updateTask, deleteTask };
