import request from "supertest";
import mongoose from "mongoose";
import app from "../setup/app";
import User from "../../models/user.model";
import { generateJwt } from "../../utils/jwt";
import { hashPassword } from "../../utils/auth";

describe("PROFILE CONTROLLER", () => {
  let token: string;
  let userId: mongoose.Types.ObjectId;

  beforeEach(async () => {
    await User.deleteMany({});

    const user = await User.create({
      name: "Test",
      lastName: "User",
      role: "user",
      email: "test@test.com",
      password: await hashPassword("123456789")
    });

    userId = user._id;
    token = generateJwt({ _id: userId });
  });

  describe("updateProfile", () => {
    it("should update profile", async () => {
      const res = await request(app)
        .put("/api/v1/profile")
        .set("Authorization", `Bearer ${token}`)
        .send({
          name: "Updated",
          lastName: "User",
          email: "updated@test.com"
        });

      expect(res.status).toBe(200);
      expect(res.body.message).toBe("Perfil actualizado correctamente");
    });

    it("should return a 409 response if new email is used by another user", async () => {
      await User.create({
        name: "Other",
        lastName: "User",
        role: "user",
        email: "existing@test.com",
        password: await hashPassword("123456789")
      });

      const res = await request(app)
        .put("/api/v1/profile")
        .set("Authorization", `Bearer ${token}`)
        .send({
          name: "Updated",
          lastName: "User",
          email: "existing@test.com"
        });

      expect(res.status).toBe(409);
      expect(res.body.error).toBe("El email ingresado ya está en uso por otro Usuario");
    });

    it("should allow same email for the same user", async () => {
      const res = await request(app)
        .put("/api/v1/profile")
        .set("Authorization", `Bearer ${token}`)
        .send({
          name: "Updated",
          lastName: "User",
          email: "test@test.com"
        });

      expect(res.status).toBe(200);
    });

    it("should return a 500 response if an error occurs", async () => {
      const saveMock = jest
        .spyOn(User.prototype, "save")
        .mockRejectedValueOnce(new Error("DB error"));

      const res = await request(app)
        .put("/api/v1/profile")
        .set("Authorization", `Bearer ${token}`)
        .send({
          name: "Updated",
          lastName: "User",
          email: "updated@test.com"
        });

      expect(res.status).toBe(500);
      expect(res.body.error).toBe("Error al actualizar el perfil");

      saveMock.mockRestore();
    });
  });

  describe("updateCurrentPassword", () => {
    it("should update password", async () => {
      const res = await request(app)
        .put("/api/v1/profile/password")
        .set("Authorization", `Bearer ${token}`)
        .send({
          currentPassword: "123456789",
          newPassword: "newpassword123",
          newPasswordConfirmation: "newpassword123"
        });

      expect(res.status).toBe(200);
      expect(res.body.message).toBe("Contraseña modificada correctamente");
    });

    it("should return a 401 response if current password is incorrect", async () => {
      const res = await request(app)
        .put("/api/v1/profile/password")
        .set("Authorization", `Bearer ${token}`)
        .send({
          currentPassword: "wrongpassword",
          newPassword: "newpassword123",
          newPasswordConfirmation: "newpassword123"
        });

      expect(res.status).toBe(401);
      expect(res.body.error).toBe("Tu contraseña actual no es correcta");
    });

    it("should return a 500 response if an error occurs", async () => {
      const findByIdMock = jest
        .spyOn(User.prototype, "save")
        .mockRejectedValueOnce(new Error("DB error"));

      const res = await request(app)
        .put("/api/v1/profile/password")
        .set("Authorization", `Bearer ${token}`)
        .send({
          currentPassword: "123456789",
          newPassword: "newpassword123",
          newPasswordConfirmation: "newpassword123"
        });

      expect(res.status).toBe(500);
      expect(res.body.error).toBe("Error al actualizar la contraseña");

      findByIdMock.mockRestore();
    });
  });
});
