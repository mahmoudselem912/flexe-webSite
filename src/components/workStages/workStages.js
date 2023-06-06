import React from "react";
import "./workStages.css";
import icon from "../../assets/butterFly.png";
import WorkStageImg from "../../assets/workStages.png";

const WorkStages = () => {
  function reveal() {
    var reveals = document.querySelectorAll(".workStages-section__grid");
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
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

      <div className="workStages-section__content">
        <div className="workStages-section__img_container">
          <img
            src={WorkStageImg}
            alt="FFF"
            className="workStage-section__img"
          />
          <div className="workStages-section_stage1-container">
            <div className="workStages-section__stage1Text">
              Planing and Requirments analysis
            </div>
          </div>

          <div className="workStages-section_stage2-container">
            <div className="workStages-section__stage2Text">
              <span className="char1">S</span>
              <span className="char2">y</span>
              <span className="char3">s</span>
              <span className="char4">t</span>
              <span className="char5">e</span>
              <span className="char6">m</span>
              <span className="char7"> D</span>
              <span className="char8">e</span>
              <span className="char9">s</span>
              <span className="char10">i</span>
              <span className="char11">g</span>
              <span className="char12">n</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default WorkStages;
