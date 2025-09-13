import { Router } from "express";
import { createWeapon, getWeapons, getWeaponById, updateWeapon, deleteWeapon } from "../controllers/weapon.controller.js";

const weaponRouter = Router();

weaponRouter.post("/weapons", createWeapon);
weaponRouter.get("/weapons", getWeapons);
weaponRouter.get("/weapons/:id", getWeaponById);
weaponRouter.put("/weapons/:id", updateWeapon);
weaponRouter.delete("/weapons/:id", deleteWeapon);

export default weaponRouter;
