import React, { useState, useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import useEmblaCarousel from "embla-carousel-react";
import Miniature from "../miniature/Miniature";
import styles from "./Carrousel.module.css";
import PrevButton from "../SliderOption/PrevButton/PrevButton";
import NextButton from "../SliderOption/NextButton/NextButton";

export default function Carrousel({ title, tableId }) {
  const OPTIONS = {
    slidesToScroll: "auto",
    containScroll: "trimSnaps",
    dragFree: true,
  };
  const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS);
  // tabl img will goes replace with an table id will passed trhough link for call bdd
  // const tableId = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
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
            ? tableId.map((element, index) => (
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
