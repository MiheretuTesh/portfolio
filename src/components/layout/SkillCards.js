import React from "react";
import "./SkillCard.css";
import SkillCard from "./SkillCard";
import { Link } from "react-router-dom";
import "./Landing.css";

function SkillCards() {
  return (
    <div className="skillard-section pt-5">
      <h1 className="pb-4">Skills</h1>
      <div className="cards-skill">
        <div class="container pt-5 mt-5">
          <div>
            <h6>Web Technologies</h6>
          </div>
          <div class="row">
            <div class="col-lg-4 col-md-6 col-10 col-sm-10 offset-md-0 offset-sm-2 offset-2 pt-5">
              <SkillCard
                imageScr="https://upload.wikimedia.org/wikipedia/commons/3/38/HTML5_Badge.svg"
                title="HTML/CSS"
                subtitle="HTML 5 and CSS 3 with 3 years of experience"
                additional={[
                  "HTML-5 and CSS-3",
                  "CSS Framing - Bootstarp, TailWind, Semantic UI ...",
                ]}
              />
            </div>
            <div class="col-lg-4 col-md-6 col-10 col-sm-10 offset-md-0 offset-sm-2 offset-2 pt-5">
              <SkillCard
                imageScr="https://upload.wikimedia.org/wikipedia/commons/3/38/HTML5_Badge.svg"
                title="JavaScript"
                subtitle="Vanilla JavaScript, Also React, Nodejs and Vue"
                additional={[
                  "HTML-5 and CSS-3",
                  "CSS Framing - Bootstarp, TailWind, Semantic UI ...",
                ]}
              />
            </div>
            <div class="col-lg-4 col-md-6 col-10 col-sm-10 offset-md-0 offset-sm-2 offset-2 pt-5">
              <SkillCard
                imageScr="https://upload.wikimedia.org/wikipedia/commons/3/38/HTML5_Badge.svg"
                title="React"
                subtitle="Vanilla JavaScript, Also React, Nodejs and Vue"
                additional={[
                  "HTML-5 and CSS-3",
                  "CSS Framing - Bootstarp, TailWind, Semantic UI ...",
                ]}
              />
            </div>
            <div class="col-lg-4 col-md-6 col-10 col-sm-10 offset-md-0 offset-sm-2 offset-2 pt-5">
              <SkillCard
                imageScr="https://upload.wikimedia.org/wikipedia/commons/3/38/HTML5_Badge.svg"
                title="Nodejs"
                subtitle="Vanilla JavaScript, Also React, Nodejs and Vue"
                additional={[
                  "HTML-5 and CSS-3",
                  "CSS Framing - Bootstarp, TailWind, Semantic UI ...",
                ]}
              />
            </div>
            <div class="col-lg-4 col-md-6 col-10 col-sm-10 offset-md-0 offset-sm-2 offset-2 pt-5">
              <SkillCard
                imageScr="https://upload.wikimedia.org/wikipedia/commons/3/38/HTML5_Badge.svg"
                title="Django/Flask"
                subtitle="Vanilla JavaScript, Also React, Nodejs and Vue"
                additional={[
                  "HTML-5 and CSS-3",
                  "CSS Framing - Bootstarp, TailWind, Semantic UI ...",
                ]}
              />
            </div>
          </div>
          <div className="mt-5 pt-5">
            <h6 className="mt-5">Mobile Technologies</h6>
          </div>
          <div class="row">
            <div class="col-lg-4 col-md-6 col-10 col-sm-10 offset-md-0 offset-sm-2 offset-2 pt-5">
              <SkillCard
                imageScr="https://upload.wikimedia.org/wikipedia/commons/3/38/HTML5_Badge.svg"
                title="Java"
                subtitle="Vanilla JavaScript, Also React, Nodejs and Vue"
                additional={[
                  "HTML-5 and CSS-3",
                  "CSS Framing - Bootstarp, TailWind, Semantic UI ...",
                ]}
              />
            </div>
            <div class="col-lg-4 col-md-6 col-10 col-sm-10 offset-md-0 offset-sm-2 offset-2 pt-5">
              <SkillCard
                imageScr="https://upload.wikimedia.org/wikipedia/commons/3/38/HTML5_Badge.svg"
                title="Kotlin"
                subtitle="Vanilla JavaScript, Also React, Nodejs and Vue"
                additional={[
                  "HTML-5 and CSS-3",
                  "CSS Framing - Bootstarp, TailWind, Semantic UI ...",
                ]}
              />
            </div>
            <div class="col-lg-4 col-md-6 col-10 col-sm-10 offset-md-0 offset-sm-2 offset-2 pt-5">
              <SkillCard
                imageScr="https://upload.wikimedia.org/wikipedia/commons/3/38/HTML5_Badge.svg"
                title="Flutter"
                subtitle="Vanilla JavaScript, Also React, Nodejs and Vue"
                additional={[
                  "HTML-5 and CSS-3",
                  "CSS Framing - Bootstarp, TailWind, Semantic UI ...",
                ]}
              />
            </div>
          </div>
        </div>
        {/* <div className="container">
          <div>
            <p className="text-muted">Web</p>
          </div>

          <div className="row">
            <div className="col-sm-6 col-md-4 col-8 pt-3">
              <SkillCard />
            </div>
            <div className="col-sm-6 col-md-4 col-8 pt-3">
              <SkillCard />
            </div>
            <div className="col-sm-6 col-md-4 col-8 pt-3">
              <SkillCard />
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6 col-md-4 col-8 pt-3">
              <SkillCard />
            </div>
            <div className="col-sm-6 col-md-4 col-8 pt-3">
              <SkillCard />
            </div>
            <div className="col-sm-6 col-md-4 col-8 pt-3">
              <SkillCard />
            </div>
          </div>
          <div>
            <p className="text-muted pt-5 mt-3">Mobile</p>
          </div>

          <div className="row">
            <div className="col-sm-6 col-md-4 col-8 pt-3">
              <SkillCard />
            </div>
            <div className="col-sm-6 col-md-4 col-8 pt-3">
              <SkillCard />
            </div>
            <div className="col-sm-6 col-md-4 col-8 pt-3">
              <SkillCard />
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6 col-md-4 col-8 pt-3">
              <SkillCard />
            </div>
            <div className="col-sm-6 col-md-4 col-8 pt-3">
              <SkillCard />
            </div>
            <div className="col-sm-6 col-md-4 col-8 pt-3">
              <SkillCard />
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default SkillCards;
