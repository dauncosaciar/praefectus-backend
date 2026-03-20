import request from "supertest";
import app from "../setup/app";
import { connectTestDatabase, disconnectTestDatabase } from "../setup/db";

beforeAll(connectTestDatabase);
afterAll(disconnectTestDatabase);

describe("AUTH ROUTES", () => {
  const user = {
    name: "John",
    lastName: "Smith",
    role: "user",
    email: "john.smith@addressdashboard.com",
    password: "123456"
  };

  // await request(app).post("/api/v1/auth/register").send(user);

  it("POST /api/v1/auth/login => should display input validation errors", async () => {
    const res = await request(app).post("/api/v1/auth/login").send({});

    expect(res.status).toBe(400);
    expect(res.body).toHaveProperty("errors");
    expect(res.body.errors).toHaveLength(2);

    expect(res.status).not.toBe(200);
    expect(res.body).not.toHaveProperty("token");
    expect(res.body.errors).not.toHaveLength(4);
  });

  it("POST /api/v1/auth/login => should return a 404 response for a non-existent user", async () => {
    const res = await request(app).post("/api/v1/auth/login").send({
      email: "not.exists@example.com",
      password: "123456"
    });

    expect(res.status).toBe(404);
    expect(res.body).toHaveProperty("error");

    expect(res.status).not.toBe(200);
    expect(res.body).not.toHaveProperty("token");
  });

  it("POST /api/v1/auth/login => should return a 401 response for an incorrect user password", async () => {
    const res = await request(app).post("/api/v1/auth/login").send({
      email: user.email,
      password: "incorrectPassword"
    });

    expect(res.status).toBe(401);
    expect(res.body).toHaveProperty("error");

    expect(res.status).not.toBe(200);
    expect(res.body).not.toHaveProperty("token");
  });

  it("POST /api/v1/auth/login => should login user and return token", async () => {
    const res = await request(app).post("/api/v1/auth/login").send({
      email: user.email,
      password: user.password
    });

    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty("token");

    expect(res.status).not.toBe(404);
    expect(res.status).not.toBe(401);
    expect(res.body).not.toHaveProperty("error");
  });
});
