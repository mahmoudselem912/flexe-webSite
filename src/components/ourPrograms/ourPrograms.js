import React, { useState } from "react";
import lapTop from "../../assets/laptopIcon.png";
import EInvoice from "../../assets/blackMan.jpg";
import EReceipt from "../../assets/bg2.jpg";

import "./ourPrograms.css";

const initialState = {
  EInvoice: {
    img: EInvoice,
    show: false,
    color: "black",
  },
  EReceipt: {
    img: EReceipt,
    show: false,
    color: "black",
  },
};

const startState = {
  EInvoice: {
    img: EInvoice,
    show: true,
    color: "rgb(32, 81, 145)",
  },
  EReceipt: {
    img: EReceipt,
    show: false,
    color: "black",
  },
};

const OurPrograms = () => {
  const [display, setDisplay] = useState(startState);

  const toggle = (state) => {
    switch (state) {
      case "EInvoice":
        setDisplay({
          ...initialState,
          EInvoice: {
            ...display.EInvoice,
            show: true,
            color: "rgb(32, 81, 145)",
          },
        });
        break;
      case "EReceipt":
        setDisplay({
          ...initialState,
          EReceipt: {
            ...display.EReceipt,
            show: true,
            color: "rgb(32, 81, 145)",
          },
        });
        break;
      default:
        break;
    }
  };

  return (
    <div className="ourPrograms-section">
      <h2 className="ourPrograms-section__header">بــرامجـــنــــا</h2>
      <div className="ourPrograms-section__content">
        <div className="lapTop-container">
          <img src={lapTop} alt="FFF" className="lapTop-icon" />
          {display.EInvoice.show ? (
            <img
              src={display.EInvoice.img}
              alt="FFF"
              className="lapTop_content"
            />
          ) : null}
          {display.EReceipt.show ? (
            <img
              src={display.EReceipt.img}
              alt="FFF"
              className="lapTop_content"
            />
          ) : null}
        </div>

        <div className="ourPrograms-section__programs">
          <div
            className="program-container"
            onClick={() => toggle("EInvoice")}
            style={{ color: display.EInvoice.color }}
          >
            الفاتورة الالكترونية
          </div>
          <div
            className="program-container"
            onClick={() => toggle("EReceipt")}
            style={{ color: display.EReceipt.color }}
          >
            الايصال الالكترونى
          </div>
          <div className="program-container">ERP برنامج محاسبات </div>
          <div className="program-container">mini ERP</div>
          <div className="program-container">HR برنامج ادارة موارد بشرية</div>
          <div className="program-container">Pay Roll</div>
        </div>
      </div>
    </div>
  );
};

export default OurPrograms;
