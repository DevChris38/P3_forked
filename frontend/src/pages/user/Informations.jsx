import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import styles from "./informations.module.css";
import Donnees from "../inscription/DonneesFormulaire";
import "react-toastify/dist/ReactToastify.css";

function Informations({ id, avatar }) {
  const donnees = Donnees();
  const navigate = useNavigate();
  const [userInformation, setUserInformation] = useState(false);
  const informationsUser = [
    {
      name: "firstname",
      titre: "Prénom",
      placeHolder: donnees.firstname,
      type: "text",
      value: donnees.firstname,
      function: donnees.handleChangeFirstname,
      small: donnees.falseFirstname,
    },
    {
      name: "lastname",
      titre: "Nom de famille",
      placeHolder: donnees.lastname,
      type: "text",
      value: donnees.lastname,
      function: donnees.handleChangeLastname,
      small: donnees.falseLastname,
    },
    {
      name: "mail",
      titre: "Email",
      placeHolder: donnees.email,
      type: "email",
      value: donnees.email,
      function: donnees.handleChangeEmail,
      small: donnees.falseEmail,
    },
    {
      name: "pseudo",
      titre: "Pseudo",
      placeHolder: donnees.pseudo,
      type: "text",
      value: donnees.pseudo,
      function: donnees.handleChangePseudo,
      small: donnees.falsePseudo,
    },
  ];

  const notifyErreur = () => toast("Une erreur est survenue");
  const notifySuccess = () => toast("La modification a été faite");
  useEffect(() => {
    (async () => {
      const userCall = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/api/users/${id}`,
        {
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const userResult = await userCall.json();
      donnees.setFirstname(userResult.firstname);
      donnees.setLastname(userResult.lastname);
      donnees.setEmail(userResult.mail);
      donnees.setPseudo(userResult.pseudo);
    })();
  }, [userInformation]);

  const handleClickDeleteUser = async () => {
    try {
      // Appel à l'API pour créer un nouvel utilisateur
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/api/users/deleteUser`,
        {
          method: "delete",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            userId: id,
          }),
        }
      );

      if (response.status === 201) {
        navigate("/connexion");
      } else {
        notifyErreur();
      }
    } catch (err) {
      // Log des erreurs possibles
      console.error(err);
    }
  };
  const handleClickModifyUser = async () => {
    try {
      // Appel à l'API pour créer un nouvel utilisateur
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/api/users`,
        {
          method: "put",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            userId: id,
            firstname: donnees.firstname,
            lastname: donnees.lastname,
            mail: donnees.email,
            pseudo: donnees.pseudo,
            avatar,
          }),
        }
      );

      if (response.status === 200) {
        setUserInformation(!userInformation);
        notifySuccess();
      } else {
        notifyErreur();
      }
    } catch (err) {
      // Log des erreurs possibles
      console.error(err);
    }
  };

  console.info(userInformation);
  return (
    <div className={styles.informations}>
      {informationsUser.map((element) => (
        <div key={element.name} className={styles.informations__globalRange}>
          <div className={styles.informations__globalRange__title}>
            <label htmlFor={element.name}>{element.titre}</label>
          </div>
          <input
            type={element.type}
            name={element.name}
            placeholder={element.placeHolder}
            className={styles.informations__globalRange__ranges}
            value={element.value}
            onChange={element.function}
          />
          {element.small}
        </div>
      ))}
      <div className={styles.informations__globalRange}>
        <div className={styles.informations__globalRange__title}>
          <label htmlFor="password">Mot de passe</label>
        </div>
        <input
          type="password"
          name="password"
          className={styles.informations__globalRange__ranges}
          placeholder="Mot de passe"
          value={donnees.password}
          onChange={donnees.handleChangePassword}
        />
        {donnees.falsePassword}
        <input
          type="password"
          name="confirmPassword"
          className={styles.informations__globalRange__ranges}
          placeholder="Confirmer mot de passe"
          value={donnees.confirmPassword}
          onChange={donnees.handleChangeConfirmPassword}
        />
        {donnees.falseConfirmPassword}
        <div className={styles.informations__globalRange__bothButton}>
          <button
            type="submit"
            className={styles.informations__globalRange__bothButton__button}
            onClick={handleClickModifyUser}
          >
            Modifier
          </button>
          <button
            type="button"
            className={styles.informations__globalRange__bothButton__button}
            id={styles.deletAccountButton}
            onClick={handleClickDeleteUser}
          >
            Supprimer mon compte
          </button>
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
}

export default Informations;

Informations.propTypes = {
  id: PropTypes.number.isRequired,
  avatar: PropTypes.string.isRequired,
};
