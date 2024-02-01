import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import Donnees from "./DonneesFormulaire";
import styles from "./connexion.module.css";
import { useInfosContext } from "../../UserContext";

import "react-toastify/dist/ReactToastify.css";

function Connexion() {
  const { login } = useInfosContext();

  const donnees = Donnees();
  const navigate = useNavigate();
  const notifyErreur = () =>
    toast("Une erreur est survenue", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Appel à l'API pour créer un nouvel utilisateur
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/api/login`,
        {
          method: "post",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            mail: donnees.email,
            password: donnees.password,
          }),
        }
      );

      if (response.status === 200) {
        const auth = await response.json();
        login(auth.user);
        navigate("/");
        // recuperation des informations pour renvoyer à la page connexion, ou dans l'affichage du site, ou dans un contexte.
      } else {
        // Log des détails de la réponse en cas d'échec
        console.info(response);
        notifyErreur();
      }
    } catch (err) {
      // Log des erreurs possibles
      console.error(err);
    }
  };
  const ranges = [
    {
      value: "email",
      state: donnees.email,
      text: "Email",
      function: donnees.handleChangeEmail,
      small: donnees.falseEmail,
    },
    {
      value: "password",
      state: donnees.password,
      text: "Mot de passe",
      function: donnees.handleChangePassword,
      small: donnees.falsePassword,
    },
  ];

  const handleClick = () => {
    navigate("/inscription");
  };

  return (
    <div className={styles.inscription}>
      <div className={styles.inscription__mainElement}>
        <img
          className={styles.inscription__mainElement__desktopImg}
          src="/image-login.jpg"
          alt=""
        />
        <img
          className={styles.inscription__mainElement__mobileImg}
          src="/logop3.svg"
          alt=""
        />
        <div className={styles.inscription__mainElement__formConteneur}>
          <h1 className={styles.inscription__mainElement__formConteneur__title}>
            Connectez-vous
          </h1>
          <form
            action=""
            method="post"
            className={
              styles.inscription__mainElement__formConteneur__formulaire
            }
          >
            {ranges.map((e) => (
              <div
                key={e.value}
                className={
                  styles.inscription__mainElement__formConteneur__formulaire__range
                }
              >
                <label htmlFor={e.value}>{e.text}</label>
                <input
                  type={
                    e.value === "password" || e.value === "confirmePassword"
                      ? "password"
                      : "text"
                  }
                  name={e.value}
                  id={e.value}
                  value={e.state}
                  onChange={e.function}
                  required
                  autoComplete="current-password"
                />
                {e.small}
              </div>
            ))}
            <button
              type="submit"
              onClick={handleSubmit}
              className={
                styles.inscription__mainElement__formConteneur__formulaire__button
              }
              disabled={
                ranges[0].state === "" ||
                ranges[1].state === "" ||
                ranges[0].small !== "" ||
                ranges[1].small !== ""
              }
            >
              Connexion
            </button>
            <p
              className={
                styles.inscription__mainElement__formConteneur__formulaire__paragraphe
              }
            >
              Ou
            </p>
            <button
              type="button"
              onClick={handleClick}
              className={
                styles.inscription__mainElement__formConteneur__formulaire__button
              }
            >
              Inscription
            </button>
          </form>
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
export default Connexion;
