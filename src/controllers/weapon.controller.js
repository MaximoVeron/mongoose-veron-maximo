import { WeaponModel } from "../models/weapon.model.js";

export const createWeapon = async (req, res) => {
  try {
    const newWeapon = new WeaponModel(req.body);
    await newWeapon.save();
    return res.status(201).json(newWeapon);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Error al crear el arma" });
  }
};

export const getWeapons = async (req, res) => {
  try {
    const weapons = await WeaponModel.find();
    return res.status(200).json(weapons);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Error al obtener las armas" });
  }
};

export const getWeaponById = async (req, res) => {
  try {
    const weapon = await WeaponModel.findById(req.params.id);
    if (!weapon) {
      return res.status(404).json({ message: "Arma no encontrada" });
    }
    return res.status(200).json(weapon);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Error al obtener el arma" });
  }
};

export const updateWeapon = async (req, res) => {
  try {
    const updateWeapon = await WeaponModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updateWeapon) {
      return res.status(404).json({ message: "Arma no encontrada" });
    }
    return res.status(200).json(updateWeapon);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Error al actualizar el arma" });
  }
};

export const deleteWeapon = async (req, res) => {
  try {
    const deleteWeapon = await WeaponModel.findByIdAndDelete(req.params.id);
    if (!deleteWeapon) {
      return res.status(404).json({ message: "Arma no encontrada" });
    }
    return res.status(200).json({ message: "Arma eliminada con éxito" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Error al eliminar el arma" });
  }
};
