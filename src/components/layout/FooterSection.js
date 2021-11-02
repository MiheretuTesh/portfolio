import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

function FooterSection() {
  return (
    <div>
      <footer>
        <div class="container ">
          <div class="row">
            <div class="col-md-4 footer-column">
              <ul class="nav flex-column ul-footer">
                <li class="nav-item">
                  <span class="footer-title">Miheretu Teshale</span>
                </li>
                <li class="nav-item">
                  <Link class="nav-link a-footer" to="#">
                    Developer
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link a-footer" to="#">
                    Designer
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link a-footer" to="#"></Link>
                </li>
              </ul>
            </div>
            <div class="col-md-4 footer-column">
              <ul class="nav flex-column ul-footer">
                <li class="nav-item">
                  <span class="footer-title">Portfolio</span>
                </li>
                <li class="nav-item">
                  <HashLink class="nav-link a-footer" to="/#about">
                    About
                  </HashLink>
                </li>
                <li class="nav-item">
                  <HashLink class="nav-link a-footer" to="/#work">
                    Works
                  </HashLink>
                </li>
                <li class="nav-item">
                  <HashLink class="nav-link a-footer" to="/#award">
                    Awards
                  </HashLink>
                  <HashLink class="nav-link a-footer" to="/#contact">
                    Contact Me
                  </HashLink>
                </li>
              </ul>
            </div>
            <div class="col-md-4 footer-column">
              <ul class="nav flex-column ul-footer">
                <li class="nav-item">
                  <span class="footer-title">Contact</span>
                </li>
                <li class="nav-item">
                  <span class="nav-link">
                    <i class="fas fa-phone"></i>+251 965 1957 75
                  </span>
                </li>
                <li class="nav-item">
                  <span class="nav-link">
                    <i class="fas fa-envelope"></i>miheretutd@gmail.com
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div class="text-center">
            <i class="fas fa-ellipsis-h"></i>
          </div>

          <div class="row text-center">
            <div class="col-md-12 box">
              <ul class="list-inline social-buttons ul-footer">
                <li class="list-inline-item">
                  <Link className=" a-footer" to="#" target="_blank">
                    <i class="fab fa-linkedin"></i>
                  </Link>
                </li>
                <li class="list-inline-item">
                  <Link className=" a-footer" to="#" target="_blank">
                    <i class="fab fa-github"></i>
                  </Link>
                </li>
                <li class="list-inline-item">
                  <Link className=" a-footer" to="#" target="_blank">
                    <i class="fab fa-google"></i>
                  </Link>
                </li>
                <li class="list-inline-item">
                  <Link className=" a-footer" to="#" target="_blank">
                    <i class="fab fa-instagram"></i>
                  </Link>
                </li>
                <li class="list-inline-item">
                  <Link className=" a-footer" to="#" target="_blank">
                    <i class="fab fa-twitter"></i>
                  </Link>
                </li>
              </ul>
            </div>
            <div class="col-md-12 box pt-3">
              <span class="copyright quick-links">
                Copyright &copy; MIheretu Teshale 2021
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default FooterSection;
