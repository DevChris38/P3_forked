import { useEffect, useState, useMemo } from "react";
import { initializeApp } from "firebase/app";
import {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL,
  getMetadata,
} from "firebase/storage";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import CircularProgress from "@mui/material/CircularProgress";
import Navbar from "../../layout/navbar/Navbar";
import NavMobile from "../../layout/NavMobile/NavMobile";
import styles from "./uploadVideo.module.css";
import arrayCategories from "./arrayCategories";
import { useInfosContext } from "../../UserContext";

function UploadVideo() {
  // données sur notre compte Firebase
  const [firebaseConfig] = useState({
    apiKey: import.meta.env.VITE_API_KEY,
    authDomain: import.meta.env.VITE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_APP_ID,
  });

  const { userData } = useInfosContext();

  // initialisation de l'objet qui sera envoyé à la BDD
  const [video, setVideo] = useState({
    name: "",
    description: "",
    videoUrl: "",
    miniatureUrl: "",
    categories: [],
    weight: 0,
    userId: userData.id,
  });
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [videoFile, setVideoFile] = useState();
  const [miniatureFile, setMiniatureFile] = useState();
  const [submission, setSubmission] = useState(false);

  // Fonction qui sera appelée par le useEffect pour poster les données dans la BDD
  const postDataVideo = async () => {
    await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/videos/upload`, {
      method: "POST",
      body: JSON.stringify({ video }),
      headers: { "Content-Type": "application/json" },
    });
  };

  useEffect(() => {
    if (video.videoUrl !== "" && video.miniatureUrl !== "") {
      postDataVideo();
      setTimeout(() => {
        window.location.reload();
      }, "2000");
    }
  }, [video.miniatureUrl]);

  // Mémoïsation du composant vidéo qui permet de ne pas recharger la vidéo à chaque rerender du composant UploadVideo
  const videoUploaded = useMemo(() => {
    return (
      videoFile && (
        <video src={URL.createObjectURL(videoFile)} controls>
          <track
            default
            kind="captions"
            src="../../assets/quenouilles.fr.vtt"
          />
        </video>
      )
    );
  }, [videoFile]);

  // Initialisation de Firebase
  const app = initializeApp(firebaseConfig);

  // Initialisation du stockage dans le cloud et obtient la référence du service
  const storage = getStorage(app);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmission(true);
    const typeVideo = videoFile.type.split("/");

    // Crée la référence pour le stockage de la vidéo et de la miniature
    const newVideoRef = ref(storage, `/videos/${video.name}.${typeVideo[1]}`);
    const typeMiniature = miniatureFile.type.split("/");
    const newMiniatureRef = ref(
      storage,
      `/miniatures/${video.name}.${typeMiniature[1]}`
    );

    try {
      // upload la vidéo et la miniature dans firebase
      await uploadBytes(newVideoRef, videoFile);
      await uploadBytes(newMiniatureRef, miniatureFile);
    } catch (error) {
      console.error(error);
    }
    // Récupère l'url de la vidéo et de la miniature et les métadonnées
    const urlvideo = await getDownloadURL(newVideoRef);
    const urlminiature = await getDownloadURL(newMiniatureRef);
    const metadataVideo = await getMetadata(newVideoRef);
    setVideo({
      ...video,
      videoUrl: urlvideo,
      miniatureUrl: urlminiature,
      weight: metadataVideo.size,
    });
  };

  const handleChangeVideo = (event) => {
    const file = event.target.files[0];
    setVideoFile(file);
  };

  const handleChangeMiniature = (event) => {
    const file = event.target.files[0];
    setMiniatureFile(file);
  };

  const chargement = video.miniatureUrl ? (
    <p className={styles.afterSubmit}>vidéo envoyée</p>
  ) : (
    <div className={styles.afterSubmit}>
      <CircularProgress />
      <p>Vidéo en cours d'envoi</p>
    </div>
  );

  return (
    <div>
      <Navbar />
      <div className={styles.uploadVideoContainer}>
        {submission === false ? (
          <form className={styles.uploadVideoContainer__form}>
            <div className={styles.uploadVideoContainer__form__divUploadVideo}>
              {videoFile ? (
                videoUploaded
              ) : (
                <label
                  className={styles.uploadVideoContainer__form__uploadVideo}
                  htmlFor="uploadFile"
                >
                  Choisissez une vidéo
                </label>
              )}
              <input
                className={styles.uploadVideoContainer__form__uploadVideo}
                type="file"
                name="video[file]"
                onChange={handleChangeVideo}
              />
            </div>
            <div
              className={styles.uploadVideoContainer__form__divUploadMiniature}
            >
              {miniatureFile ? (
                <img
                  alt="your thumbnail"
                  src={URL.createObjectURL(miniatureFile)}
                />
              ) : (
                <label
                  className={styles.uploadVideoContainer__form__uploadMiniature}
                  htmlFor="miniature"
                >
                  Choisissez une miniature
                </label>
              )}
              <input
                className={styles.uploadVideoContainer__form__uploadMiniature}
                type="file"
                name="video[miniature]"
                onChange={handleChangeMiniature}
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
                value={name}
                onChange={(e) => {
                  setVideo({ ...video, name: e.target.value });
                  setName(e.target.value);
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
                value={description}
                onChange={(e) => {
                  setVideo({ ...video, description: e.target.value });
                  setDescription(e.target.value);
                }}
              />
              <Autocomplete
                className={styles.uploadVideoContainer__form__inputCategory}
                disablePortal
                multiple
                options={arrayCategories}
                defaultValue={[arrayCategories[13]]}
                sx={{
                  width: 300,

                  "& + .MuiAutocomplete-popper .MuiAutocomplete-option": {
                    backgroundColor: "#20212f",
                  },
                  "& + .MuiAutocomplete-popper .MuiAutocomplete-option[aria-selected='true']":
                    {
                      backgroundColor: "#20212f",
                    },
                  "& + .MuiAutocomplete-popper .MuiAutocomplete-option[aria-selected ='true'] .Mui-focused":
                    {
                      backgroundColor: "#20212f",
                    },
                }}
                renderInput={(params) => (
                  <TextField
                    className={styles.uploadVideoContainer__form__inputCategory}
                    // la règle d'exception suivante a été autorisé par Matthieu
                    // eslint-disable-next-line react/jsx-props-no-spreading
                    {...params}
                    label="Categorie"
                  />
                )}
                onChange={(e, newValue) => {
                  setVideo({ ...video, categories: newValue });
                }}
              />

              <button type="submit" onClick={handleSubmit}>
                Valider
              </button>
            </div>
          </form>
        ) : (
          chargement
        )}
      </div>
      <NavMobile />
    </div>
  );
}

export default UploadVideo;
