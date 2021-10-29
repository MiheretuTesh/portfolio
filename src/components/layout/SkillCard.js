import React from "react";
import './SkillCard.css';

function SkillCard() {
  return (
    <div>
      <div class="skill-card">
        <header class="skill-card__header">
          <img
            class="skill-card__icon"
            src="https://upload.wikimedia.org/wikipedia/commons/3/38/HTML5_Badge.svg"
            alt="HTML5 Logo"
          />
        </header>
        <section class="skill-card__body">
          <h2 class="skill-card__title">html</h2>
          <span class="skill-card__duration">6 ans d'expérience</span>
          <ul class="skill-card__knowledge">
            <li>HTML5</li>
            <li>Sémantique</li>
            <li>SVG</li>
            <li>Canvas</li>
          </ul>
        </section>
      </div>
    </div>
  );
}

export default SkillCard;
