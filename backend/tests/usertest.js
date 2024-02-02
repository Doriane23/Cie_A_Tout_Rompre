const request = require("supertest");

const app = require("../src/app");
const database = require("../database/database");

afterAll(async () => {
  await database.end();
});

describe("Test de mon crud user", () => {
  describe("GET /users", () => {
    test("/users, retourne tous mes utilisateurs", async () => {
      const response = await request(app).get("/users");

      expect(response.statusCode).toBe(200);
      expect(response.headers["content-type"]).toMatch(/json/);
    });

    it("/users/:id, retourne un utilisateur", async () => {
      const response = await request(app).get("/users/1");

      expect(response.statusCode).toBe(200);
      expect(response.body).toHaveLength(1);
      expect(response.headers["content-type"]).toMatch(/json/);
    });

    it("/users/:id, avec un id qui n'existe pas", async () => {
      const response = await request(app).get("/users/:id").send("0");

      expect(response.status).toEqual(404);
    });
  });
});
