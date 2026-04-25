import request from "supertest";
import mongoose from "mongoose";
import app from "../setup/app";
import User from "../../models/user.model";
import Study from "../../models/study.model";
import { generateJwt } from "../../utils/jwt";

describe("STUDY CONTROLLER", () => {
  let token: string;
  let userId: mongoose.Types.ObjectId;
  let studyId: mongoose.Types.ObjectId;

  beforeEach(async () => {
    await User.deleteMany({});
    await Study.deleteMany({});

    const user = new User({
      name: "Test",
      lastName: "User",
      email: "test@test.com",
      password: "123456789",
      studies: []
    });

    await user.save();
    userId = user._id;

    token = generateJwt({ _id: userId });
  });

  describe("createStudy", () => {
    it("should create a user study", async () => {
      const res = await request(app)
        .post(`/api/v1/users/${userId}/studies`)
        .set("Authorization", `Bearer ${token}`)
        .send({
          title: "Fake Studio 123",
          institution: "Universidad Nacional de Tucumán",
          startDate: "2000-03-01",
          endDate: "2005-12-01"
        });

      expect(res.status).toBe(201);
      expect(res.body.message).toBe("Estudio creado correctamente");
    });

    it("should return a 500 response if an error occurs", async () => {
      const saveMock = jest
        .spyOn(Study.prototype, "save")
        .mockRejectedValueOnce(new Error("DB error"));

      const res = await request(app)
        .post(`/api/v1/users/${userId}/studies`)
        .set("Authorization", `Bearer ${token}`)
        .send({
          title: "Fake Studio 123",
          institution: "Universidad Nacional de Tucumán",
          startDate: "2000-03-01",
          endDate: "2005-12-01"
        });

      expect(res.status).toBe(500);
      expect(res.body.error).toBe("Error al crear el estudio");

      saveMock.mockRestore();
    });
  });

  describe("getUserStudies", () => {
    it("should return user studies", async () => {
      const study = new Study({
        title: "Fake Studio 123",
        institution: "Universidad Nacional de Tucumán",
        startDate: "2000-03-01",
        endDate: "2005-12-01",
        user: userId
      });

      await study.save();

      const res = await request(app)
        .get(`/api/v1/users/${userId}/studies`)
        .set("Authorization", `Bearer ${token}`);

      expect(res.status).toBe(200);
      expect(res.body.data.length).toBe(1);
    });

    it("should return a 500 response if an error occurs", async () => {
      const findMock = jest.spyOn(Study, "find").mockReturnValueOnce({
        select: jest.fn().mockRejectedValue(new Error("DB error"))
      } as any);

      const res = await request(app)
        .get(`/api/v1/users/${userId}/studies`)
        .set("Authorization", `Bearer ${token}`);

      expect(res.status).toBe(500);
      expect(res.body.error).toBe("Error al obtener los estudios");

      findMock.mockRestore();
    });
  });

  describe("getStudyById", () => {
    it("should return study", async () => {
      const study = await Study.create({
        title: "Fake Studio 123",
        institution: "Universidad Nacional de Tucumán",
        startDate: "2000-03-01",
        endDate: "2005-12-01",
        user: userId
      });

      studyId = study._id;

      const res = await request(app)
        .get(`/api/v1/users/${userId}/studies/${studyId}`)
        .set("Authorization", `Bearer ${token}`);

      expect(res.status).toBe(200);
      expect(res.body).toHaveProperty("data");
      expect(res.body.data).toHaveProperty("_id");
    });
  });

  describe("updateStudy", () => {
    it("should update study", async () => {
      const study = await Study.create({
        title: "Fake Studio 123",
        institution: "Universidad Nacional de Tucumán",
        startDate: "2000-03-01",
        endDate: "2005-12-01",
        user: userId
      });

      studyId = study._id;

      const res = await request(app)
        .put(`/api/v1/users/${userId}/studies/${studyId}`)
        .set("Authorization", `Bearer ${token}`)
        .send({
          title: "New Study",
          institution: "New Institution",
          startDate: "2001-03-01",
          endDate: "2006-12-01"
        });

      expect(res.status).toBe(200);
      expect(res.body.message).toBe("Estudio actualizado correctamente");
    });

    it("should return a 500 response if an error occurs", async () => {
      const saveMock = jest
        .spyOn(Study.prototype, "save")
        .mockRejectedValueOnce(new Error("DB error"));

      const study = await Study.create({
        title: "Fake Studio 123",
        institution: "Universidad Nacional de Tucumán",
        startDate: "2000-03-01",
        endDate: "2005-12-01",
        user: userId
      });

      studyId = study._id;

      const res = await request(app)
        .put(`/api/v1/users/${userId}/studies/${studyId}`)
        .set("Authorization", `Bearer ${token}`)
        .send({
          title: "New Study",
          institution: "New Institution",
          startDate: "2001-03-01",
          endDate: "2006-12-01"
        });

      expect(res.status).toBe(500);
      expect(res.body.error).toBe("Error al actualizar el estudio");

      saveMock.mockRestore();
    });
  });

  describe("deleteStudy", () => {
    it("should delete study", async () => {
      const study = await Study.create({
        title: "Fake Studio 123",
        institution: "Universidad Nacional de Tucumán",
        startDate: "2000-03-01",
        endDate: "2005-12-01",
        user: userId
      });

      studyId = study._id;

      // Add study to user
      const user = await User.findById(userId);
      user.studies.push(studyId);
      await user.save();

      const res = await request(app)
        .delete(`/api/v1/users/${userId}/studies/${studyId}`)
        .set("Authorization", `Bearer ${token}`);

      expect(res.status).toBe(200);
      expect(res.body.message).toBe("Estudio eliminado correctamente");
    });

    it("should return a 500 response if an error occurs", async () => {
      const deleteMock = jest
        .spyOn(Study.prototype, "deleteOne")
        .mockRejectedValueOnce(new Error("DB error"));

      const study = await Study.create({
        title: "Fake Studio 123",
        institution: "Universidad Nacional de Tucumán",
        startDate: "2000-03-01",
        endDate: "2005-12-01",
        user: userId
      });

      studyId = study._id;

      // Add study to user
      const user = await User.findById(userId);
      user.studies.push(studyId);
      await user.save();

      const res = await request(app)
        .delete(`/api/v1/users/${userId}/studies/${studyId}`)
        .set("Authorization", `Bearer ${token}`);

      expect(res.status).toBe(500);
      expect(res.body.error).toBe("Error al eliminar el estudio");

      deleteMock.mockRestore();
    });
  });
});
