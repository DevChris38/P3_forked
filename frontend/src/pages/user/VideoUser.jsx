import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import styles from "./videoUser.module.css";
import deleteIcon from "../../assets/deleteIcon.svg";
import editIcon from "../../assets/editIcon.svg";

function VideoUser({ id, notifyError, notifySuccessDeleteVideo }) {
  const [videoUser, setVideoUser] = useState([]);
  const navigate = useNavigate();
  const userId = id;
  useEffect(() => {
    (async () => {
      const videoCall = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/api/videos/posted/${userId}`,
        {
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const videoResult = await videoCall.json();
      setVideoUser(videoResult);
    })();
  }, [userId]);

  const handleClickDelete = async (idVideo) => {
    const videoDelete = await fetch(
      `${import.meta.env.VITE_BACKEND_URL}/api/videos/deleteVideo`,
      {
        method: "DELETE",
        body: JSON.stringify({
          userId,
          videoId: idVideo,
        }),
        headers: { "Content-Type": "application/json" },
      }
    );
    if (videoDelete.status === 200) {
      notifySuccessDeleteVideo();
    } else {
      notifyError();
    }
  };

  const handleClickEdit = (idModifyVideo) => {
    navigate("/upload", { state: { id: idModifyVideo } });
  };

  return (
    <div className={styles.videoUserComponent}>
      <h2 id={styles.componentTitle}>Mes Videos</h2>
      {videoUser.map((e) => (
        <div key={e.id} className={styles.videoUserComponent__oneVideo}>
          <img src={e.image} alt="" id={styles.miniature} />
          <div className={styles.videoUserComponent__oneVideo__videoInfo}>
            <div
              className={
                styles.videoUserComponent__oneVideo__videoInfo__titleAndButton
              }
            >
              <h3 id="videoTitle">{e.title}</h3>
              <div
                className={
                  styles.videoUserComponent__oneVideo__videoInfo__titleAndButton__buttons
                }
              >
                <input
                  className={
                    styles.videoUserComponent__oneVideo__videoInfo__titleAndButton__buttons__singleButton
                  }
                  type="image"
                  src={editIcon}
                  alt="modifier la video"
                  onClick={() => handleClickEdit(e.id)}
                />
                <input
                  className={
                    styles.videoUserComponent__oneVideo__videoInfo__titleAndButton__buttons__singleButton
                  }
                  onClick={() => handleClickDelete(e.id)}
                  type="image"
                  src={deleteIcon}
                  alt="supprimer la video"
                />
              </div>
            </div>
            <p>{e.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default VideoUser;

VideoUser.propTypes = {
  id: PropTypes.number.isRequired,
  notifyError: PropTypes.func.isRequired,
  notifySuccessDeleteVideo: PropTypes.func.isRequired,
};
