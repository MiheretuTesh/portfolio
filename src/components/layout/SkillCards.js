import React from "react";
import "./SkillCard.css";
import SkillCard from "./SkillCard";
import { Link } from "react-router-dom";
import "./Landing.css";
import html from "./skillImg/html.svg";
import flutter from "./skillImg/flutter.png";
import java from "./skillImg/java.png";
import javascript from "./skillImg/javascript.png";
import kotlin from "./skillImg/kotlin.png";
import reactNative from "./skillImg/react_native.png";
import node from "./skillImg/node.png";
import python from "./skillImg/python.png";
import react from "./skillImg/react.png";

function SkillCards() {
  return (
    <div className="skillard-section pt-5 pb-5">
      <h1 className="header-text">Skills</h1>
      <div className="cards-skill">
        <div class="container pt-3 mt-3">
          <div>
            <h5>Web Technologies</h5>
          </div>
          <div class="row">
            <div class="col-lg-4 col-md-6 col-10 col-sm-10 offset-md-0 offset-sm-2 offset-2 pt-5">
              <SkillCard
                imageScr={html}
                alt="HTML logo"
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
                imageScr={javascript}
                alt="JavaScript icon"
                title="JavaScript"
                subtitle="Vanilla JavaScript with three year of experience"
                additional={[
                  "Vanilla JavaScript",
                  "FrameWorks and Libraries - React, NodeJs, Vue",
                ]}
              />
            </div>
            <div class="col-lg-4 col-md-6 col-10 col-sm-10 offset-md-0 offset-sm-2 offset-2 pt-5">
              <SkillCard
                imageScr={react}
                alt="React Icon"
                title="React"
                subtitle="React - with two years of Experiences"
                additional={[
                  "React Hooks",
                  // "Class Component and Functional Component",
                  "State Management - React Redux",
                ]}
              />
            </div>
            <div class="col-lg-4 col-md-6 col-10 col-sm-10 offset-md-0 offset-sm-2 offset-2 pt-5">
              <SkillCard
                imageScr={node}
                alt="node icon"
                title="NodeJs"
                subtitle="NodeJs - with two years of Experiences"
                additional={["RESTFUL API using NodeJs", "Express, Nest.js"]}
              />
            </div>
            <div class="col-lg-4 col-md-6 col-10 col-sm-10 offset-md-0 offset-sm-2 offset-2 pt-5">
              <SkillCard
                imageScr={python}
                alt="Flask Icon"
                title="Flask"
                subtitle="Flask - with two years of Experiences"
                additional={["RESTFUL API using Flask"]}
              />
            </div>
          </div>
          <div className="mt-5 pt-5">
            <h5 className="mt-5">Mobile Technologies</h5>
          </div>
          <div class="row">
            <div class="col-lg-4 col-md-6 col-10 col-sm-10 offset-md-0 offset-sm-2 offset-2 pt-5">
              <SkillCard
                imageScr={reactNative}
                alt={reactNative}
                title="React Native"
                subtitle="React Native - with two years of Experiences"
                additional={[]}
              />
            </div>
            <div class="col-lg-4 col-md-6 col-10 col-sm-10 offset-md-0 offset-sm-2 offset-2 pt-5">
              <SkillCard
                imageScr={flutter}
                alt="Flutter icon"
                title="Flutter"
                subtitle="Flutter - with one years of Experiences"
                additional={["Material-UI", "State Management - using BLoC"]}
              />
            </div>

            <div class="col-lg-4 col-md-6 col-10 col-sm-10 offset-md-0 offset-sm-2 offset-2 pt-5">
              <SkillCard
                imageScr={java}
                alt="java Icon"
                title="Java"
                subtitle="Java - with two years of Experiences Native Android Application"
                additional={[]}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SkillCards;
