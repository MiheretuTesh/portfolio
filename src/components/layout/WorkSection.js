import React from "react";
import "./Work.css";
import temaribetImage from "./temaribet.png";
import donation from "./donation.png"

function WorkSection() {
  return (
    <div id="work" class="half-half-image-text">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <h1 className="header-text">Works</h1>
            <p>Some of project that I have involved in </p>
          </div>
        </div>
        <div className="pt-3 mt-3 mb-5">
          <h3>Home Tutor</h3>
        </div>
        <div class="row">
          <div class="col-12 col-lg-6">
            <div class="content">
              <p>
                This project was done with a team of three members, including
                me. The idea is to create a website that is used to connect Home
                Tutors and students. It is a FullStack website, in which the
                backend is done using python framework Flask and the frontend
                was done using jQuery and Bootstrap CSS.
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
        <hr />
        <div className="pt-5 mt-5 mb-5">
          <h3>Blood Donation System</h3>
        </div>
        <div class="row">
          <div class="col-12 col-lg-6">
            <div
              style={{ backgroundImage: `url(${donation})` }}
              class="img-worksection donation-image"
            ></div>
          </div>
          <div class="col-12 col-lg-6">
            <div class="content">
              <p>
                The idea of the project is to simplify the process of donating
                blood. So blood donors can register using this platform and make
                an appointment to donate blood, which we ask them a series of
                questions to determine if they are in the state of donating
                blood.
                <br />
                <br />
                This project is both a web-based and a mobile-based project. The
                web application was done using React, React-Hooks, Nodejs (API),
                and PostgreSQL. The mobile application was done using Flutter,
                Bloc for the state management, Nodejs, and MongoDB.
              </p>
            </div>
          </div>
        </div>
        {/* <div className="pt-5 mt-5">
          <h1>Temaribet</h1>
        </div>
        <div class="row">
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
        </div> */}
      </div>
    </div>
  );
}

export default WorkSection;
