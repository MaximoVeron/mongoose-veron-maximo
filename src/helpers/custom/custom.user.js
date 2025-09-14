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
