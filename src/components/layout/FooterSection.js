import React from "react";
import "Footer.css";

function FooterSection() {
  return (
    <div>
      <footer>
        <div class="container">
          <div class="row">
            <div class="col-md-4 footer-column">
              <ul class="nav flex-column ul-footer">
                <li class="nav-item">
                  <span class="footer-title">Product</span>
                </li>
                <li class="nav-item">
                  <a class="nav-link a-footer" href="#">
                    Product 1
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link a-footer" href="#">
                    Product 2
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link a-footer" href="#">
                    Plans & Prices
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link a-footer" href="#">
                    Frequently asked questions
                  </a>
                </li>
              </ul>
            </div>
            <div class="col-md-4 footer-column">
              <ul class="nav flex-column ul-footer">
                <li class="nav-item">
                  <span class="footer-title">Company</span>
                </li>
                <li class="nav-item">
                  <a class="nav-link a-footer" href="#">
                    About us
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link a-footer" href="#">
                    Job postings
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link a-footer" href="#">
                    News and articles
                  </a>
                </li>
              </ul>
            </div>
            <div class="col-md-4 footer-column">
              <ul class="nav flex-column ul-footer">
                <li class="nav-item">
                  <span class="footer-title">Contact & Support</span>
                </li>
                <li class="nav-item">
                  <span class="nav-link">
                    <i class="fas fa-phone"></i>+47 45 80 80 80
                  </span>
                </li>
                <li class="nav-item">
                  <a class="nav-link  a-footer" href="#">
                    <i class="fas fa-comments"></i>Live chat
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link  a-footer" href="#">
                    <i class="fas fa-envelope"></i>Contact us
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link  a-footer" href="#">
                    <i class="fas fa-star"></i>Give feedback
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div class="text-center">
            <i class="fas fa-ellipsis-h"></i>
          </div>

          <div class="row text-center">
            <div class="col-md-4 box">
              <span class="copyright quick-links">
                Copyright &copy; Your Website{" "}
                <script>document.write(new Date().getFullYear())</script>
              </span>
            </div>
            <div class="col-md-4 box">
              <ul class="list-inline social-buttons ul-footer">
                <li class="list-inline-item">
                  <a className=" a-footer" href="#">
                    <i class="fab fa-twitter"></i>
                  </a>
                </li>
                <li class="list-inline-item">
                  <a className=" a-footer" href="#">
                    <i class="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li class="list-inline-item">
                  <a className=" a-footer" href="#">
                    <i class="fab fa-linkedin-in"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div class="col-md-4 box">
              <ul class="list-inline quick-links">
                <li class="list-inline-item">
                  <a className=" a-footer" href="#">
                    Privacy Policy
                  </a>
                </li>
                <li class="list-inline-item">
                  <a className=" a-footer" href="#">
                    Terms of Use
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      Q
    </div>
  );
}

export default FooterSection;
