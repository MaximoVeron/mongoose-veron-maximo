import { body, param } from "express-validator";
import { raceExists, raceIdExists } from "../../helpers/custom/race.custom.js";

export const createRaceValidation = [
    body("name")
        .notEmpty().withMessage("El nombre es obligatorio")
        .isLength({ min: 3, max: 30 }).withMessage("El nombre debe tener entre 3 y 30 caracteres")
        .isAlpha().withMessage("El nombre solo puede contener letras")
        .trim().escape()
        .custom(raceExists),
    body("description")
        .optional()
        .isLength({ max: 200 }).withMessage("La descripción no puede exceder los 200 caracteres")
        .trim().escape()
];

export const raceIdValidation = [
    param("id")
        .isMongoId().withMessage("El id no es válido")
        .custom(raceIdExists)
];