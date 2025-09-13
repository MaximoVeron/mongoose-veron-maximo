import { RaceModel } from "../models/race.model.js";

export const createUser = async (req, res) => {
    try {
        const newRace = new RaceModel(req.body);
        await newRace.save();
        return res.status(201).json(newRace);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Error al crear la raza" });
    }
};

export const getRaces = async (req, res) => {
    try {
        const races = await RaceModel.find();
        return res.status(200).json(races);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Error al obtener las razas" });
    }
};

export const getRaceById = async (req, res) => {
    try {
     const raceId = RaceModel.findById(req.params.id);
        if (!raceId) {
            return res.status(404).json({ message: "Raza no encontrada" });
        }   
        return res.status(200).json(raceId);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Error al obtener la raza" });
    }
};

export const updateRace = async (req, res) => {
    try {
        const updateUser = await RaceModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updateUser) {
            return res.status(404).json({ message: "Raza no encontrada" });
        }
        return res.status(200).json(updateUser);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Error al actualizar la raza" });
    }
};