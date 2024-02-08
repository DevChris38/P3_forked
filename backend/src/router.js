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

// Route to get a list of items
router.get("/items", itemControllers.browse);

// Route to get a specific item by ID
router.get("/items/:id", itemControllers.read);

// Route to add a new item
router.post("/items", itemControllers.add);

// Route to get video information by id
router.get("/videos/:id", videoControllers.read);
router.get("/videos/miniatures/:id", videoControllers.readImageById);
router.get("/videosId", videoControllers.OrderById);
router.get("/videosView", videoControllers.OrderByView);
router.get("/videosView", videoControllers.OrderByView);
router.get("/videoslikes", videoControllers.mostLiked);
router.get(
  "/videosCategoryLikes/:categoryName",
  videoControllers.CategoryMostLiked
);
router.get(
  "/videosMostViewCategoryLikes/:categoryName",
  videoControllers.categoryMostView
);

// route qui recupère le titre et l'image de la miniature video

router.get("/videosSelected", videoControllers.readByCategories);

// route qui ajoute/supprime un like à une video
router.put("/videos/:id/like/:user", videoControllers.likeVideo);

// route qui vérifie si un utilisateur a liké une vidéo
router.get("/videos/:id/like/:user", videoControllers.isLikedByUser);

// route qui recupere les informations des videos selon l'id user
router.get("/videos/posted/:id", videoControllers.readByUserId);

router.get("/categories", videoControllers.allCategories);
router.get("/special/:category", videoControllers.readSpecificCategories);

// route pour la fonctionnalité de recherche
router.get("/search", videoControllers.searchTitle);

// route pour l'affichage de miniature aleatoire
router.get("/countVideos", videoControllers.countVideo);

/* ******************************************************************************************* */

// Authentication wall that allows to protect all routes after that
router.use(verifyToken);

router.put("/users", userControllers.modify);
router.put("/videos", videoControllers.ModifyVideo);

// route qui ajoute une nouvelle video
router.post("/videos", videoControllers.uploadVideo);

// route qui supprime une video
router.delete("/videos/deleteVideo", videoControllers.videoDelete);

// route qui supprime un user
router.delete("/users/deleteUser", userControllers.userDelete);

// Routes to get user informations or add a new user
router.get("/users/:id", userControllers.read);
router.get("/logout", authControllers.logout);

/* ************************************************************************* */

module.exports = router;
