import React from "react";
import "./Awards.css";

function AwardSection() {
  return (
    <div className="container-awards">
      <div className="about-awardsbox">
        <figure className="mr-2 mb-4">
          <figcaption>
            <h1 style={{ paddingTop: 80 }}>Awards and Achievemnts</h1>
          </figcaption>
        </figure>
        <div className="grid2">
          {/* <figure className="effect-oscar">
            <figcaption>
              <img
                src="https://etc-mysitemyway.s3.amazonaws.com/icons/legacy-previews/icons/rounded-glossy-black-icons-sports-hobbies/047427-rounded-glossy-black-icon-sports-hobbies-cup-trophy.png"
                style={{ height: 90, marginTop: "-45px" }}
                alt=""
              />
              <p>
                DataStructure and Algorithm course
                <br />
                <br />
                Coursera
              </p>
            </figcaption>
          </figure> */}

          {/* <figure className="effect-oscar">
            <figcaption>
              <img
                src="https://etc-mysitemyway.s3.amazonaws.com/icons/legacy-previews/icons/rounded-glossy-black-icons-sports-hobbies/047427-rounded-glossy-black-icon-sports-hobbies-cup-trophy.png"
                style={{ height: 90, marginTop: "-45px" }}
                alt=""
              />
              <p>
                Best looking Developers of 2011
                <br />
                <br />
                -Somebody
              </p>
            </figcaption>
          </figure> */}
          <figure className="effect-oscar mr-2">
            <figcaption>
              <img
                src="https://etc-mysitemyway.s3.amazonaws.com/icons/legacy-previews/icons/rounded-glossy-black-icons-sports-hobbies/047427-rounded-glossy-black-icon-sports-hobbies-cup-trophy.png"
                style={{ height: 90, marginTop: "-45px" }}
                alt=""
              />
              <p>
                DataStructure and Algorithm course
                <br />
                <br />
                Coursera
              </p>
            </figcaption>
          </figure>
          <figure className="effect-oscar mr-2">
            <figcaption>
              <img
                src="https://etc-mysitemyway.s3.amazonaws.com/icons/legacy-previews/icons/rounded-glossy-black-icons-sports-hobbies/047427-rounded-glossy-black-icon-sports-hobbies-cup-trophy.png"
                style={{ height: 90, marginTop: "-45px" }}
                alt=""
              />
              <p>
                Kotlin course
                <br />
                <br />
                Udacity
              </p>
            </figcaption>
          </figure>
          <figure className="effect-oscar">
            <figcaption>
              <img
                src="https://etc-mysitemyway.s3.amazonaws.com/icons/legacy-previews/icons/rounded-glossy-black-icons-sports-hobbies/047427-rounded-glossy-black-icon-sports-hobbies-cup-trophy.png"
                style={{ height: 90, marginTop: "-45px" }}
                alt=""
              />
              <p>
                Search Engine Optimization
                <br />
                <br />
                Udemy
              </p>
            </figcaption>
          </figure>
        </div>
      </div>
    </div>
  );
}

export default AwardSection;
