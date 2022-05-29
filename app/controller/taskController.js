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

const postTask = (req, res) => {
	res.status(200).json({
		success: true,
		message: "postTask request successful",
		data: req.body,
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
