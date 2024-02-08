import styles from "./NavMobile.module.css";

export default function NavMobile() {
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
    {
      src: "/favorite.svg",
      alt: "favorite logo",
      id: 4,
      path: "/user",
    },
    {
      src: "/account.svg",
      alt: "profile logo",
      id: 5,
      path: "/user",
    },
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
    </nav>
  );
}
