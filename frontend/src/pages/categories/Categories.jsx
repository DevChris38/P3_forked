import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import styles from "./Categories.module.css";
import Navbar from "../../layout/navbar/Navbar";
import NavMobile from "../../layout/NavMobile/NavMobile";
import Carrousel from "../../components/carrousel/Carrousel";
import Miniature from "../../components/miniature/Miniature";

export default function Categories() {
  const params = useParams();
  const [idVideo, setIdVideos] = useState([]);
  const tableId = [];
  const [allVideos, setAllVideos] = useState([]);
  const [mostView, setMostView] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // tableId.map(async (element, index) => {
        const response = await fetch(
          `${
            import.meta.env.VITE_BACKEND_URL
          }/api/videosCategoryLikes/${params.category}`,
          {
            credentials: "include",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (!response.ok) {
          throw new Error(`Failed to fetch data: ${response.status}`);
        }
        const data = await response.json();
        //   setIdVideos(data)
        setIdVideos((prevIdVideos) => {
          let newIdVideos = [...prevIdVideos];
          newIdVideos = data.map((elementId) => elementId.test);
          return newIdVideos;
        });
        // });
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // tableId.map(async (element, index) => {
        const response = await fetch(
          `${
            import.meta.env.VITE_BACKEND_URL
          }/api/videosMostViewCategoryLikes/${params.category}`,
          {
            credentials: "include",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (!response.ok) {
          throw new Error(`Failed to fetch data: ${response.status}`);
        }
        const data = await response.json();
        //   setIdVideos(data)
        setMostView((prevIdVideos) => {
          let newIdVideos = [...prevIdVideos];
          newIdVideos = data.map((elementId) => elementId.test);
          return newIdVideos;
        });
        // });
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };

    fetchData();
  }, []);
  useEffect(() => {
    const fetchData2 = async () => {
      try {
        const response = await fetch(
          `${
            import.meta.env.VITE_BACKEND_URL
          }/api/videosSelected?category=${params.category}`,
          {
            credentials: "include",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (!response.ok) {
          throw new Error(`Failed to fetch data: ${response.status}`);
        }

        const data = await response.json();
        setAllVideos(data);
      } catch (error) {
        console.error("Error fetching data:", error.message);
        // Handle the error here, e.g., set a default value or display an error message
      }
    };
    fetchData2();
  }, []);
  console.log(mostView);
  return (
    <>
      <Navbar />
      <div className={styles[params.category]}>
        <div className={styles.mainContainer}>
          {idVideo.length > 0 ? (
            <Carrousel title="Most liked" tableId={idVideo} />
          ) : null}
          {mostView.length > 0 ? (
            <Carrousel title="Most popular" tableId={mostView} />
          ) : null}
          {/* {idVideo.length > 2 ? (
        <Carrousel title="Fonction" tableId={idVideo[2]} />
      ) : null} */}
        </div>
        <h2 className={styles.title}>All videos about {params.category}</h2>
        <div className={styles.miniatureContainer}>
          {allVideos.map((element) => {
            return (
              <div
                className={styles.miniatureContainer__miniature}
                key={element.id}
              >
                <Link
                  to={{
                    pathname: `/video/${element.id}`,
                  }}
                >
                  {" "}
                  {allVideos.length > 0 || allVideos !== undefined ? (
                    <Miniature
                      idMiniature={element.id}
                      carouselClass="carousel"
                    />
                  ) : null}
                </Link>
              </div>
            );
          })}
        </div>
      </div>
      <NavMobile />
    </>
  );
}
