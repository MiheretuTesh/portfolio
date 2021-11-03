import React from "react";
import "./SkillCard.css";
import SkillCard from "./SkillCard";
import { Link } from "react-router-dom";
import "./Landing.css";

function SkillCards() {
  return (
    <div className="skillard-section pt-5 pb-5">
      <h1 className="pb-4">Skills</h1>
      <div className="cards-skill">
        <div class="container pt-5 mt-5">
          <div>
            <h6>Web Technologies</h6>
          </div>
          <div class="row">
            <div class="col-lg-4 col-md-6 col-10 col-sm-10 offset-md-0 offset-sm-2 offset-2 pt-5">
              <SkillCard
                imageScr="https://upload.wikimedia.org/wikipedia/commons/3/38/HTML5_Badge.svg"
                title="HTML/CSS"
                subtitle="HTML 5 and CSS 3 with 3 years of experience"
                additional={[
                  "HTML-5 and CSS-3",
                  "CSS Framing - Bootstarp, TailWind, Semantic UI ...",
                ]}
              />
            </div>
            <div class="col-lg-4 col-md-6 col-10 col-sm-10 offset-md-0 offset-sm-2 offset-2 pt-5">
              <SkillCard
                imageScr="https://cdn-icons-png.flaticon.com/512/1199/1199124.png"
                title="JavaScript"
                subtitle="Vanilla JavaScript, Also React, Nodejs and Vue"
                additional={[
                  "Vanilla JavaScript",
                  "FrameWorks and Libraries - React, NodeJs, Vue",
                ]}
              />
            </div>
            <div class="col-lg-4 col-md-6 col-10 col-sm-10 offset-md-0 offset-sm-2 offset-2 pt-5">
              <SkillCard
                imageScr="https://cdn-icons-png.flaticon.com/512/753/753244.png"
                title="React"
                subtitle="React, Redux"
                additional={[
                  "React Class and Functional Components",
                  "State Management - Using React Redux",
                ]}
              />
            </div>
            <div class="col-lg-4 col-md-6 col-10 col-sm-10 offset-md-0 offset-sm-2 offset-2 pt-5">
              <SkillCard
                imageScr="https://cdn-icons-png.flaticon.com/512/919/919825.png"
                title="Nodejs"
                subtitle="Vanilla JavaScript, Also React, Nodejs and Vue"
                additional={[
                  "Express, REST API's",
                  "Integration With Database like - MongoDB, Postgres, MySQL ...",
                ]}
              />
            </div>
            <div class="col-lg-4 col-md-6 col-10 col-sm-10 offset-md-0 offset-sm-2 offset-2 pt-5">
              <SkillCard
                imageScr="https://cdn-icons.flaticon.com/png/512/3098/premium/3098090.png?token=exp=1635868820~hmac=e21087c3f37da33fce0940938e0242f3"
                title="Django/Flask"
                subtitle="Vanilla JavaScript, Also React, Nodejs and Vue"
                additional={[
                  "HTML-5 and CSS-3",
                  "CSS Framing - Bootstarp, TailWind, Semantic UI ...",
                ]}
              />
            </div>
          </div>
          <div className="mt-5 pt-5">
            <h6 className="mt-5">Mobile Technologies</h6>
          </div>
          <div class="row">
            <div class="col-lg-4 col-md-6 col-10 col-sm-10 offset-md-0 offset-sm-2 offset-2 pt-5">
              <SkillCard
                imageScr="https://logowik.com/content/uploads/images/flutter5786.jpg"
                title="Flutter"
                subtitle="Flutter for crossplatform"
                additional={["Material-UI", "State Management - using BLoC"]}
              />
            </div>
            <div class="col-lg-4 col-md-6 col-10 col-sm-10 offset-md-0 offset-sm-2 offset-2 pt-5">
              <SkillCard
                imageScr="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAolBMVEX///8dq/z9iSUApfzo9P/9gAD/8OkArP//hwC1pJ7+x56Y1f0Ap/y3pZ3+x6D9ggb/iBv/iBH58+8An/wApf9Pp934hRj9eAD+wJNKrOf4jjI9q+wpq/X0kDzpk1DelF3TlWbFlna3mImvmpOhnKGPnq98oLxyocNio8/4iiYtqfDpjD3jjUbNkmq5loKQnKffjlGFnrRcpNWmmZebm6PVtZ3x+J/xAAADwklEQVR4nO3diVIUMRjE8Yx7fIsXAqKi64kK3vf7v5oMM7jHXEnvzKSz9v8J+FU6LCmowjmllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSqlRmoIdz8FGB55MkB6ePppBPX4yunCSAdnZ0we3kGa3xwZiQnsGAg/HB0JCWz4HgffHByJCW75IZqKQ0LKXRwkBkTN8hQFj3EFIaK9BYIw7iAjtzQICRppouNDOUwMGCu0tBox1B4OF9g4ExrqDoUJ7n9xEw4R2kd5Eg4R2mdCPaojQTo8gYdyJBgjt7EOaQF8h+l6KfAf9hfbxEwaMfAe9hZZ9TnSizk+IvpcogH5n+AUCEtzBPA8h+F7iOEEfoX2FfpRhAXYLwfcSyURdtxB8LzF8TJR1CO1b2hN1XULwvcQEbBeC7yWeO5jXJgTfS0R3MK9FCL6XqCbq2oR2thfAZiH4XuK6g3lNQvC9RHeCjULL9gXYILTs+35M1DUIDfv9EtnHRFm9EHoQMk7U1QuxByEpsE6I/QKN8g7mVYX2CwJS3sG8ihB7L7FO1FWF9mOvJuoqQuxByDtRty20i336Llq0IbSfyHOCG7ghtNMFAGS+g3lrQuwPDqnvYN5KiL2XyCfq1oS23E/gP6EtkV+gsd/BvFKIvZcSOMGVEHkvJQEshdB7KYWJulIIvZfoPybKciH0Xkpjou5aaL8B4OJP7K/ct+kE+oPDxcHdO7G/dM+mE+S9tDiwLBXi9BL4Lrq4Z1ffnxIhHh+iwCybJEGcz8KBB1b+LJvEKYYLV8A0iMHCm4kmQwwVbgJTuIuBwvWJJnKKYcLtE0yBGCSsA9IPNURYnWgKpxggbAKSE/2F9RPlJ3oL24DUd9FX2DxR9lP0FHYBiYl+wvaJchO9hD5A2rvoI+yeKPMpegj9TpCW2C30B3IOtVPoO1HaU+wShgEZiR3CkImSEtuF4UC+u9gqDJ0o5Sm2CTEgG7FFiEy0iGqozUIcyEVsFKITLSIaapNwlxPkIjYIdwUSDbVeuNtEuU6xVtgHkIZYJ9x9okzEGmFfQJK7WBX2M9EihlOsCPs7QRLitrBfIMNQt4R9TpSEuCnsHxh/qBvCvidKQVwXDgOMPdQ14RATLYp6iivhcMC4xH/CoSYanXgjHBYY8y6WwiEnWhTtFAvh0CcYk3gtHAMYbai5cPiJFsU5xSvhWMBIxPlsnInGI85nIwKj3MX5OfT/LeBOxiei/6MEbnShUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaX+0/4CzV5cM45jZQUAAAAASUVORK5CYII="
                title="Kotlin"
                subtitle="Vanilla JavaScript, Also React, Nodejs and Vue"
                additional={[]}
              />
            </div>
            <div class="col-lg-4 col-md-6 col-10 col-sm-10 offset-md-0 offset-sm-2 offset-2 pt-5">
              <SkillCard
                imageScr="https://cdn-icons-png.flaticon.com/512/919/919854.png"
                title="Java"
                subtitle="Native Android Application"
                additional={[]}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SkillCards;
