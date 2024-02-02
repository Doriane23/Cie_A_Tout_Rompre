const database = require("../../database/database");

class UserManager {
  static async add(user) {
    const SQL = "INSER INTO user (name, email, password) VALUES (?,?,?)";
    const addUser = await database.query(SQL, [
      user.name,
      user.email,
      user.password,
    ]);
    return addUser[0];
  }

  /**
   * Read ALL
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
}

module.exports = UserManager;
