const { model } = require("mongoose");
const Tasks = require("../model/task.model");

// create new tasks
const createTask = async(require,res)=>{
   
    try {
        const newTask = new Tasks({task: require.body.task});
        await newTask.save();
        res.status(201).json(newTask);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

model.exports = { createTask };