const express = require("express");
require("dotenv").config();
const app = express();
const taskRouter = require("./routes/taskRoutes");
const mongooseConnect = require("../db/connect");
const notFound = require("./middleware/notFound");
const errorHandlerMiddleware = require("./middleware/errorHandler");

app.use(express.json());
app.use("/api/v1", taskRouter);
app.use(notFound);
app.use(errorHandlerMiddleware);

const PORT = process.env.PORT || 5000;

const start = async () => {
	try {
		// Here we do the following this way because we first try to connect
		// with the cloud database and only if the cloud works fine then
		// we'll connect with the server. This is better as it will allow
		// us to save resources if our database connection gets messed up.
		// a server with a database doesn't work isn't really a great thing
		// eh.
		await mongooseConnect(process.env.MONGO_URI);
		app.listen(PORT, () => {
			console.log(`Server listening on port ${PORT}`);
		});
	} catch (err) {
		console.log(err);
	}
};

start();
