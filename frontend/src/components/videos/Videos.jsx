import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import styles from "./Videos.module.css";

function Videos({ videoInfo }) {
  const [likes, setLikes] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const [blackAndWhite, setBlackAndWhite] = useState(null);

  // This useEffect allows to set thumb image in greyscale if video is not liked yet by this user
  useEffect(() => {
    setBlackAndWhite(isLiked === false ? "grayscale(100%)" : null);
  }, [isLiked]);

  const handleLike = async () => {
    await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/videos/4/like/1`, {
      method: "PUT",
    });
    const videoCall = await fetch(
      `${import.meta.env.VITE_BACKEND_URL}/api/videos/4`
    );
    const videoResult = await videoCall.json();
    setLikes(videoResult.nbr_like);

    // Ask to BDD if user has like yet this video and store the information in "isLiked" state
    const videoIsLiked = await fetch(
      `${import.meta.env.VITE_BACKEND_URL}/api/videos/4/like/1`
    );
    const videoIsLikedJson = await videoIsLiked.json();
    setIsLiked(videoIsLikedJson);
  };

  return (
    <div id={styles.videoContainer}>
      <video id={styles.video} controls src={videoInfo.link}>
        <track default kind="captions" src="/quenouilles.fr.vtt" />
      </video>
      <div id={styles.informations}>
        <h2 id={styles.informations__title}>{videoInfo.title}</h2>
        <div id={styles.informations__owner}>
          <img src="/profil.png" alt="" />
          <h3>{videoInfo.pseudo}</h3>
        </div>
        <div id={styles.informations__likes}>
          <p>vues : {videoInfo.nb_view}</p>
          <button
            type="button"
            id={styles.informations__likes__button}
            onClick={handleLike}
          >
            <img
              style={{ filter: blackAndWhite }}
              alt="pouce en l'air"
              src="/pouce.png"
            />
          </button>
          <p>{likes !== 0 ? likes : videoInfo.nbr_like}</p>
        </div>
        <p id={styles.informations__description}>{videoInfo.description}</p>
      </div>
    </div>
  );
}

Videos.propTypes = {
  videoInfo: PropTypes.shape({
    link: PropTypes.string,
    title: PropTypes.string,
    pseudo: PropTypes.string,
    nb_view: PropTypes.number,
    nbr_like: PropTypes.number,
    description: PropTypes.string,
  }).isRequired,
};

export default Videos;
