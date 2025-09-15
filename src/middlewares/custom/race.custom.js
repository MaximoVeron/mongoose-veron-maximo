import { RaceModel } from "../../models/race.model.js";

export const raceExists = async (name) => {
  const race = await RaceModel.findOne({ name });
  if (race) {
    throw new Error("El nombre de la raza ya está en uso");
  }
};

export const raceIdExists = async (id) => {
  const race = await RaceModel.findById(id);
  if (!race) {
    throw new Error("La raza no existe");
  }
};

export const updateRaceNameUnique = async (name, id) => {
  const race = await RaceModel.findOne({ name, _id: { $ne: id } });
  if (race) {
    throw new Error("El nombre de la raza ya está en uso");
  }
};
