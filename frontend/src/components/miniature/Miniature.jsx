import { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./Miniature.module.css";


export default function Miniature({ idMiniature, carouselClass }) {
  const [miniature, setMiniature] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${
            import.meta.env.VITE_BACKEND_URL
          }/api/videos/miniatures/${idMiniature}`,
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
        setMiniature(data);
      } catch (error) {
        console.error("Error fetching data:", error.message);
        // Handle the error here, e.g., set a default value or display an error message
      }
    };
    fetchData();
  }, []);
  const imgClass = `${carouselClass}img`;
  const titleClass = `${carouselClass}p`;

  return (
    <div className={styles[carouselClass]}>
      <img className={styles[imgClass]} src={miniature.image} alt="" />
      <p className={styles[titleClass]}>{miniature.title}</p>
    </div>
  );
}
Miniature.propTypes = {
  idMiniature: PropTypes.number.isRequired,
  carouselClass: PropTypes.string.isRequired,
};
