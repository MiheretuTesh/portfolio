import React from "react";
import "./Landing.css";
import { Link } from "react-router-dom";

function Landing() {
  return (
    <div>
      <div class="position-relative w-100">
        <div class="position-absolute text-white d-flex flex-column align-items-center justify-content-center">
          <span>SubHeadline</span>
          <h1 class="mb-4 mt-2 font-weight-bold text-center">
            Enter Your Headline Here
          </h1>
          <div class="text-center">
            <Link
              to="/"
              id="filled"
              class="btn px-5 py-3 text-white mt-3 mt-sm-0 mx-1"
            >
              Get Started
            </Link>
            <Link
              to="/"
              id="outlined"
              class="btn px-5 py-3 text-white mt-3 mt-sm-0 mx-1"
            >
              Showcases
            </Link>
          </div>
        </div>
      </div>

      <Link to="https://componentity.com" target="_blank" class="block">
        <img
          src="http://codenawis.com/componentity/wp-content/uploads/2020/08/logo-componentity-%E2%80%93-9.png"
          width="120px"
          class="d-block mx-auto my-5"
          alt=""
        />
      </Link>
    </div>
  );
}

export default Landing;
