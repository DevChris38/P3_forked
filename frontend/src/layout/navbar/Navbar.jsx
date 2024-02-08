import { Link, useNavigate } from "react-router-dom";
import styles from "./Navbar.module.css";
import { useInfosContext } from "../../UserContext";

export default function Navbar() {
  const navigate = useNavigate();
  const { userData } = useInfosContext();
  const { logout } = useInfosContext();

  const handleClickConnexion = () => {
    navigate("/connexion");
  };
  const handleLogout = () => {
    logout();
    navigate("/connexion");
  };

  return (
    <nav>
      <Link to="/" className={styles.navbar}>
        <img className={styles.imgLogo} src="/logop3.svg" alt="" />
      </Link>
      <Link to="/" className={styles.navbar}>
        <h2 className={styles.name}>Short Digital</h2>
      </Link>
      <ul>
        <li>
          {" "}
          <Link to="/" className={styles.navbar}>
            Accueil
          </Link>
        </li>
        <li>
          <Link to="/upload" className={styles.navbar}>
            Ajouter une video
          </Link>
        </li>
        <li>
          <Link to="/search" className={styles.navbar}>
            Rechercher
          </Link>
        </li>
      </ul>
      <button
        type="button"
        className={styles.btnConnection}
        onClick={
          userData !== null && userData.pseudo !== undefined
            ? handleLogout
            : handleClickConnexion
        }
      >
        {userData !== null && userData.pseudo !== undefined
          ? "Se Deconnecter"
          : "Se Connecter"}
      </button>

      {userData !== null && userData.pseudo !== undefined ? (
        <input
          className={styles.imgProfil}
          type="image"
          src={`/${userData.avatar}`}
          alt="avatarVoiture"
          onClick={() => {
            navigate("/user");
          }}
        />
      ) : (
        <img className={styles.imgProfil} src="/account.svg" alt="" />
      )}
    </nav>
  );
}
