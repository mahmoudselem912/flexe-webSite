import React from "react";
import "./workStages.css";
import icon from "../../assets/butterFly.png";
import WorkStageImg from "../../assets/workStagesTriangle.png";
import WorkStageGuy from "../../assets/workStagesGuy.png";
import ReactCurvedText from "react-curved-text";
import CurvedText from "../curvedText/curvedText";
import talk from "../../assets/talk.png";

const WorkStages = () => {
  function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    var reveals2 = document.querySelectorAll(".reveal2");
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
        reveals2[i].classList.add("off");
      } else {
        reveals[i].classList.remove("active");
        reveals2[i].classList.remove("off");
      }
    }
  }

  window.addEventListener("scroll", reveal);

  return (
    <div className="workStages-section">
      <h2 className="workStages-section__text1">مـــراحل العـــمل</h2>
      <div className="workStages-section__text2">
        براعة التخطيط من اهم عوامل التميز والنجاح
      </div>

      <div className="workStages-section__content reveal">
        <div className="workStages-section__img_container">
          <img
            src={WorkStageImg}
            alt="FFF"
            className="workStage-section__img"
          />
          <div className="workStages-section_stage1-container">
            <div className="workStages-section__stageText">Planing</div>
          </div>

          <div className="workStages-section_stage2-container">
            <div className="workStages-section__stageText">System Design</div>
          </div>

          <div className="workStages-section_stage3-container">
            <div className="workStages-section__stageText">Implementation</div>
          </div>

          <div className="workStages-section_stage4-container">
            <div
              className="workStages-section__stageText"
              style={{ fontSize: "4rem" }}
            >
              Testing
            </div>
          </div>

          <div className="workStages-section_stage5-container">
            <div
              className="workStages-section__stageText"
              style={{ fontSize: "4rem" }}
            >
              Deployment
            </div>
          </div>
          <div className="workStages-section_stage6-container">
            <img
              src={WorkStageGuy}
              alt="FFF"
              className="workStage-section__imgGuy reveal2"
            />
            <img src={talk} alt="FFF" className="workStage-section__talk" />
          </div>
        </div>

        {/* <div className="workStage-section__imgGuyContainer">
          
        </div> */}
      </div>
    </div>
  );
};

export default WorkStages;
