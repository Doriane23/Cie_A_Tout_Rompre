/**
 * On importe la DB pour accèder à notre base de donnée
 */

const database = require("../../database/database");

/**
 * Récupère TOUTES les données
 */
const browse = async (req, res) => {
  const SQL = "SELECT * FROM user";
  try {
    const users = await database.query(SQL);
    res.json(users[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error });
  }
};

/**
 * Récupère UNE donnée
 */
const read = async (req, res) => {
  const { id } = req.params;

  const SQL = "SELECT * FROM user WHERE id = ?";
  try {
    const users = await database.query(SQL, [id]);
    res.json(users[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error });
  }
};

/**
 * modifie UNE donnée
 */
const edit = (req, res) => {
  res.send("Hello World from put");
};

/**
 * Ajoute UNE donnée
 */
const add = (req, res) => {
  res.send("Hello World from post");
};

/**
 * Supprime UNE donnée
 */
const destroy = (req, res) => {
  res.send("Hello World from delete");
};

module.exports = {
  browse,
  read,
  edit,
  add,
  destroy,
};
