import { Router } from "express";
import {
  createRace,
  getRaces,
  getRaceById,
  updateRace,
  deleteRace,
} from "../controllers/race.controller.js";
import { applyValidations } from "../middlewares/catchvalidation.js";
import {
  raceIdValidation,
  createRaceValidation,
  updateRaceValidation,
} from "../middlewares/validations/race.validator.js";

const raceRouter = Router();

raceRouter.post("/races", createRaceValidation, applyValidations, createRace);
raceRouter.get("/races", getRaces);
raceRouter.get("/races/:id", raceIdValidation, applyValidations, getRaceById);
raceRouter.put(
  "/races/:id",
  raceIdValidation,
  updateRaceValidation,
  applyValidations,
  updateRace
);
raceRouter.delete("/races/:id", raceIdValidation, applyValidations, deleteRace);

export default raceRouter;
