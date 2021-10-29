import React from "react";
import { Link } from "react-router-dom";
import "./AboutMe.css";
import HeroText from "./HeroText";

function AboutMe() {
  return (
    <div className="aboutme-section pt-5 pb-5">
      <h1>I am a ...</h1>
      <div className="aboutme">
        <div class="container-aboutme">
          <div class="card-aboutme">
            <div class="face face1">
              <div class="content">
                <img
                  src="https://github.com/Jhonierpc/WebDevelopment/blob/master/CSS%20Card%20Hover%20Effects/img/design_128.png?raw=true"
                  alt=""
                />
                <h3>Design</h3>
              </div>
            </div>
            <div class="face face2">
              <div class="content">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
                  cum cumque minus iste veritatis provident at.
                </p>
                <Link to="">Read More</Link>
              </div>
            </div>
          </div>
          <div class="card-aboutme">
            <div class="face face1">
              <div class="content">
                <img
                  src="https://github.com/Jhonierpc/WebDevelopment/blob/master/CSS%20Card%20Hover%20Effects/img/code_128.png?raw=true"
                  alt=""
                />
                <h3>Code</h3>
              </div>
            </div>
            <div class="face face2">
              <div class="content">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
                  cum cumque minus iste veritatis provident at.
                </p>
                <Link to="">Read More</Link>
              </div>
            </div>
          </div>
          <div class="card-aboutme">
            <div class="face face1">
              <div class="content">
                <img
                  src="https://github.com/Jhonierpc/WebDevelopment/blob/master/CSS%20Card%20Hover%20Effects/img/launch_128.png?raw=true"
                  alt=""
                />
                <h3>Launch</h3>
              </div>
            </div>
            <div class="face face2">
              <div class="content">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
                  cum cumque minus iste veritatis provident at.
                </p>
                <Link to="">Read More</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
