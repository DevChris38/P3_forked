import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import styles from "./avatar.module.css";
import { useInfosContext } from "../../UserContext";

function Avatar() {
  const { userData } = useInfosContext();
  const [modification, setModification] = useState(false);
  const [avatar, setAvatar] = useState(userData.avatar);
  const { login } = useInfosContext();

  const updateAvatar = async () => {
    try {
      // Appel à l'API pour créer un nouvel utilisateur
      await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/users`, {
        method: "put",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstname: userData.firstname,
          lastname: userData.lastname,
          mail: userData.mail,
          pseudo: userData.pseudo,
          avatar,
          id: userData.id,
        }),
      });
      login({
        firstname: userData.firstname,
        lastname: userData.lastname,
        mail: userData.mail,
        pseudo: userData.pseudo,
        avatar,
        id: userData.id,
      });
    } catch (err) {
      // Log des erreurs possibles
      console.error(err);
    }
  };

  useEffect(() => {
    updateAvatar();
  }, [avatar]);

  return (
    <div className={styles.fondAvatar}>
      {modification === false ? (
        <div className={styles.fondAvatar__imageContainer}>
          <img className={styles.fondAvatar__image} src={`/${avatar}`} alt="" />
          <Button
            variant="contained"
            onClick={() => {
              setModification(true);
            }}
          >
            Modifier
          </Button>
        </div>
      ) : (
        <div className={styles.fondAvatar__imageContainer}>
          <h2>Choisissez votre nouvel avatar</h2>
          <input
            type="image"
            src="/avatarAbstrait.jpg"
            onClick={() => {
              setAvatar(() => "avatarAbstrait.jpg");
              setModification((prevState) => !prevState);
            }}
            alt=""
          />
          <input
            type="image"
            src="/avatarOurs.jpg"
            onClick={() => {
              setAvatar(() => "avatarOurs.jpg");
              setModification((prevState) => !prevState);
            }}
            alt=""
          />
          <input
            type="image"
            src="/avatarRobot.jpg"
            onClick={() => {
              setAvatar(() => "avatarRobot.jpg");
              setModification((prevState) => !prevState);
            }}
            alt=""
          />
          <input
            type="image"
            src="/avatarVoiture.jpg"
            onClick={() => {
              setAvatar(() => "avatarVoiture.jpg");
              setModification((prevState) => !prevState);
            }}
            alt=""
          />
        </div>
      )}
    </div>
  );
}

export default Avatar;
