import { Request, Response } from "express";
import User from "../models/UserModel";

export class ProfileController {
  static updateProfile = async (req: Request, res: Response) => {
    try {
      const { name, lastName, email } = req.body;
      const userExists = await User.findOne({ email });

      if (
        userExists &&
        userExists._id.toString() !== req.authenticatedUser._id.toString()
      ) {
        const error = new Error("El email ingresado ya está en uso por otro Usuario");
        res.status(409).json({ error: error.message });
        return;
      }

      req.authenticatedUser.name = name;
      req.authenticatedUser.lastName = lastName;
      req.authenticatedUser.email = email;

      await req.authenticatedUser.save();
      res.status(200).json({ message: "Perfil actualizado correctamente" });
    } catch (error) {
      res.status(500).json({ error: "Error al actualizar el perfil" });
    }
  };
}
