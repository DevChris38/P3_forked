import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Miniature from "../miniature/Miniature";
import styles from "./ScrollingMiniatures.module.css";

function ScrollingMiniatures() {
  const [display, setDisplay] = useState("");

  useEffect(() => {
    (async () => {
      const videoCall = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/api/countVideos`,
        {
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const videoResult = await videoCall.json();
      setDisplay(videoResult);
    })();
  }, []);
  if (display !== "") {
    return (
      <div id={styles.scrollingMiniatures}>
        {display.map((number) => {
          return (
            <div id={styles.scrollingMiniatures__miniature} key={number.id}>
              <Link
                to={{
                  pathname: `/video/${number.id}`,
                  state: { number },
                }}
              >
                <Miniature
                  idMiniature={number.id}
                  key={number.id}
                  carouselClass="videoSlider"
                />
              </Link>
            </div>
          );
        })}
      </div>
    );
  }
}

export default ScrollingMiniatures;
