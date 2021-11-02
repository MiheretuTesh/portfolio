import React from "react";
import { Link } from "react-router-dom";
import "./Landing.css";
import temaribetImage from "./temaribet.png";

function Landing() {
  return (
    <div>
      <div class="half-half-image-text">
        <div class="container">
          <div class="row pt-5 mt-5">
            <div class="col-12 col-lg-6">
              <div class="content">
                <p>
                  At Fluid Automotive, our purpose is to make automotive parts
                  easily accessible for everyone. Working with our partner
                  brands, we aim to retail the highest quality parts, whilst
                  maintaining a high level of customer satisfaction.
                </p>
              </div>
            </div>
            <div class="col-12 col-lg-6">
              <div class="img-worksection">
                <div class="container-hero">
                  <div class="card-hero card0">
                    <div class="border-hero">
                      <h2 className="h2-hero">Miheretu teshale</h2>
                      <div class="icons-hero">
                        <Link
                          to="http://LinkedIn.com"
                          target="_blank"
                          className="hero-tag"
                        >
                          <i
                            class="fab fa-linkedin fa-hero"
                            aria-hidden="true"
                          ></i>
                        </Link>
                        <Link
                          to="http://github.com"
                          target="_blank"
                          className="hero-tag"
                        >
                          <i
                            class="fab fa-github fa-hero"
                            aria-hidden="true"
                          ></i>
                        </Link>
                        <Link
                          to="http://google.com"
                          target="_blank"
                          className="hero-tag"
                        >
                          <i
                            class="fab fa-google fa-hero"
                            aria-hidden="true"
                          ></i>
                        </Link>
                        <Link
                          to="http://instagram.com"
                          target="_blank"
                          className="hero-tag"
                        >
                          <i
                            class="fab fa-instagram fa-hero"
                            aria-hidden="true"
                          ></i>
                        </Link>
                        <Link
                          to="http://twitter.com"
                          target="_blank"
                          className="hero-tag"
                        >
                          <i
                            class="fab fa-twitter fa-hero"
                            aria-hidden="true"
                          ></i>
                        </Link>
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
