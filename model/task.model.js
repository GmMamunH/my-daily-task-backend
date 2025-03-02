const mongoose = require("mongoose");

const tasksSchema = mongoose.Schema({
  task: { type: "string", required: true },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Tasks", tasksSchema);
