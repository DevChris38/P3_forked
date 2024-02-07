const express = require("express");
const { hashPassword, verifyToken } = require("./services/auth");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import itemControllers module for handling item-related operations
const itemControllers = require("./controllers/itemControllers");
const videoControllers = require("./controllers/videoControllers");
const userControllers = require("./controllers/userControllers");
const authControllers = require("./controllers/authControllers");

router.post("/users", hashPassword, userControllers.add);
router.post("/login", authControllers.login);
router.get("/videos/:id", videoControllers.read);
router.put("/users", userControllers.modify);

// Route to get a list of items
router.get("/items", itemControllers.browse);

// Route to get a specific item by ID
router.get("/items/:id", itemControllers.read);

// Route to add a new item
router.post("/items", itemControllers.add);

// Route to get video information by id
router.get("/videos/:id", videoControllers.read);
router.get("/videos/miniatures/:id", videoControllers.readImageById);

router.get("/videos/:id/like/:user", videoControllers.isLikedByUser);

// route qui recupère le titre et l'image de la miniature video

router.get("/videosSelected", videoControllers.readByCategories);
router.put("/video", videoControllers.ModifyVideo);

// route qui ajoute/supprime un like à une video
router.put("/videos/:id/like/:user", videoControllers.likeVideo);

// route qui ajoute une nouvelle video
router.post("/videos/upload", videoControllers.uploadVideo);

// Routes to get user informations or add a new user
router.get("/users/:id", userControllers.read);
router.get("/logout", authControllers.logout);

// route qui recupere les informations des videos selon l'id user
router.get("/videos/posted/:id", videoControllers.readByUserId);

// route qui supprime une video
router.delete("/videos/deleteVideo", videoControllers.videoDelete);

// route qui supprime un user
router.delete("/users/deleteUser", userControllers.userDelete);

// route pour recuperer le nombre de video presente dans la BDD
router.get("/countVideos", videoControllers.countVideo);

router.get("/search", videoControllers.searchTitle);

// Authentication wall that allows to protect all routes after that
router.use(verifyToken);

/* ************************************************************************* */

module.exports = router;
