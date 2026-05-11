import { Request, Response } from "express";
import User from "../models/user.model";
import { hashPassword } from "../utils/auth";

export class UserController {
  static createUser = async (req: Request, res: Response) => {
    try {
      const { email } = req.body;
      const userExists = await User.findOne({ email });

      if (userExists) {
        const error = new Error("El email ingresado ya está en uso por otro Usuario");
        res.status(409).json({ error: error.message });
        return;
      }

      const user = new User(req.body);
      user.password = await hashPassword(req.body.password);
      await user.save();
      res.status(201).json({ message: "Usuario creado correctamente" });
    } catch (error) {
      res.status(500).json({ error: "Error al crear el usuario" });
    }
  };

  static getAllUsers = async (req: Request, res: Response) => {
    try {
      const users = await User.find({
        _id: { $ne: req.authenticatedUser._id }
      }).select("_id name lastName role email");
      res.json({ data: users });
    } catch (error) {
      res.status(500).json({ error: "Error al obtener los usuarios" });
    }
  };

  static getUserById = async (req: Request, res: Response) => {
    res.json({ data: req.user });
    return;
  };

  static updateUser = async (req: Request, res: Response) => {
    try {
      req.user.name = req.body.name;
      req.user.lastName = req.body.lastName;
      req.user.role = req.body.role;
      req.user.email = req.body.email;
      req.user.password = await hashPassword(req.body.password);
      await req.user.save();
      res.status(200).json({ message: "Usuario actualizado correctamente" });
    } catch (error) {
      res.status(500).json({ error: "Error al actualizar el usuario" });
    }
  };

  static deleteUser = async (req: Request, res: Response) => {
    try {
      await req.user.deleteOne();
      res.status(200).json({ message: "Usuario eliminado correctamente" });
    } catch (error) {
      res.status(500).json({ error: "Error al eliminar el usuario" });
    }
  };
}
