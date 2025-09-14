import { Router } from "express";
import { createWeapon, getWeapons, getWeaponById, updateWeapon, deleteWeapon } from "../controllers/weapon.controller.js";
import { applyValidations } from "../middlewares/catchvalidation.js";
import { weaponIdValidation, createWeaponValidation } from "../middlewares/validations/weapon.validator.js";

const weaponRouter = Router();

weaponRouter.post("/weapons", createWeaponValidation, applyValidations, createWeapon);
weaponRouter.get("/weapons", getWeapons);
weaponRouter.get("/weapons/:id", weaponIdValidation, applyValidations, getWeaponById);
weaponRouter.put("/weapons/:id", weaponIdValidation, applyValidations, updateWeapon);
weaponRouter.delete("/weapons/:id", weaponIdValidation, applyValidations, deleteWeapon);

export default weaponRouter;