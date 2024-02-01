const tables = require("../tables");

const add = async (req, res, next) => {
  // Extract the user data from the request body
  const user = req.body;

  try {
    // Insert the user into the database
    const insertId = await tables.user.create(user);

    res.status(201).json({ insertId });
  } catch (err) {
    res.status(500).send("Ce mail est déjà utilisé");
    next(err);
  }
};

const read = async (req, res, next) => {
  try {
    const user = await tables.user.read(req.params.id);

    if (user === null) {
      res.sendStatus(404);
    } else {
      res.json(user);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

const modify = async (req, res, next) => {
  const user = req.body;

  try {
    const insert = await tables.user.modify(user);
    res.status(200).json({ insert });
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

const userDelete = async (req, res, next) => {
  const { userId } = req.body;
  try {
    await tables.user.deleteUser(userId);
    res.sendStatus(200);
  } catch (err) {
    res.status(500).send(err.message);
    next(err);
  }
};

module.exports = {
  add,
  read,
  modify,
  userDelete,
};
