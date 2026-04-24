import request from "supertest";
import mongoose from "mongoose";
import app from "../setup/app";
import User from "../../models/user.model";
import Address from "../../models/address.model";
import { generateJwt } from "../../utils/jwt";

describe("ADDRESS CONTROLLER", () => {
  let token: string;
  let userId: mongoose.Types.ObjectId;
  let addressId: mongoose.Types.ObjectId;

  beforeEach(async () => {
    await User.deleteMany({});
    await Address.deleteMany({});

    const user = new User({
      name: "Test",
      lastName: "User",
      email: "test@test.com",
      password: "123456789",
      addresses: []
    });

    await user.save();
    userId = user._id;

    token = generateJwt({ _id: userId });
  });

  describe("createAddress", () => {
    it("should create a user address", async () => {
      const res = await request(app)
        .post(`/api/v1/users/${userId}/addresses`)
        .set("Authorization", `Bearer ${token}`)
        .send({
          street: "Fake St 123",
          city: "Tucuman",
          province: "Tucuman",
          country: "Argentina"
        });

      expect(res.status).toBe(201);
      expect(res.body.message).toBe("Dirección creada correctamente");
    });

    it("should return a 500 response if an error occurs", async () => {
      const saveMock = jest
        .spyOn(Address.prototype, "save")
        .mockRejectedValueOnce(new Error("DB error"));

      const res = await request(app)
        .post(`/api/v1/users/${userId}/addresses`)
        .set("Authorization", `Bearer ${token}`)
        .send({
          street: "Fake St 123",
          city: "Tucuman",
          province: "Tucuman",
          country: "Argentina"
        });

      expect(res.status).toBe(500);
      expect(res.body.error).toBe("Error al crear la dirección");

      saveMock.mockRestore();
    });
  });

  describe("getUserAddresses", () => {
    it("should return user addresses", async () => {
      const address = new Address({
        street: "Fake St",
        city: "City",
        province: "Province",
        country: "Country",
        user: userId
      });

      await address.save();

      const res = await request(app)
        .get(`/api/v1/users/${userId}/addresses`)
        .set("Authorization", `Bearer ${token}`);

      expect(res.status).toBe(200);
      expect(res.body.data.length).toBe(1);
    });

    it("should return a 500 response if an error occurs", async () => {
      const findMock = jest.spyOn(Address, "find").mockReturnValueOnce({
        select: jest.fn().mockRejectedValue(new Error("DB error"))
      } as any);

      const res = await request(app)
        .get(`/api/v1/users/${userId}/addresses`)
        .set("Authorization", `Bearer ${token}`);

      expect(res.status).toBe(500);
      expect(res.body.error).toBe("Error al obtener las direcciones");

      findMock.mockRestore();
    });
  });

  describe("getAddressById", () => {
    it("should return address", async () => {
      const address = await Address.create({
        street: "Fake",
        city: "City",
        province: "Province",
        country: "Country",
        user: userId
      });

      addressId = address._id;

      const res = await request(app)
        .get(`/api/v1/users/${userId}/addresses/${addressId}`)
        .set("Authorization", `Bearer ${token}`);

      expect(res.status).toBe(200);
      expect(res.body).toHaveProperty("data");
      expect(res.body.data).toHaveProperty("_id");
    });
  });

  describe("updateAdress", () => {
    it("should update address", async () => {
      const address = await Address.create({
        street: "Old",
        city: "Old",
        province: "Old",
        country: "Old",
        user: userId
      });

      addressId = address._id;

      const res = await request(app)
        .put(`/api/v1/users/${userId}/addresses/${addressId}`)
        .set("Authorization", `Bearer ${token}`)
        .send({
          street: "New Street",
          city: "New City",
          province: "New Province",
          country: "New Country"
        });

      expect(res.status).toBe(200);
      expect(res.body.message).toBe("Dirección actualizada correctamente");
    });

    it("should return a 500 response if an error occurs", async () => {
      const saveMock = jest
        .spyOn(Address.prototype, "save")
        .mockRejectedValueOnce(new Error("DB error"));

      const address = await Address.create({
        street: "Old",
        city: "Old",
        province: "Old",
        country: "Old",
        user: userId
      });

      addressId = address._id;

      const res = await request(app)
        .put(`/api/v1/users/${userId}/addresses/${addressId}`)
        .set("Authorization", `Bearer ${token}`)
        .send({
          street: "New Street",
          city: "New City",
          province: "New Province",
          country: "New Country"
        });

      expect(res.status).toBe(500);
      expect(res.body.error).toBe("Error al actualizar la dirección");

      saveMock.mockRestore();
    });
  });

  describe("deleteAddress", () => {
    it("should delete address", async () => {
      const address = await Address.create({
        street: "Delete",
        city: "City",
        province: "Province",
        country: "Country",
        user: userId
      });

      addressId = address._id;

      // Add address to user
      const user = await User.findById(userId);
      user.addresses.push(addressId);
      await user.save();

      const res = await request(app)
        .delete(`/api/v1/users/${userId}/addresses/${addressId}`)
        .set("Authorization", `Bearer ${token}`);

      expect(res.status).toBe(200);
      expect(res.body.message).toBe("Dirección eliminada correctamente");
    });

    it("should return a 500 response if an error occurs", async () => {
      const deleteMock = jest
        .spyOn(Address.prototype, "deleteOne")
        .mockRejectedValueOnce(new Error("DB error"));

      const address = await Address.create({
        street: "Delete",
        city: "City",
        province: "Province",
        country: "Country",
        user: userId
      });

      addressId = address._id;

      // Add address to user
      const user = await User.findById(userId);
      user.addresses.push(addressId);
      await user.save();

      const res = await request(app)
        .delete(`/api/v1/users/${userId}/addresses/${addressId}`)
        .set("Authorization", `Bearer ${token}`);

      expect(res.status).toBe(500);
      expect(res.body.error).toBe("Error al eliminar la dirección");

      deleteMock.mockRestore();
    });
  });
});
