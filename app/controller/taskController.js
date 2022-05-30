const Task = require("../model/task");

const getAllTasks = (req, res) => {
	res.status(200).json({
		success: true,
		message: "getAllTasks request successful",
	});
};

const getTask = (req, res) => {
	res.status(200).json({
		success: true,
		message: "getTask request successful",
	});
};

const postTask = async (req, res) => {
	const task = await Task.create(req.body);
	res.status(200).json({
		success: true,
		task,
	});
};

const updateTask = (req, res) => {
	res.status(200).json({
		success: true,
		message: "updateTask request successful",
	});
};

const updateTaskCheck = (req, res) => {
	res.status(200).json({
		success: true,
		message: "updateTaskCheck request successful",
	});
};

const deleteTask = (req, res) => {
	console.log(req.params.id);
	res.status(200).json({
		success: true,
		message: "deleteTask request successful",
	});
};

module.exports = {
	getAllTasks,
	getTask,
	postTask,
	updateTask,
	updateTaskCheck,
	deleteTask,
};
