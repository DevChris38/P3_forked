const AbstractManager = require("./AbstractManager");

class MainVideoPlayerManager extends AbstractManager {
  constructor() {
    super({ table: "video" });
  }

  // The Rs of CRUD - Read operations

  async read(id) {
    // Execute the SQL SELECT query to retrieve a specific item by its ID
    const [rows] = await this.database.query(
      `SELECT title, link, image, description, nb_view, pseudo, count(*) as nbr_like from ${this.table} INNER JOIN user ON user.id = video.user_id INNER JOIN likes WHERE video.id =?`,
      [id]
    );

    return rows[0];
  }

  async readImageById(id) {
    const [rows] = await this.database.query(
      `SELECT id, image, title FROM ${this.table} where id = ?`,
      [id]
    );
    return rows[0];
  }

  async readByCategories(category, limit) {
    let sql = `SELECT title, image FROM video
    inner join video_category on video_category.video_id = video.id
    inner join category on category.id = video_category.category_id `;
    const sqlValues = [];
    if (category != null) {
      sql += "where category.name = ?";
      sqlValues.push(category);
    }
    if (limit != null) {
      sql += " limit ?";
      sqlValues.push(limit);
    }

    const [rows] = await this.database.query(sql, sqlValues);

    return rows;
  }

  // This function allows to verify is the user likes this video or not
  async isLikedByUser(id, user) {
    const [isLiked] = await this.database.query(
      "SELECT count(*) as nbr_like from likes WHERE video_id = ? and user_id = ?",
      [id, user]
    );
    if (isLiked[0].nbr_like > 0) {
      return true;
    }
    return false;
  }

  /* This function allows to add a line in likes table if this user didn't like this video, 
  but if this user already likes this video, this line is deleted in likes table */
  async likeVideo(id, user) {
    const isLiked = await this.isLikedByUser(id, user);
    if (isLiked === true) {
      await this.database.query(
        `DELETE FROM likes WHERE video_id = ? AND user_id = ?`,
        [id, user]
      );
    } else {
      await this.database.query(
        `INSERT INTO likes (user_id, video_id)
    VALUES
    (?, ?)`,
        [user, id]
      );
    }
  }

  async updateVideo(title, description, videoId, userId) {
    const check = await this.database.query(
      "SELECT * FROM video WHERE user_id = ? AND id = ?",
      [userId, videoId]
    );
    if (check[0].length > 0) {
      await this.database.query(
        `update ${this.table}
          set title = ? , description = ? WHERE id= ?`,
        [title, description, videoId]
      );
    }
  }

  async uploadVideo({
    name,
    videoUrl,
    miniatureUrl,
    description,
    weight,
    categories,
    userId,
  }) {
    const result = await this.database.query(
      "INSERT INTO video (title, link, image, description, weight, user_id, duration) VALUES (?, ?, ?, ?, ?, ?, 2)",
      [name, videoUrl, miniatureUrl, description, weight, userId]
    );

    // Pour chaque catégorie du tableau categories on va créer une entrée dans la table de jointure video_category
    categories.forEach(async (category) => {
      let idCategory = await this.database.query(
        "SELECT * FROM category WHERE name = (?)",
        [category]
      );

      // si la catégorie n'existe pas encore dans la table catégory, on la crée, puis on réaffecte la valeur de idCategory
      if (idCategory[0].length === 0) {
        await this.database.query("INSERT INTO category (name) VALUES (?)", [
          category,
        ]);

        idCategory = await this.database.query(
          "SELECT * FROM category WHERE name = (?)",
          [category]
        );
      }

      await this.database.query(
        "INSERT INTO video_category (video_id, category_id) VALUES (?, ?)",
        [result[0].insertId, idCategory[0][0].id]
      );
    });

    return result;
  }

  async deleteVideo(videoId, userId) {
    const check = await this.database.query(
      "SELECT * FROM video WHERE user_id = ? AND id = ?",
      [userId, videoId]
    );
    if (check[0].length > 0) {
      // Delete entries from related tables
      await this.database.query(
        "DELETE FROM video_category WHERE video_id = ?",
        [videoId]
      );

      await this.database.query("DELETE FROM likes WHERE video_id = ?", [
        videoId,
      ]);

      // Delete the video itself
      await this.database.query(`DELETE FROM ${this.table} WHERE id = ?`, [
        videoId,
      ]);
    } else {
      throw new Error("video not found"); // Video not found
    }
  }

  async readByUserId(id) {
    const [rows] = await this.database.query(
      `SELECT id, image, title, description FROM ${this.table} where user_id = ?`,
      [id]
    );
    return rows;
  }

  async readVideoById(id) {
    const [rows] = await this.database.query(
      `SELECT title FROM ${this.table} where id = ?`,
      [id]
    );
    return rows[0];
  }

  async countVideo() {
    // Execute the SQL SELECT query to retrieve a specific item by its ID
    const [rows] = await this.database.query(
      `select id from ${this.table} order by rand() limit 10`
    );

    return rows;
  }

  async searchTitle(search) {
    // Execute the SQL SELECT query to retrieve a specific item by its ID
    const [rows] = await this.database.query(
      `select id, title, image from ${this.table} where title LIKE '%${search}%' or description LIKE '%${search}%'`
    );

    return rows;
  }
}

module.exports = MainVideoPlayerManager;
