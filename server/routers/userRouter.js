const { Router } = require("express");
const userRouter = Router();
const UserController = require("../controllers/userController");
const { upload } = require("../middlewares/upload.mw");
const { paginate } = require("../middlewares/paginate");

userRouter.post("/", upload, UserController.createUser);

userRouter.get("/", paginate, UserController.getAllUsers);
userRouter.get("/:userId", UserController.getUserById);

userRouter.patch("/:userId", upload, UserController.updateUser);

userRouter.delete("/:id", UserController.deleteUser);

module.exports = userRouter;
