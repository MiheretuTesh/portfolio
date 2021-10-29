import React from "react";
import { Link } from "react-router-dom";
import "./AboutMe.css";

function AboutMe() {
  return (
    <body className="aboutme">
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
    </body>
  );
}

export default AboutMe;
