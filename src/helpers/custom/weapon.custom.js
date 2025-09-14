import { WeaponModel } from "../../models/weapon.model.js";

export const weaponExists = async (name) => {
    const weapon = await WeaponModel.findOne({ name });
    if (weapon){
        throw new Error("El nombre del arma ya existe");
    }
};

export const weaponIdExists = async (id) => {
    const weapon = await WeaponModel.findById(id);
    if (!weapon) {
        throw new Error("El arma no existe");
    }
};