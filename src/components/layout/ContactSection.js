import React from "react";
import "./Contact.css";
import { Link, NavLink } from "react-router-dom";
import { ExternalLink } from "react-external-link";
import { useState } from 'react';
import { send } from 'emailjs-com';

function ContactSection() {
  return (
    <section id="contact">
      <div className="row">
        <h1 className="section-header">Contact</h1>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
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
          </div>
          <div className="col-md-6">
            <div className="direct-contact-container">
              <ul className="contact-list">
                <li className="list-item">
                  <span className="contact-text place">
                    <i class="fas fa-map-marker-alt pr-2"></i>
                    Ethiopia, Addis Ababa
                  </span>
                </li>

                <li className="list-item">
                  <span className="contact-text phone">
                    <i className="fas fa-phone pr-2"></i>
                    <a href="tel:+251965195775" title="Give me a call">
                      +251965195775
                    </a>
                  </span>
                </li>

                <li className="list-item">
                  <span className="contact-text gmail">
                    <i className="fas fa-envelope pr-2"></i>
                    <a
                      href="mailto:miheretutd@gmail.com"
                      title="Send me an email"
                    >
                      miheretutd@gmail.com
                    </a>
                  </span>
                </li>
              </ul>

              <hr />
              <div className="social-media-list mr-5">
                <ExternalLink
                  href="https://github.com/MiheretuTesh"
                  target="_blank"
                  className="contact-icon "
                >
                  <i className="fab fa-github" aria-hidden="true"></i>
                </ExternalLink>
                <ExternalLink
                  href="https://linkedin.com/in/miheretu-teshale-064b39207"
                  target="_blank"
                  className="contact-icon"
                >
                  <i className="fab fa-linkedin" aria-hidden="true"></i>
                </ExternalLink>
                <ExternalLink
                  href="mailto:miheretutd@gmail.com"
                  title="Send me an email"
                  target="_blank"
                  className="contact-icon "
                >
                  <i className="fab fa-google"></i>
                </ExternalLink>
                {/*             
            <ExternalLink to="#" target="_blank" className="contact-icon">
              <i className="fab fa-twitter" aria-hidden="true"></i>
            </ExternalLink> */}
                <ExternalLink
                  href="https://www.instagram.com/miheretu_/"
                  target="_blank"
                  className="contact-icon"
                >
                  <i className="fab fa-instagram" aria-hidden="true"></i>
                </ExternalLink>
              </div>
              <hr />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
