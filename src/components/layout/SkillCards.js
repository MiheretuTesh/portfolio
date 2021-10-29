import React from "react";
import "./SkillCard.css";
import SkillCard from "./SkillCard";

function SkillCards() {
  return (
    <div className="skillard-section pt-5">
      <h1 className="pb-4">Skills</h1>
      <div className="cards-skill">
        <div className="container">
          <div>
            <p className="text-muted">Web</p>
          </div>

          <div className="row">
            <div className="col-sm-6 col-md-4 col-8 pt-3">
              <SkillCard />
            </div>
            <div className="col-sm-6 col-md-4 col-8 pt-3">
              <SkillCard />
            </div>
            <div className="col-sm-6 col-md-4 col-8 pt-3">
              <SkillCard />
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6 col-md-4 col-8 pt-3">
              <SkillCard />
            </div>
            <div className="col-sm-6 col-md-4 col-8 pt-3">
              <SkillCard />
            </div>
            <div className="col-sm-6 col-md-4 col-8 pt-3">
              <SkillCard />
            </div>
          </div>
          <div>
            <p className="text-muted pt-5 mt-3">Mobile</p>
          </div>

          <div className="row">
            <div className="col-sm-6 col-md-4 col-8 pt-3">
              <SkillCard />
            </div>
            <div className="col-sm-6 col-md-4 col-8 pt-3">
              <SkillCard />
            </div>
            <div className="col-sm-6 col-md-4 col-8 pt-3">
              <SkillCard />
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6 col-md-4 col-8 pt-3">
              <SkillCard />
            </div>
            <div className="col-sm-6 col-md-4 col-8 pt-3">
              <SkillCard />
            </div>
            <div className="col-sm-6 col-md-4 col-8 pt-3">
              <SkillCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SkillCards;
