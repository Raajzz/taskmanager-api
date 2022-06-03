const { findOneAndUpdate } = require("../model/task");
const Task = require("../model/task");
const asyncWrapper = require("../middleware/asyncWrapper");
const { createCustomError } = require("../errors/customError");

const getAllTasks = asyncWrapper(async (req, res) => {
	const tasks = await Task.find({});
	res.status(200).json({
		success: true,
		tasks,
	});
});

// findOne method
const getTask = asyncWrapper(async (req, res, next) => {
	const { id: taskId } = req.params;
	const task = await Task.findOne({
		_id: taskId,
	});
	if (!task) {
		return next(createCustomError("Task does not exist", 404));
	}
	res.status(200).json({
		success: true,
		task,
	});
});

const postTask = asyncWrapper(async (req, res) => {
	const task = await Task.create(req.body);
	res.status(200).json({
		success: true,
		task,
	});
});

// only the passed key-value pairs will be updated
// for PUT include overwrite: true as one fo the options, which'll remove whatever that is not passed thereby sticking with the meaning of the request

const updateTask = asyncWrapper(async (req, res, next) => {
	const { id: taskId } = req.params;
	const task = await Task.findOneAndUpdate({ _id: taskId }, req.body, {
		new: true,
		runValidators: true,
	});

	if (!task) {
		return next(createCustomError("Task does not exist", 404));
	}
	res.status(200).json({
		success: true,
		id: taskId,
		task,
	});
});

// We can also use findOneAndDelete, which'll delete one task
// and it'll return that particular task. But I presume it
// is not needed

const deleteTask = asyncWrapper(async (req, res, next) => {
	const { id: taskId } = req.params;
	const task = await Task.deleteOne({
		_id: taskId,
	});
	if (task.deletedCount === 0) {
		return next(createCustomError("No tasks were deleted", 404));
	}
	res.status(200).send({
		success: true,
		message: "Task deleted successfully",
	});
});

module.exports = {
	getAllTasks,
	getTask,
	postTask,
	updateTask,
	deleteTask,
};

// findById method => preferred if you're trying to access something by id
// const getTask = async (req, res) => {
// 	const { id } = req.params;
// try {
// 	const task = await Task.findById(id);
// 	if (!task) {
// 		return res.status(404).json({
// 			success: false,
// 			message: "Task doesn't exist",
// 		});
// 	}
// 	res.status(200).json({
// 		success: true,
// 		task,
// 	});
// } catch (error) {
// 	res.status(500).json({
// 		success: false,
// 		message: error.message,
// 	});
// }
// };

// not producing the required result

// const updateTask = async (req, res) => {
// 	try {
// 		const { id: taskId } = req.params;
// 		const updateObject = req.body;
// 		const res = await Task.updateOne(
// 			{
// 				_id: taskId,
// 			},
// 			updateObject
// 		);
// 		const resObject = {};
// 		if (res.upsertedCount == 0) {
// 			resObject["success"] = false;
// 			resObject["message"] = "No task were edited";
// 		} else {
// 			resObject["success"] = true;
// 			resObject["message"] = "Task were edited";
// 		}
// 		const getResTask = await Task.findById(id);
// 		resObject["task"] = getResTask;
// 		return res.status(200).json(resObject);
// 	} catch (error) {
// 		res.status(500).json({
// 			success: false,
// 			message: error.message,
// 		});
// 	}
// };
