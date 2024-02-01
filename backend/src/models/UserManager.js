/**
 * On importe la DB pour accèder à notre base de donnée
 */

const database = require("../../database/database");

class UserManager {
  /**
   * On suit le modèle CRUD
   */

  /**
   * Create
   */

  // !TODO : Faire le create

  /**
   * Read All
   */
  static async readAll() {
    const SQL = "SELECT * FROM user";
    const users = await database.query(SQL);
    return users[0];
  }

  /**
   * Read
   */
  static async read(id) {
    const SQL = "SELECT * FROM user WHERE id = ?";
    const users = await database.query(SQL, [id]);
    return users[0];
  }

  /**
   * Update
   */

  // !TODO : Faire l'update

  /**
   * Delete
   */

  // !TOD : Faire le delete
}

module.exports = UserManager;
