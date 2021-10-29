import React from "react";
import PropTypes from "prop-types";

const HeroText = ({ text, color, fontsize, fontbold, width, padding }) => {
  const style = {
    color: `${color}`,
    fontSize: fontsize,
    fontBold: fontbold,
    width: width,
    padding: padding,
  };
  return <h1 style={style}>{text}</h1>;
};

HeroText.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  fontsize: PropTypes.number.isRequired,
  fontbold: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  padding: PropTypes.number.isRequired,
};

export default HeroText;
