import styles from "./NavMobile.module.css";
import {useNavigate} from "react-router-dom";
import { useInfosContext } from "../../UserContext";

export default function NavMobile() {
  const { userData } = useInfosContext();
  const navigate = useNavigate();
  const { logout } = useInfosContext();

  const handleLogout = () => {
    logout();
    navigate("/connexion");
    console.log("coucou")
  };
  const icon = [
    {
      src: "/home.svg",
      alt: "home logo",
      id: 1,
      path: "/",
    },
    {
      src: "/search.svg",
      alt: "search logo",
      id: 2,
      path: "/search",
    },
    {
      src: "/circle.svg",
      alt: "add circle logo",
      id: 3,
      path: "/upload",
    },
    // {
    //   src: "/logout.svg",
    //   alt: "favorite logo",
    //   id: 4,
    //   path: "/user",
    // },
    // {
    //   src: "/account.svg",
    //   alt: "profile logo",
    //   id: 5,
    //   path: "/user",
    // },
  ];

  return (
    <nav className={styles.navmobile}>
      {icon.map((element) => (
        <a href={element.path} className={styles.aLink} key={element.id}>
          <img
            src={element.src}
            alt={element.alt}
            className={styles.icon}
            id={element.id}
          />
        </a>
      ))}
       <input
        className={styles.logoutMobil}
        type="image"
        src="/logout.svg"
        alt="avatarVoiture"
        onClick={handleLogout}
      />
       {userData !== null && userData.pseudo !== undefined ? (
        <input
          className={styles.imgProfilMobil}
          type="image"
          src={`/${userData.avatar}`}
          alt="avatarVoiture"
          onClick={() => {
            navigate("/user");
          }}
        />
      ) : (
        <input
        className={styles.imgProfilMobil}
        type="image"
        src={`/account.svg`}
        alt="avatarVoiture"
        onClick={() => {
          navigate("/connexion");
        }}
      />
      )}
    </nav>
  );
}
