import { body, param } from "express-validator";
import {
  usernameExists,
  emailExists,
  userExists,
  raceExist,
  weaponsExist,
  updateUniqueUsername,
  updateUniqueEmail,
} from "../custom/user.custom.js";

export const userCreationValidation = [
  body("username")
    .notEmpty()
    .withMessage("El nombre de usuario es obligatorio")
    .isLength({ min: 3, max: 30 })
    .withMessage("El nombre de usuario debe tener entre 3 y 30 caracteres")
    .isAlphanumeric()
    .withMessage("El nombre de usuario solo puede contener letras y números")
    .custom(usernameExists)
    .escape(),
  body("email")
    .notEmpty()
    .withMessage("El email es obligatorio")
    .isEmail()
    .withMessage("El email no es válido")
    .normalizeEmail()
    .trim()
    .escape()
    .custom(emailExists),
  body("password")
    .notEmpty()
    .withMessage("La contraseña es obligatoria")
    .isLength({ min: 6 })
    .withMessage("La contraseña debe tener al menos 6 caracteres")
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])/)
    .withMessage(
      "La contraseña debe contener al menos una letra minúscula, una letra mayúscula y un carácter especial"
    )
    .escape(),
  body("race")
    .notEmpty()
    .withMessage("La raza es obligatoria")
    .isMongoId()
    .withMessage("La raza debe ser un ID válido")
    .custom(raceExist),
  body("weapons")
    .isArray()
    .withMessage("Las armas deben ser un array")
    .custom(weaponsExist)
    .optional(),
];

export const userUpdateValidation = [
  body("username")
    .optional()
    .isLength({ min: 3, max: 30 })
    .withMessage("El nombre de usuario debe tener entre 3 y 30 caracteres")
    .isAlphanumeric()
    .withMessage("El nombre de usuario solo puede contener letras y números")
    .custom((value, { req }) => updateUniqueUsername(value, req.params.id))
    .escape(),
  body("email")
    .optional()
    .isEmail()
    .withMessage("El email no es válido")
    .normalizeEmail()
    .trim()
    .escape()
    .custom((value, { req }) => updateUniqueEmail(value, req.params.id)),
  body("password")
    .optional()
    .isLength({ min: 6 })
    .withMessage("La contraseña debe tener al menos 6 caracteres")
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])/)
    .withMessage(
      "La contraseña debe contener al menos una letra minúscula, una letra mayúscula y un carácter especial"
    )
    .escape(),
  body("race")
    .optional()
    .isMongoId()
    .withMessage("La raza debe ser un ID válido")
    .custom(raceExist),
  body("weapons")
    .optional()
    .isArray()
    .withMessage("Las armas deben ser un array")
    .custom(weaponsExist)
    .optional(),
];

export const userIdValidation = [
  param("id").isMongoId().withMessage("El id no es válido").custom(userExists),
];
