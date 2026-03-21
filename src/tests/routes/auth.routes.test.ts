import request from "supertest";
import app from "../setup/app";

describe("AUTH ROUTES", () => {
  const user = {
    name: "John",
    lastName: "Smith",
    role: "user",
    email: "john.smith@addressdashboard.com",
    password: "123456789",
    passwordConfirmation: "123456789"
  };

  it("POST /api/v1/auth/register => should display input validation errors", async () => {
    const res = await request(app).post("/api/v1/auth/register").send({});

    expect(res.status).toBe(400);
    expect(res.body).toHaveProperty("errors");
    expect(res.body.errors).toHaveLength(4);

    expect(res.status).not.toBe(201);
    expect(res.body).not.toHaveProperty("message");
    expect(res.body.errors).not.toHaveLength(2);
  });

  it("POST /api/v1/auth/register => should return a 409 response for a duplicated email", async () => {
    // First request: create user successfully
    const firstRes = await request(app).post("/api/v1/auth/register").send({
      name: user.name,
      lastName: user.lastName,
      email: user.email,
      password: user.password,
      passwordConfirmation: user.passwordConfirmation
    });

    expect(firstRes.status).toBe(201);
    expect(firstRes.body).toHaveProperty("message");

    expect(firstRes.status).not.toBe(409);
    expect(firstRes.body).not.toHaveProperty("error");

    // Second request: same email (fail)
    const secondRes = await request(app).post("/api/v1/auth/register").send({
      name: user.name,
      lastName: user.lastName,
      email: user.email, // same email as in firstRes
      password: user.password,
      passwordConfirmation: user.passwordConfirmation
    });

    expect(secondRes.status).toBe(409);
    expect(secondRes.body).toHaveProperty("error");

    expect(secondRes.status).not.toBe(201);
    expect(secondRes.body).not.toHaveProperty("message");
  });

  it("POST /api/v1/auth/register => should return a 201 response for a new created user", async () => {
    const res = await request(app).post("/api/v1/auth/register").send({
      name: "James",
      lastName: "Doe",
      email: "james.doe@addressdashboard.com",
      password: "123456789",
      passwordConfirmation: "123456789"
    });

    expect(res.status).toBe(201);
    expect(res.body).toHaveProperty("message");

    expect(res.status).not.toBe(409);
    expect(res.body).not.toHaveProperty("error");
  });

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
