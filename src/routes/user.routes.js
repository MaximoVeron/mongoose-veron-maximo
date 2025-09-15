import { Router } from "express";
import {
  createUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
} from "../controllers/user.controller.js";
import { applyValidations } from "../middlewares/catchvalidation.js";
import {
  userCreationValidation,
  userIdValidation,
} from "../middlewares/validations/user.validator.js";

const userRouter = Router();

userRouter.post("/users", userCreationValidation, applyValidations, createUser);
userRouter.get("/users", getUsers);
userRouter.get("/users/:id", userIdValidation, applyValidations, getUserById);
userRouter.put("/users/:id", userIdValidation, applyValidations, updateUser);
userRouter.delete("/users/:id", userIdValidation, applyValidations, deleteUser);

export default userRouter;
