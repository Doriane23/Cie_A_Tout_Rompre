/**
 * On importe la DB pour accèder à notre base de donnée
 */

const UserManager = require("../models/UserManager");

/**
 * Récupère TOUTES les données
 */
const browse = async (req, res) => {
  try {
    const users = await UserManager.readAll();
    res.json(users);
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

  try {
    const result = await UserManager.read(id);
    res.json(result);
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
