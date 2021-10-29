import React from "react";
import PropTypes from "prop-types";

const HeroText = ({ text, color, fontsize, fontbold, width }) => {
  const style = {
    color: `${color}`,
    fontSize: fontsize,
    fontbold: fontbold,
    width: width,
  };
  return <h1 style={style}>{text}</h1>;
};

HeroText.propTypes = {
  text: PropTypes.string.isRequired,
  fontsize: PropTypes.number.isRequired,
  fontbold: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
};

export default HeroText;
