import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Videos from "../components/videos/Videos";
import ScrollingMiniatures from "../components/scrollingMiniature/ScrollingMiniatures";
import Navbar from "../layout/navbar/Navbar";
import NavMobile from "../layout/NavMobile/NavMobile";
import styles from "./videopage.module.css";

function VideoPage() {
  const [videoInfo, setVideoInfo] = useState({});
  const params = useParams();
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
  }, [params]);

  return (
    <div id={styles.videopage}>
      <Navbar />
      <Videos videoInfo={videoInfo} />
      <ScrollingMiniatures />
      <NavMobile />
    </div>
  );
}

export default VideoPage;
