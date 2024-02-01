import React from "react";
import PropTypes from "prop-types";
import styles from "./NextButton.module.css";

export default function NextButton({ disabled, onClick, buttonClass }) {
  return (
    <button
      className={styles.embla__button__next}
      type="button"
      onClick={onClick}
      key="1"
      disabled={disabled}
      aria-label="next buttons"
    >
      <svg className={styles[buttonClass]} viewBox="0 0 532 532">
        <path
          fill="currentColor"
          d="M176.34 520.646c-13.793 13.805-36.208 13.805-50.001 0-13.785-13.804-13.785-36.238 0-50.034L330.78 266 126.34 61.391c-13.785-13.805-13.785-36.239 0-50.044 13.793-13.796 36.208-13.796 50.002 0 22.928 22.947 206.395 206.507 229.332 229.454a35.065 35.065 0 0 1 10.326 25.126c0 9.2-3.393 18.26-10.326 25.2-45.865 45.901-206.404 206.564-229.332 229.52Z"
        />
      </svg>
    </button>
  );
}

NextButton.propTypes = {
  disabled: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  buttonClass: PropTypes.string.isRequired,
};
