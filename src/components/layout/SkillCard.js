import React from "react";
import "./SkillCard.css";
import PropTypes from "prop-types";

function SkillCard({ imageScr, title, subtitle, additional }) {
  return (
    <div class="skill-card">
      <header class="skill-card__header">
        <img class="skill-card__icon" src={imageScr} alt="HTML5 Logo" />
      </header>
      <section class="skill-card__body">
        <h2 class="skill-card__title">{title}</h2>
        <span class="skill-card__duration">{subtitle}</span>
        <ul class="skill-card__knowledge">
          {additional.map((map)=><li>{map}</li>)}
        </ul>
      </section>
    </div>
  );
}

SkillCard.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  additional: PropTypes.array,
};

export default SkillCard;
