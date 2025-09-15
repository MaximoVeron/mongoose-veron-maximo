import { body, param } from "express-validator";
import {
  weaponExists,
  weaponIdExists,
  updateWeaponNameUnique,
} from "../custom/weapon.custom.js";

export const createWeaponValidation = [
  body("name")
    .notEmpty()
    .withMessage("El nombre es obligatorio")
    .isLength({ min: 3, max: 30 })
    .withMessage("El nombre debe tener entre 3 y 30 caracteres")
    .isAlpha()
    .withMessage("El nombre solo puede contener letras")
    .custom(weaponExists)
    .trim()
    .escape(),
  body("power")
    .notEmpty()
    .withMessage("El poder es obligatorio")
    .isNumeric()
    .withMessage("El poder debe ser un número")
    .trim(),
];

export const weaponIdValidation = [
  param("id")
    .notEmpty()
    .withMessage("El ID es obligatorio")
    .isMongoId()
    .withMessage("El ID debe ser un ID de Mongo válido")
    .custom(weaponIdExists),
];

export const updateWeaponValidation = [
  body("name")
    .optional()
    .isLength({ min: 3, max: 30 })
    .withMessage("El nombre debe tener entre 3 y 30 caracteres")
    .isAlpha()
    .withMessage("El nombre solo puede contener letras")
    .custom((value, { req }) => updateWeaponNameUnique(value, req.params.id))
    .trim()
    .escape(),
  body("power")
    .optional()
    .isNumeric()
    .withMessage("El poder debe ser un número")
    .trim(),
];
