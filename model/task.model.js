const mongoose = require("mongoose");

const tasksSchema = mongoose.Schema({
  task: { type: "string", required: true },
  completed: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Tasks", tasksSchema);
