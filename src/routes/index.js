import { Router } from "express";
import { userRouter } from "./user.routes.js";

export const indexRouter = Router();

indexRouter.use(userRouter);