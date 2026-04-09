import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import User from "../../models/user.model";
import { authenticate } from "../../middlewares/auth.middleware";

jest.mock("jsonwebtoken");
jest.mock("../../models/user.model");

describe("AUTH MIDDLEWARE", () => {
  it("should call next if token is valid", async () => {
    const req = {
      headers: {
        authorization: "Bearer token"
      }
    } as Request;

    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    } as any;

    const next = jest.fn();

    (jwt.verify as jest.Mock).mockReturnValue({ _id: "123" });

    (User.findById as jest.Mock).mockReturnValue({
      select: jest.fn().mockResolvedValue({
        _id: "123",
        name: "John",
        lastName: "Doe",
        role: "user",
        email: "test@test.com"
      })
    });

    await authenticate(req, res, next);

    expect(next).toHaveBeenCalled();
  });

  it("should return a 401 response if no token", async () => {
    const req = { headers: {} } as Request;

    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    } as any;

    const next = jest.fn();

    await authenticate(req, res, next);

    expect(res.status).toHaveBeenCalledWith(401);
  });

  it("should return a 401 response if user not found", async () => {
    const req = {
      headers: {
        authorization: "Bearer token"
      }
    } as Request;

    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    } as any;

    const next = jest.fn();

    (jwt.verify as jest.Mock).mockReturnValue({ _id: "123" });

    (User.findById as jest.Mock).mockReturnValue({
      select: jest.fn().mockResolvedValue(null)
    });

    await authenticate(req, res, next);

    expect(res.status).toHaveBeenCalledWith(401);
    expect(next).not.toHaveBeenCalled();
  });

  it("should return a 500 response if jwt.verify throws", async () => {
    const req = {
      headers: {
        authorization: "Bearer token"
      }
    } as Request;

    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    } as any;

    const next = jest.fn();

    (jwt.verify as jest.Mock).mockImplementation(() => {
      throw new Error("Token no válido");
    });

    await authenticate(req, res, next);

    expect(res.status).toHaveBeenCalledWith(500);
    expect(next).not.toHaveBeenCalled();
  });
});
