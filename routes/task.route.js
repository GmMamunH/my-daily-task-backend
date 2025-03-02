const express = require("express");
const router = express.Router();

const {
  createTask,
  getAllTask,
  getOneTask,
  updateTask,
  deleteTask,
} = require("../controllers/task.controller");

router.post("/", createTask);
router.get("/", getAllTask);
router.get("/:id", getOneTask);
router.patch("/:id", updateTask);
router.delete("/:id", deleteTask);


module.exports = router;
