import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../../layout/navbar/Navbar";
import NavMobile from "../../layout/NavMobile/NavMobile";
import styles from "./uploadVideo.module.css";

function UploadVideo() {
  const params = useParams();
  const navigate = useNavigate();
  const [videoInfo, setVideoInfo] = useState({
    title: "",
    description: "",
    videoUrl: "",
    miniatureUrl: "",
    categories: [],
    weight: 0,
    videoId: params.id,
  });

  useEffect(() => {
    (async () => {
      const videoCall = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/api/videos/${params.id}`,
        {
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const videoResult = await videoCall.json();
      setVideoInfo(videoResult);
    })();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/videos`, {
      method: "PUT",
      body: JSON.stringify({
        title: videoInfo.title,
        description: videoInfo.description,
        userId: videoInfo.user_Id,
        videoId: params.id,
      }),
      headers: { "Content-Type": "application/json" },
    }).then(() => navigate(`/video/${params.id}`));
  };

  return (
    <div>
      <Navbar />
      <div className={styles.uploadVideoContainer}>
        <form className={styles.uploadVideoContainer__form}>
          <div className={styles.uploadVideoContainer__form__divUploadVideo}>
            <video src={videoInfo.link} controls>
              <track default kind="captions" src="/quenouilles.fr.vtt" />
            </video>
            <input
              disabled
              className={styles.uploadVideoContainer__form__uploadVideo}
              type="file"
              name="video[file]"
            />
          </div>
          <div
            className={styles.uploadVideoContainer__form__divUploadMiniature}
          >
            <img alt="your thumbnail" src={videoInfo.image} />
            <input
              disabled
              className={styles.uploadVideoContainer__form__uploadMiniature}
              type="file"
              name="video[miniature]"
            />{" "}
          </div>
          <div className={styles.uploadVideoContainer__form__divInformations}>
            <label
              className={styles.uploadVideoContainer__form__name}
              htmlFor="name"
            >
              Quel est le nom de votre vidéo ?
            </label>
            <input
              className={styles.uploadVideoContainer__form__inputName}
              type="text"
              maxLength={100}
              value={videoInfo.title}
              onChange={(e) => {
                setVideoInfo({ ...videoInfo, title: e.target.value });
              }}
            />
            <label
              className={styles.uploadVideoContainer__form__description}
              htmlFor="description"
            >
              Description
            </label>
            <input
              className={styles.uploadVideoContainer__form__inputDescription}
              type="text"
              maxLength={255}
              name="video[description]"
              value={videoInfo.description}
              onChange={(e) => {
                setVideoInfo({ ...videoInfo, description: e.target.value });
              }}
            />

            <button type="submit" onClick={(e) => handleSubmit(e)}>
              Valider
            </button>
          </div>
        </form>
      </div>
      <NavMobile />
    </div>
  );
}

export default UploadVideo;
