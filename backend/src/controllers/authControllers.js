const argon2 = require("argon2");
const jwt = require("jsonwebtoken");
const tables = require("../tables");

const login = async (req, res, next) => {
  try {
    const user = await tables.user.readByEmailWithPassword(req.body.mail);

    if (user === null) {
      res.sendStatus(422);
    }
    const verified = await argon2.verify(
      user.hashed_password,
      req.body.password
    );

    if (verified === true) {
      delete user.hashed_password;

      const token = await jwt.sign(
        { mail: user.mail },
        process.env.APP_SECRET,
        { expiresIn: "1h" }
      );
      res
        .cookie("access_token", token, {
          httpOnly: true,
          sameSite: "Lax",
          secure: process.env.NODE_ENV === "production",
          maxAge: 60000,
        })
        .json({
          user,
        });
    } else {
      res
        .status(422)
        .send("le mail ou le mot de passe entrés ne sont pas bons");
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

const logout = (req, res) => {
  res.clearCookie("access_token").sendStatus(200);
};

module.exports = {
  login,
  logout,
};
