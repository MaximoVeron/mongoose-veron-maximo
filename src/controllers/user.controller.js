import { UserModel } from "../models/user.model.js";

export const createUser = async (req, res) => {
    try {
        const newUser = new UserModel(req.body)
        await newUser.save();
        return res.status(201).json(newUser);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Error al crear el usuario" });
    }
};

export const getUsers = async (req, res) => {
    try {
        const users = await UserModel.find().populate("weapons").populate("race");
        return res.status(200).json(users);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Error al obtener los usuarios" });
    }
};

export const getUserById = async (req, res) => {
    try {
        const user = await UserModel.findById(req.params.id).populate("weapons").populate("race");
        if (!user) {
            return res.status(404).json({ message: "Usuario no encontrado" });
        }
        return res.status(200).json(user);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Error al obtener el usuario" });
    }
};

export const updateUser = async (req, res) => {
    try {
        const user = await UserModel.findByIdAndUpdate(req.params.id, req.body, { new: true }).populate("weapons").populate("race");
        if (!user) {
            return res.status(404).json({ message: "Usuario no encontrado" });
        }
        return res.status(200).json(user);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Error al actualizar el usuario" });
    }
};

export const deleteUser = async (req, res) => {
    try {
        const user = await UserModel.findByIdAndDelete(req.params.id);
        if (!user) {
            return res.status(404).json({ message: "Usuario no encontrado" });
        }
        return res.status(200).json({ message: "Usuario eliminado" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Error al eliminar el usuario" });
    }
};