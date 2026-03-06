import { Request, Response } from "express";
import User from "../models/UserModel";

export class AuthController {
  static login = async (req: Request, res: Response) => {
    try {
      res.json({ message: "Desde login()" });
    } catch (error) {
      res.status(500).json({ error: "Error al iniciar sesión" });
    }
  };
}
