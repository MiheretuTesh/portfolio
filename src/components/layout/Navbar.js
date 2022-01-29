import React from "react";
// import { Link } from "react-router-dom;";
import "./Navbar.css";
import { HashLink } from "react-router-hash-link";

function Navbar() {
  return (
    <div id="navbar-section">
      <nav class="navbar navbar-section navbar-light navbar-expand-sm bg-light fixed-top">
        <div class="container">
          <a href="/" class="navbar-brand">
            <i class="fas fa-blog"></i> &nbsp;{" "}
            <span className="nav-text">MIHERETU</span>
          </a>

          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarCollapse"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div id="navbarCollapse" class="collapse navbar-collapse">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item">
                <HashLink className="nav-link navbar-section-link" smooth to="/#about">
                  About
                </HashLink>
              </li>
              <li class="nav-item">
                <HashLink className="nav-link navbar-section-link" smooth to={"/#works"}>
                  Works
                </HashLink>
              </li>
              <li class="nav-item">
                <HashLink
                  className="nav-link navbar-section-link"
                  // example of custom scroll function using the scroll prop
                  scroll={(el) => el.scrollIntoView({ behavior: "smooth" })}
                  t o={"/#awards"}
                >
                   Achievemnts
                </HashLink>
              </li>
              <li class="nav-item">
                <HashLink className="nav-link navbar-section-link" smooth to={"/#contact"}>
                  Contact
                </HashLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
