import mongoose from "mongoose";
import { UserModel } from "../../models/user.model.js";
import { RaceModel } from "../../models/race.model.js";
import { WeaponModel } from "../../models/weapon.model.js";

export const usernameExists = async (username) => {
  const user = await UserModel.findOne({ username });
  if (user) {
    throw new Error("El nombre de usuario ya está en uso");
  }
};

export const emailExists = async (email) => {
  const user = await UserModel.findOne({ email });
  if (user) {
    throw new Error("El email ya está en uso");
  }
};

export const userExists = async (id) => {
  const user = await UserModel.findById(id);
  if (!user) {
    throw new Error("El usuario no existe");
  }
};

export const raceExist = async (id) => {
  const race = await RaceModel.findById(id);
  if (!race) {
    throw new Error("La raza no existe");
  }
};

export const weaponsExist = async (weapons) => {
  if (!Array.isArray(weapons)) throw new Error("Las armas deben ser un array");
  for (const id of weapons) {
    if (!mongoose.Types.ObjectId.isValid(id))
      throw new Error(`ID de arma inválido: ${id}`);
    const weapon = await WeaponModel.findById(id);
    if (!weapon) throw new Error(`El arma con id ${id} no existe`);
  }
};

export const updateUniqueUsername = async (username, id) => {
  const user = await UserModel.findOne({ username, _id: { $ne: id } });
  if (user) {
    throw new Error("Username already in use");
  }
};

export const updateUniqueEmail = async (email, id) => {
  const user = await UserModel.findOne({ email, _id: { $ne: id } });
  if (user) {
    throw new Error("Email already in use");
  }
};
