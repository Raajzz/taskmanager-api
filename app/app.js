const express = require("express");
const app = express();
const taskRouter = require("./routes/taskRoutes");

app.use(express.json());
app.use("/api/v1", taskRouter);

const PORT = 5000;

app.listen(PORT, () => {
	console.log(`Server listening on port ${PORT}`);
});
