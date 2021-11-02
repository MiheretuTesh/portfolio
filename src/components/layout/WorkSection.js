import React from "react";
import "./Work.css";
import temaribetImage from "./temaribet.png";

function WorkSection() {
  return (
    <div class="half-half-image-text">
      <div class="container">
        <div class="row pt-5">
          <div class="col-12">
            <h1>Works</h1>
            <p>Some of my works and experiences are...</p>
          </div>
        </div>
        <div class="row pt-5 mt-5">
          <div class="col-12 col-lg-6">
            <div class="content">
              <p>
                At Fluid Automotive, our purpose is to make automotive parts
                easily accessible for everyone. Working with our partner brands,
                we aim to retail the highest quality parts, whilst maintaining a
                high level of customer satisfaction.
              </p>
            </div>
          </div>
          <div class="col-12 col-lg-6">
            <div
              style={{ backgroundImage: `url(${temaribetImage})` }}
              class="img-worksection"
            ></div>
          </div>
        </div>
        <div class="row pt-5 mt-5">
          <div class="col-12 col-lg-6">
            <div
              style={{ backgroundImage: `url(${temaribetImage})` }}
              class="img-worksection"
            ></div>
          </div>
          <div class="col-12 col-lg-6">
            <div class="content">
              <p>
                At Fluid Automotive, our purpose is to make automotive parts
                easily accessible for everyone. Working with our partner brands,
                we aim to retail the highest quality parts, whilst maintaining a
                high level of customer satisfaction.
              </p>
            </div>
          </div>
        </div>
        <div class="row pt-5 mt-5">
          <div class="col-12 col-lg-6">
            <div class="content">
              <p>
                At Fluid Automotive, our purpose is to make automotive parts
                easily accessible for everyone. Working with our partner brands,
                we aim to retail the highest quality parts, whilst maintaining a
                high level of customer satisfaction.
              </p>
            </div>
          </div>
          <div class="col-12 col-lg-6">
            <div
              style={{ backgroundImage: `url(${temaribetImage})` }}
              class="img-worksection"
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorkSection;
