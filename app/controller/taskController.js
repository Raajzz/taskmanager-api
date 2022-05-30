const Task = require("../model/task");

const getAllTasks = async (req, res) => {
	try {
		const tasks = await Task.find({});
		res.status(200).json({
			success: true,
			tasks,
		});
	} catch (error) {
		res.status(404).send({
			success: false,
			message: error.message,
		});
	}
};

const getTask = (req, res) => {
	res.status(200).json({
		success: true,
		message: "getTask request successful",
	});
};

const postTask = async (req, res) => {
	try {
		const task = await Task.create(req.body);
		res.status(200).json({
			success: true,
			task,
		});
	} catch (error) {
		res.status(500).send({
			success: false,
			message: error.message,
		});
	}
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
