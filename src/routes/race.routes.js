import { Router } from "express";
import { createRace, getRaces, getRaceById, updateRace, deleteRace } from "../controllers/race.controller.js";

const raceRouter = Router();

raceRouter.post("/races", createRace);
raceRouter.get("/races", getRaces);
raceRouter.get("/races/:id", getRaceById);
raceRouter.put("/races/:id", updateRace);
raceRouter.delete("/races/:id", deleteRace);

export default raceRouter;
