const tables = require("../tables");

const read = async (req, res, next) => {
  try {
    const video = await tables.video.read(req.params.id);
    if (video == null) {
      res.sendStatus(404);
    } else {
      res.json(video);
    }
  } catch (err) {
    next(err);
  }
};

const readImageById = async (req, res, next) => {
  try {
    const videos = await tables.video.readImageById(req.params.id);
    if (videos == null) {
      res.sendStatus(404);
    } else {
      res.json(videos);
    }
  } catch (err) {
    next(err);
  }
};

const readByCategories = async (req, res, next) => {
  try {
    const { category } = req.query;
    let { limit } = req.query;
    if (limit != null) {
      limit = parseInt(limit, 10);
    }
    const miniature = await tables.video.readByCategories(category, limit);
    res.json(miniature);
  } catch (err) {
    next(err);
  }
};

const likeVideo = async (req, res, next) => {
  try {
    const id = parseInt(req.params.id, 10);
    const user = parseInt(req.params.user, 10);
    await tables.video.likeVideo(id, user);
    res.send("Like value updated");
  } catch (err) {
    console.error(err);
    next(err);
    res.sendStatus(500);
  }
};

const isLikedByUser = async (req, res, next) => {
  try {
    const id = parseInt(req.params.id, 10);
    const user = parseInt(req.params.user, 10);
    const isLiked = await tables.video.isLikedByUser(id, user);
    res.status(200).json(isLiked);
  } catch (err) {
    console.error(err);
    next(err);
    res.sendStatus(500);
  }
};
const ModifyVideo = async (req, res, next) => {
  try {
    const video = req.body;
    await tables.video.updateVideo(video);
    res.status(200).send("video was updated");
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
    next(err);
  }
};

const videoDelete = async (req, res, next) => {
  const { videoId } = req.body;
  const { userId } = req.body;
  try {
    const videoExist = await tables.video.readVideoById(videoId);
    if (videoExist === false) {
      res.status(404).send("video doesn't exist");
    } else {
      await tables.video.deleteVideo(videoId, userId);
      res.status(200).send("videos was delete");
    }
  } catch (err) {
    res.status(500).send(err.message);
    next(err);
  }
};

const uploadVideo = async (req, res, next) => {
  try {
    const video = await tables.video.uploadVideo(req.body.video);
    if (video === null) {
      res.sendStatus(404);
    } else {
      console.error(video);
      res.json(video);
    }
  } catch (err) {
    next(err);
  }
};

const readByUserId = async (req, res, next) => {
  try {
    const videos = await tables.video.readByUserId(req.params.id);
    if (videos === null) {
      res.sendStatus(404);
    } else {
      res.json(videos);
    }
  } catch (err) {
    next(err);
  }
};

const OrderById = async (req, res, next) => {
  try {
    const videos = await tables.video.OrderById();
    if (videos === null) {
      res.sendStatus(404);
    } else {
      res.json(videos);
    }
  } catch (err) {
    next(err);
  }
};

const OrderByView = async (req, res, next) => {
  try {
    const videos = await tables.video.OrderByView();
    if (videos === null) {
      res.sendStatus(404);
    } else {
      res.json(videos);
    }
  } catch (err) {
    next(err);
  }
};

const allCategories = async (req, res, next) => {
  try {
    const videoCategories = await tables.video.readAllCategories();
    res.status(200).send(videoCategories);
  } catch (err) {
    res.status(500).send(err.message);
    next(err);
  }
};
const readSpecificCategories = async (req, res) => {
  try {
    const { name } = req.query;
    const { category } = req.params;
    const videoCategories = await tables.video.readSpecificCategories(
      category,
      name
    );
    res.status(200).send(videoCategories);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const mostLiked = async (req, res, next) => {
  try {
    const videos = await tables.video.mostLiked();
    if (videos === null) {
      res.sendStatus(404);
    } else {
      res.json(videos);
    }
  } catch (err) {
    res.sendStatus(500);
    next(err);
  }
};

const CategoryMostLiked = async (req, res, next) => {
  const { categoryName } = req.params;
  try {
    const videos = await tables.video.categoryMostLiked(categoryName);
    if (videos === null) {
      res.sendStatus(404);
    } else {
      res.json(videos);
    }
  } catch (err) {
    res.sendStatus(500);
    next(err);
  }
};

const categoryMostView = async (req, res, next) => {
  const { categoryName } = req.params;
  try {
    const videos = await tables.video.OrderByIdCategory(categoryName);
    if (videos === null) {
      res.sendStatus(404);
    } else {
      res.json(videos);
    }
  } catch (err) {
    res.sendStatus(500);
    next(err);
  }
};

const searchTitle = async (req, res, next) => {
  const { searchRequest } = req.query;
  try {
    const video = await tables.video.searchTitle(searchRequest);
    if (video == null) {
      res.sendStatus(404);
    } else {
      res.json(video);
    }
  } catch (err) {
    next(err);
  }
};

const countVideo = async (req, res, next) => {
  try {
    const video = await tables.video.countVideo();
    if (video == null) {
      res.sendStatus(404);
    } else {
      res.json(video);
    }
  } catch (err) {
    next(err);
  }
};

module.exports = {
  read,
  readImageById,
  readByCategories,
  likeVideo,
  isLikedByUser,
  videoDelete,
  ModifyVideo,
  uploadVideo,
  readByUserId,
  OrderById,
  OrderByView,
  allCategories,
  readSpecificCategories,
  mostLiked,
  CategoryMostLiked,
  categoryMostView,
  searchTitle,
  countVideo,
};
