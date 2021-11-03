import React from "react";
import "./Contact.css";
import { Link } from "react-router-dom";

function ContactSection() {
  return (
    <section id="contact">
      <h1 className="section-header">Contact</h1>

      <div className="contact-wrapper">
        <form id="contact-form" className="form-horizontal">
          <div className="col-sm-12">
            <div class="form-group">
              <input
                type="text"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="Name"
              />
            </div>
          </div>

          <div className="col-sm-12">
            <div class="form-group">
              <input
                type="email"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="Email"
              />
            </div>
          </div>

          <div className="col-sm-12">
            <div class="form-group">
              <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="7"
              ></textarea>
            </div>
          </div>

          <div className="col-sm-12">
            <button type="button" class="btn btn-sm send-button">
              Submit
            </button>
          </div>
        </form>

        <div className="direct-contact-container">
          <ul className="contact-list">
            <li className="list-item">
              <i className="fas fa-map-marker fa-2x">
                <span className="contact-text place">
                  Ethiopia, Addis Ababa
                </span>
              </i>
            </li>

            <li className="list-item">
              <i className="fas fa-phone fa-2x">
                <span className="contact-text phone">
                  <a href="tel:+251965195775" title="Give me a call">
                    (+251) 965-1957-75
                  </a>
                </span>
              </i>
            </li>

            <li className="list-item">
              <i className="fas fa-envelope fa-2x">
                <span className="contact-text gmail">
                  <a href="mailto:miheretutd@gmail.com" title="Send me an email">
                    miheretutd@gmail.com
                  </a>
                </span>
              </i>
            </li>
          </ul>

          <hr />
          <ul className="social-media-list">
            <li>
              <Link to="#" target="_blank" className="contact-icon">
                <i className="fab fa-github" aria-hidden="true"></i>
              </Link>
            </li>
            <li>
              <Link to="#" target="_blank" className="contact-icon">
                <i className="fab fa-codepen" aria-hidden="true"></i>
              </Link>
            </li>
            <li>
              <Link to="#" target="_blank" className="contact-icon">
                <i className="fab fa-twitter" aria-hidden="true"></i>
              </Link>
            </li>
            <li>
              <Link to="#" target="_blank" className="contact-icon">
                <i className="fab fa-instagram" aria-hidden="true"></i>
              </Link>
            </li>
          </ul>
          <hr />
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
