import React from "react";
import { Link } from "react-router-dom;";
import { HashLink, NavHashLink } from "react-router-hash-link";

function Navbar() {
  return (
    <nav class="navbar navbar-dark navbar-expand-sm bg-dark fixed-top">
      <div class="container">
        <a href="/" class="navbar-brand">
          <i class="fas fa-blog"></i> &nbsp; Blog Template
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
              <HashLink to="/">About</HashLink>
            </li>
            <li class="nav-item">
              <HashLink smooth to={"/page#works"}>
                Works
              </HashLink>
            </li>
            <li class="nav-item">
              <HashLink
                // example of custom scroll function using the scroll prop
                scroll={(el) => el.scrollIntoView({ behavior: "smooth" })}
                to={"/page#awards"}
              >
                Section Three
              </HashLink>
            </li>
            <li class="nav-item">
              <HashLink smooth to={"/page#contact"}>
                Focusable Heading
              </HashLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
