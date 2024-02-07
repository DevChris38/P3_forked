import React, { useState, useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import useEmblaCarousel from "embla-carousel-react";
import Miniature from "../miniature/Miniature";
import styles from "./Carrousel.module.css";
import PrevButton from "../SliderOption/PrevButton/PrevButton";
import NextButton from "../SliderOption/NextButton/NextButton";

export default function Carrousel({ title, tableId, categorie }) {
  const [miniatureId, setMiniatureId] = useState([]);
  const [idFetch, setIdfetch] = useState("");

  const idView = "/api/videosView";
  const idLasted = "/api/videosId";
  const idLiked = "/api/videoslikes";

  useEffect(() => {
    if (tableId.length > 0) {
      setMiniatureId(tableId);
    }
    if (categorie === "view") {
      setIdfetch(idView);
    } else if (categorie === "last") {
      setIdfetch(idLasted);
    } else if (categorie === "like") {
      setIdfetch(idLiked);
    } else if (categorie === null || undefined) {
      setIdfetch("/api/videosId");
    }
  }, []);

  useEffect(() => {
    if (idFetch !== "") {
      const fetchData = async () => {
        try {
          const response = await fetch(
            `${import.meta.env.VITE_BACKEND_URL}${idFetch}`,
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
          setMiniatureId((prevIdVideos) => {
            let newIdVideos = [...prevIdVideos];
            newIdVideos = data.map((elementId) => elementId.id);
            return newIdVideos;
          });
        } catch (error) {
          console.error("Error fetching data:", error.message);
          // Handle the error here, e.g., set a default value or display an error message
        }
      };
      fetchData();
    }
  }, [idFetch]);
  const OPTIONS = {
    slidesToScroll: "auto",
    containScroll: "trimSnaps",
    dragFree: true,
  };
  const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS);
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );

  const onInit = useCallback((emblaApis) => {
    setScrollSnaps(emblaApis.scrollSnapList());
  }, []);

  const onSelect = useCallback((emblaApis) => {
    setSelectedIndex(emblaApis.selectedScrollSnap());
    setPrevBtnDisabled(!emblaApis.canScrollPrev());
    setNextBtnDisabled(!emblaApis.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onInit(emblaApi);
    onSelect(emblaApi);
    emblaApi.on("reInit", onInit);
    emblaApi.on("reInit", onSelect);
    emblaApi.on("select", onSelect);
  }, [emblaApi, onInit, onSelect]);
  return (
    <div className={styles.carousel__embla}>
      <p className={styles.carousel__embla__title}>{title}</p>
      <div className={styles.carousel__embla__viewport} ref={emblaRef}>
        <div className={styles.carousel__embla__viewport__container}>
          {tableId !== undefined
            ? miniatureId.map((element, index) => (
                <div
                  className={styles.carousel__embla__viewport__container__slide}
                  key={element}
                >
                  <div
                    className={
                      styles.carousel__embla__viewport__container__slide__number
                    }
                  >
                    <span key={element}>{index + 1}</span>
                  </div>
                  <Link
                    to={{
                      pathname: `/video/${element}`,
                    }}
                  >
                    <Miniature
                      className={
                        styles.carousel__embla__viewport__container__slide__img
                      }
                      idMiniature={element}
                      carouselClass="carousel"
                    />
                  </Link>
                </div>
              ))
            : null}
        </div>
        <div className={styles.carousel__embla__viewport__buttons}>
          <PrevButton
            onClick={scrollPrev}
            disabled={prevBtnDisabled}
            // button class will defined className in composant prev and next button
            buttonClass="carousel"
            eslint={scrollSnaps}
          />
          <NextButton
            onClick={scrollNext}
            disabled={nextBtnDisabled}
            buttonClass="carousel"
            eslint={selectedIndex}
          />
        </div>
      </div>
    </div>
  );
}

Carrousel.propTypes = {
  title: PropTypes.string.isRequired,
  tableId: PropTypes.arrayOf(PropTypes.number).isRequired,
};
