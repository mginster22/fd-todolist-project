const { Router } = require("express");
const taskRouter = Router();
const TaskControler = require("../controllers/taskController");

taskRouter.post("/:userId/tasks", TaskControler.createTask);
taskRouter.get("/:userId/task", TaskControler.getUserTask);
taskRouter.delete("/:userId/task/:taskId", TaskControler.deleteUserTaskId);
taskRouter.patch("/:userId/task/:taskId", TaskControler.updateTask);
taskRouter.get("/",TaskControler.getAllTasks)

module.exports = taskRouter;
