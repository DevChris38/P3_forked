const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  constructor() {
    super({ table: "user" });
  }

  async create(user) {
    // Execute the SQL INSERT query to add a new user to the "user" table
    await this.database.query(
      `insert into ${this.table} (firstname, lastname, mail, pseudo, avatar, hashed_password) values (?, ?, ?, ?, ?, ?)`,
      [
        user.firstname,
        user.lastname,
        user.mail,
        user.pseudo,
        user.avatar,
        user.hashedPassword,
      ]
    );
  }

  async read(id) {
    const [rows] = await this.database.query(
      `select firstname, lastname, mail, pseudo, avatar from ${this.table} where id = ?`,
      [id]
    );

    return rows[0];
  }

  async readByEmailWithPassword(mail) {
    const [rows] = await this.database.query(
      `select id, mail, pseudo, avatar, firstname, lastname, hashed_password from ${this.table} where mail = ?`,
      [mail]
    );

    return rows[0];
  }

  async modify(user) {
    await this.database.query(
      `update ${this.table} set firstname = ?, lastname = ?, mail = ?, pseudo = ?, avatar = ? where id = ?`,
      [
        user.firstname,
        user.lastname,
        user.mail,
        user.pseudo,
        user.avatar,
        user.userId,
      ]
    );
  }

  async deleteUser(userId) {
    const check = await this.database.query(
      "SELECT * FROM user WHERE id = ? ",
      [userId]
    );
    const videosUser = await this.database.query(
      "select * from video where user_id = ?",
      [userId]
    );
    if (check[0].length > 0) {
      // Delete entries from related tables
      await this.database.query("DELETE FROM likes WHERE user_id = ?", [
        userId,
      ]);

      const onlyVideos = videosUser[0];
      for await (const video of onlyVideos) {
        this.database.query("DELETE FROM likes WHERE video_id = ?", [video.id]);
      }
      for await (const video of onlyVideos) {
        this.database.query("DELETE FROM video_category WHERE video_id = ?", [
          video.id,
        ]);
      }

      const testCategoryVideo = await this.database.query(
        "select * from video_category where video_id = ?",
        [userId]
      );
      if (testCategoryVideo[0].length <= 0) {
        for await (const video of onlyVideos) {
          this.database.query("DELETE FROM video WHERE id = ?", [video.id]);
        }
        const testVideo = await this.database.query(
          "select * from video where user_id = ?",
          [userId]
        );

        if (testVideo[0].length <= 0) {
          // Delete the user itself
          await this.database.query(`DELETE FROM ${this.table} WHERE id = ?`, [
            userId,
          ]);
        }
      }
    } else {
      throw new Error("user not found");
    }
  }
}

module.exports = UserManager;
