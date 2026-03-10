import { Router } from "express";
import { body } from "express-validator";
import { authenticate } from "../middlewares/auth";
import { handleInputErrors } from "../middlewares/validation";
import { ProfileController } from "../controllers/ProfileController";

const router = Router();

router.use(authenticate);

router.put(
  "/",
  body("name").notEmpty().withMessage("El nombre del Usuario es obligatorio"),
  body("lastName").notEmpty().withMessage("El apellido del Usuario es obligatorio"),
  body("email").isEmail().withMessage("El email del Usuario no es válido"),
  handleInputErrors,
  ProfileController.updateProfile
);

export default router;
