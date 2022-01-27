import React from "react";
import { Link } from "react-router-dom";
import "./Landing.css";
import { ExternalLink } from "react-external-link";

function Landing() {
  return (
    <div id="landing-section">
      <div class="half-half-image-text">
        <div class="container">
          <div class="row pt-5">
            <div class="col-12 col-lg-6 pt-md-5">
              <h1 className="display-4">Hey, I'm Miheretu</h1>
              <h5 className="display-4">
                Web, Mobile Developer and UX/UI Designer
              </h5>
              <div class="pt-3">
                <p>
                  I’m a Web , Mobile Developer and UX/UI Designer based in Addis
                  Ababa, Ethiopia. Coding is my passion and my professional
                  focus. Developing applications for the web and Mobile (both
                  android and IOS) has become my thing. I have been developing
                  web and mobile applications for last 4+ years.
                </p>
              </div>
            </div>
            <div class="col-12 col-lg-6">
              <div class="">
                <div class="container-hero">
                  <div class="card-hero card0">
                    <div class="border-hero">
                      <h2 className="h2-hero">Miheretu Teshale</h2>
                      <div class="icons-hero">
                        <ExternalLink
                          href="https://linkedin.com/in/miheretu-teshale-064b39207"
                          target="_blank"
                          className="hero-tag"
                        >
                          <i
                            class="fab fa-linkedin fa-hero"
                            aria-hidden="true"
                          ></i>
                        </ExternalLink>
                        <ExternalLink
                          href="https://github.com/MiheretuTesh"
                          target="_blank"
                          className="hero-tag"
                        >
                          <i
                            class="fab fa-github fa-hero"
                            aria-hidden="true"
                          ></i>
                        </ExternalLink>
                        <ExternalLink
                          href="mailto:miheretutd@gmail.com"
                          target="_blank"
                          className="hero-tag"
                        >
                          <i
                            class="fab fa-google fa-hero"
                            aria-hidden="true"
                          ></i>
                        </ExternalLink>
                        <ExternalLink
                          href="https://www.instagram.com/miheretu_/"
                          target="_blank"
                          className="hero-tag"
                        >
                          <i
                            class="fab fa-instagram fa-hero"
                            aria-hidden="true"
                          ></i>
                        </ExternalLink>
                        <ExternalLink
                          href="https://twitter.com/Miheretu10"
                          target="_blank"
                          className="hero-tag"
                        >
                          <i
                            class="fab fa-twitter fa-hero"
                            aria-hidden="true"
                          ></i>
                        </ExternalLink>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <Link to="https://componentity.com" target="_blank" class="block">
        <img
          src="http://codenawis.com/componentity/wp-content/uploads/2020/08/logo-componentity-%E2%80%93-9.png"
          width="120px"
          class="d-block mx-auto my-5"
          alt=""
        />
      </Link> */}
    </div>
  );
}

export default Landing;
