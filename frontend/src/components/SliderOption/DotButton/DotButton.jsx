import React from "react";
import PropTypes from "prop-types";

export default function DotButton({ className, onClick }) {
  return (
    <div>
      <button
        type="button"
        id="test"
        className={className}
        onClick={onClick}
        htmlFor="test"
        aria-label="dot buttons"
      />
    </div>
  );
}

DotButton.propTypes = {
  className: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
