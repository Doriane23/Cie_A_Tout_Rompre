const database = require("../../database/database");

class UserManager {
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
}

module.exports = UserManager;
