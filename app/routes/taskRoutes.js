const express = require("express");
const router = express.Router();
const {
	getAllTasks,
	getTask,
	postTask,
	updateTask,
	updateTaskCheck,
	deleteTask,
} = require("../controller/taskController");

router.route("/").get(getAllTasks).post(postTask);
router.route("/:id").get(getTask).patch(updateTask).delete(deleteTask);
router.route("/:id/check").patch(updateTaskCheck);

module.exports = router;
