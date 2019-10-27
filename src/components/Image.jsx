import React from "react";
import NoImage from "../assets/not-found-image.jpg";
import PropTypes from "prop-types";

const propTypes = {
  alt: PropTypes.string,
  className: PropTypes.string,
  src: PropTypes.string.isRequired
};

const defaultProps = {
  alt: "",
  className: ""
};

const Image = props => {
  const { alt, className, src } = props;
  const addDefault = e => (e.target.src = NoImage);

  return (
    <img
      className={className ? className : null}
      onError={addDefault}
      src={src}
      alt={alt}
    />
  );
};

Image.propTypes = propTypes;
Image.defaultProps = defaultProps;

export default Image;
