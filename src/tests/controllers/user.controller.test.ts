import request from "supertest";
import mongoose from "mongoose";
import app from "../setup/app";
import User from "../../models/user.model";
import { generateJwt } from "../../utils/jwt";
import { hashPassword } from "../../utils/auth";

describe("USER CONTROLLER", () => {
  let token: string;
  let loggedInUserId: mongoose.Types.ObjectId;
  let userId: mongoose.Types.ObjectId;

  beforeEach(async () => {
    await User.deleteMany({});

    const user = new User({
      name: "Test",
      lastName: "User",
      role: "admin",
      email: "test@test.com",
      password: "123456789"
    });

    await user.save();
    loggedInUserId = user._id;

    token = generateJwt({ _id: loggedInUserId });
  });

  describe("createUser", () => {
    it("should create a user", async () => {
      const res = await request(app)
        .post("/api/v1/users")
        .set("Authorization", `Bearer ${token}`)
        .send({
          name: "Test Name",
          lastName: "Test Lastname",
          role: "user",
          email: "test.test@addressdashboard.com",
          password: "123456789"
        });

      expect(res.status).toBe(201);
      expect(res.body.message).toBe("Usuario creado correctamente");
    });

    it("should return 409 if email already exists", async () => {
      const res = await request(app)
        .post("/api/v1/users")
        .set("Authorization", `Bearer ${token}`)
        .send({
          name: "Test",
          lastName: "User",
          role: "admin",
          email: "test@test.com",
          password: "123456789"
        });

      expect(res.status).toBe(409);
      expect(res.body.error).toBe("El email ingresado ya está en uso por otro Usuario");
    });

    it("should return a 500 response if an error occurs", async () => {
      const saveMock = jest
        .spyOn(User.prototype, "save")
        .mockRejectedValueOnce(new Error("DB error"));

      const res = await request(app)
        .post("/api/v1/users")
        .set("Authorization", `Bearer ${token}`)
        .send({
          name: "Test Name",
          lastName: "Test Lastname",
          role: "user",
          email: "test.test@addressdashboard.com",
          password: "123456789"
        });

      expect(res.status).toBe(500);
      expect(res.body.error).toBe("Error al crear el usuario");

      saveMock.mockRestore();
    });
  });

  describe("getAllUsers", () => {
    it("should return all users", async () => {
      const user = new User({
        name: "Test Name",
        lastName: "Test Lastname",
        role: "user",
        email: "test.test@addressdashboard.com",
        password: await hashPassword("123456789")
      });

      await user.save();

      const res = await request(app)
        .get("/api/v1/users")
        .set("Authorization", `Bearer ${token}`);

      expect(res.status).toBe(200);
      expect(res.body.data.length).toBe(1);
    });

    it("should return a 500 response if an error occurs", async () => {
      const findMock = jest.spyOn(User, "find").mockReturnValueOnce({
        select: jest.fn().mockRejectedValue(new Error("DB error"))
      } as any);

      const res = await request(app)
        .get("/api/v1/users")
        .set("Authorization", `Bearer ${token}`);

      expect(res.status).toBe(500);
      expect(res.body.error).toBe("Error al obtener los usuarios");

      findMock.mockRestore();
    });
  });

  describe("getUserById", () => {
    it("should return user", async () => {
      const user = await User.create({
        name: "Test Name",
        lastName: "Test Lastname",
        role: "user",
        email: "test.test@addressdashboard.com",
        password: await hashPassword("123456789")
      });

      userId = user._id;

      const res = await request(app)
        .get(`/api/v1/users/${userId}`)
        .set("Authorization", `Bearer ${token}`);

      expect(res.status).toBe(200);
      expect(res.body).toHaveProperty("data");
      expect(res.body.data).toHaveProperty("_id");
    });
  });

  describe("updateUser", () => {
    it("should update user", async () => {
      const user = await User.create({
        name: "Test Name",
        lastName: "Test Lastname",
        role: "user",
        email: "test.test@addressdashboard.com",
        password: await hashPassword("123456789")
      });

      userId = user._id;

      const res = await request(app)
        .put(`/api/v1/users/${userId}`)
        .set("Authorization", `Bearer ${token}`)
        .send({
          name: "Updated Name",
          lastName: "Updated Lastname",
          role: "user",
          email: "test.test@addressdashboard.com",
          password: "123456789"
        });

      expect(res.status).toBe(200);
      expect(res.body.message).toBe("Usuario actualizado correctamente");
    });

    it("should return a 500 response if an error occurs", async () => {
      const saveMock = jest
        .spyOn(User.prototype, "save")
        .mockRejectedValueOnce(new Error("DB error"));

      const user = await User.create({
        name: "Test Name",
        lastName: "Test Lastname",
        role: "user",
        email: "test.test@addressdashboard.com",
        password: await hashPassword("123456789")
      });

      userId = user._id;

      const res = await request(app)
        .put(`/api/v1/users/${userId}`)
        .set("Authorization", `Bearer ${token}`)
        .send({
          name: "Updated Name",
          lastName: "Updated Lastname",
          role: "user",
          email: "test.test@addressdashboard.com",
          password: "123456789"
        });

      expect(res.status).toBe(500);
      expect(res.body.error).toBe("Error al actualizar el usuario");

      saveMock.mockRestore();
    });
  });

  describe("deleteUser", () => {
    it("should delete user", async () => {
      const user = await User.create({
        name: "Test Name",
        lastName: "Test Lastname",
        role: "user",
        email: "test.test@addressdashboard.com",
        password: await hashPassword("123456789")
      });

      userId = user._id;

      const res = await request(app)
        .delete(`/api/v1/users/${userId}`)
        .set("Authorization", `Bearer ${token}`);

      expect(res.status).toBe(200);
      expect(res.body.message).toBe("Usuario eliminado correctamente");
    });

    it("should return a 500 response if an error occurs", async () => {
      const deleteMock = jest
        .spyOn(User.prototype, "deleteOne")
        .mockRejectedValueOnce(new Error("DB error"));

      const user = await User.create({
        name: "Test Name",
        lastName: "Test Lastname",
        role: "user",
        email: "test.test@addressdashboard.com",
        password: await hashPassword("123456789")
      });

      userId = user._id;

      const res = await request(app)
        .delete(`/api/v1/users/${userId}`)
        .set("Authorization", `Bearer ${token}`);

      expect(res.status).toBe(500);
      expect(res.body.error).toBe("Error al eliminar el usuario");

      deleteMock.mockRestore();
    });
  });
});
