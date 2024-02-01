// ./server/index.js

// Il me faut express
const express = require("express");
// Ici, le paquet cors me permet de gérer les CORS
// https://developer.mozilla.org/fr/docs/Web/HTTP/CORS
const cors = require("cors");
const database = require("./database/database");

// J'initialise mon app
const app = express();

const PORT = 3310;

// J'utilise cors
app.use(cors());

// Je défini une route

/**
 * GET /
 */
app.get("/", async (req, res) => {
  const SQL = "SELECT * FROM user";
  try {
    const users = await database.query(SQL);
    res.json(users[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error });
  }
});

app.post("/", (req, res) => {
  res.send("Hello World from post");
});

app.put("/", (req, res) => {
  res.send("Hello World from put");
});

app.delete("/", (req, res) => {
  res.send("Hello World from delete");
});

// Puis je lance mon serveur
app.listen(PORT, () => {
  console.info(`Server started on port ${PORT}`);
});
