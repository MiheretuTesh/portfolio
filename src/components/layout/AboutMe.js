import React from "react";
import { Link } from "react-router-dom";
import "./AboutMe.css";
import HeroText from "./HeroText";

function AboutMe() {
  return (
    <div className="aboutme-section pt-5 pb-5">
      <h1>I am a ...</h1>
      <div className="aboutme">
        <div class="container container-aboutme">
          <div class="row pt-5 mt-5">
            <div class="col-10 col-md-4 col-sm-10 offset-md-0 offset-sm-2 offset-2">
              <div class="card-aboutme">
                <div class="face face1">
                  <div class="content">
                    <img
                      src="https://cdn-icons.flaticon.com/png/512/1184/premium/1184202.png?token=exp=1635841389~hmac=1128645541985bce78fea64e77716c0a"
                      alt="Web Developer"
                    />
                    <h3>Web Developer</h3>
                  </div>
                </div>
                <div class="face face2">
                  <div class="content">
                    <p>
                      I have 3 year of Experience in the Web Developement Area.
                      I have worked in both Frontend and Backend develoment Area.
                      React, Nodejs, HTML/CSS...
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-10 col-sm-10 offset-md-0 offset-sm-2 offset-2">
              <div class="card-aboutme">
                <div class="face face1">
                  <div class="content">
                    <img
                      src="https://cdn-icons.flaticon.com/png/512/1285/premium/1285096.png?token=exp=1635841338~hmac=01f4ea1b4563148a65472eb87d82d031"
                      alt="Mobile Developer"
                    />
                    <h3>Mobile Developer</h3>
                  </div>
                </div>
                <div class="face face2">
                  <div class="content">
                    <p>
                      I have been Working in mobile development for the last 2 years. I have experience in Java, Kotlin and Flutter.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-10 col-sm-10 offset-md-0 offset-sm-2 offset-2">
              <div class="card-aboutme">
                <div class="face face1">
                  <div class="content">
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/1234/1234457.png"
                      alt="UX/UI Dedigner"
                    />
                    <h3>UI/UX Designer</h3>
                  </div>
                </div>
                <div class="face face2">
                  <div class="content">
                    <p>
                      I have UI/IX experience. 
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div class="container-aboutme">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-4 col-12 ">
                <div class="card-aboutme">
                  <div class="face face1">
                    <div class="content">
                      <img
                        src="https://cdn-icons.flaticon.com/png/512/1184/premium/1184202.png?token=exp=1635841389~hmac=1128645541985bce78fea64e77716c0a"
                        alt=""
                      />
                      <h3>Web Developer</h3>
                    </div>
                  </div>
                  <div class="face face2">
                    <div class="content">
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quas cum cumque minus iste veritatis provident at.
                      </p>
                      <Link to="">Read More</Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-12">
                <div class="card-aboutme">
                  <div class="face face1">
                    <div class="content">
                      <img
                        src="https://cdn-icons.flaticon.com/png/512/1285/premium/1285096.png?token=exp=1635841338~hmac=01f4ea1b4563148a65472eb87d82d031"
                        alt=""
                      />
                      <h3>Mobile Developer</h3>
                    </div>
                  </div>
                  <div class="face face2">
                    <div class="content">
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quas cum cumque minus iste veritatis provident at.
                      </p>
                      <Link to="">Read More</Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-12">
                <div class="card-aboutme">
                  <div class="face face1">
                    <div class="content">
                      <img
                        src="https://cdn-icons-png.flaticon.com/512/1234/1234457.png"
                        alt=""
                      />
                      <h3>UI/UX Designer</h3>
                    </div>
                  </div>
                  <div class="face face2">
                    <div class="content">
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quas cum cumque minus iste veritatis provident at.
                      </p>
                      <Link to="">Read More</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default AboutMe;
