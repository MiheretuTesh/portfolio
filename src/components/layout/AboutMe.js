import React from "react";
import "./AboutMe.css";
import mobiledevelop from "./aboutmeImg/mobiledevelop.png";
import webdevelop from "./aboutmeImg/webdevelop.png";
import designerdevelop from "./aboutmeImg/designerdevelop.png";

function AboutMe() {
  return (
    <div className="aboutme-section pt-5 pb-5">
      <h1 className="pt-2 header-text">I am a ...</h1>
      <div className="aboutme">
        <div class="container container-aboutme">
          <div class="row pt-4">
            <div class="col-10 col-md-4 col-sm-10 offset-md-0 offset-sm-2 offset-2">
              <div class="card-aboutme">
                <div class="face face1">
                  <div class="content">
                    <img src={webdevelop} alt="Web Developer" />
                    <h3>Web Developer</h3>
                  </div>
                </div>
                <div class="face face2">
                  <div class="content">
                    <p>
                      For the past three years, I've worked in the field of web
                      development. I've been working as a FullStack Developer.
                      HTML/CSS, JS, React, NodeJs ... are some of my skills.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-10 col-sm-10 offset-md-0 offset-sm-2 offset-2">
              <div class="card-aboutme">
                <div class="face face1">
                  <div class="content">
                    <img src={mobiledevelop} alt="Mobile Developer" />
                    <h3>Mobile Developer</h3>
                  </div>
                </div>
                <div class="face face2">
                  <div class="content">
                    <p>
                      I have been working in mobile development for the last 2
                      years. I have worked with React Native and Flutter.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-10 col-sm-10 offset-md-0 offset-sm-2 offset-2">
              <div class="card-aboutme">
                <div class="face face1">
                  <div class="content">
                    <img src={designerdevelop} alt="UX/UI Dedigner" />
                    <h3>UI/UX Designer</h3>
                  </div>
                </div>
                <div class="face face2">
                  <div class="content">
                    <p>
                       I have UI/IX experience. I've been designing user
                      interfaces for both websites and mobile devices. The tool
                      I mainly used is Figma, which is a great platform for
                      designing UI.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
