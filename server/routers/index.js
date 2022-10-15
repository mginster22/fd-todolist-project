const { Router } = require("express");
const router = Router();
const userRouter = require("./userRouter");
const taskRouter = require("./taskRouter");

router.use("/users", userRouter);
router.use("/users",taskRouter)
router.use("/tasks",taskRouter)
module.exports = router;
