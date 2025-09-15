import { Router } from "express";
import userRouter from "./user.routes.js";
import raceRouter from "./race.routes.js";
import weaponRouter from "./weapon.routes.js";

export const indexRouter = Router();

indexRouter.use(userRouter);
indexRouter.use(raceRouter);
indexRouter.use(weaponRouter);
