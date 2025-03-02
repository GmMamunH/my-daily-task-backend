const mongoose = require("mongoose");

const taskSchema = mongoose.Schema({
  task: { typeof: "string", required: true },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Task", taskSchema);
