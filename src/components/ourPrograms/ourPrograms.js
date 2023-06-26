import React, { useState } from "react";
import lapTop from "../../assets/laptopIcon.png";
import EInvoice from "../../assets/ourProgram_EInvoice.jpg";
import EReceipt from "../../assets/ourProgram_EReceipt.webp";
import ERP from "../../assets/ourProgram_ERP.png";
import miniERP from "../../assets/miniERP.webp";
import HR from "../../assets/HR.jpg";
import payRoll from "../../assets/payRoll.webp";
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
  ERP: {
    img: ERP,
    show: false,
    color: "black",
  },
  HR: {
    img: HR,
    show: false,
    color: "black",
  },
  miniERP: {
    img: miniERP,
    show: false,
    color: "black",
  },
  payRoll: {
    img: payRoll,
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
  ERP: {
    img: ERP,
    show: false,
    color: "black",
  },
  HR: {
    img: HR,
    show: false,
    color: "black",
  },
  miniERP: {
    img: miniERP,
    show: false,
    color: "black",
  },
  payRoll: {
    img: payRoll,
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
      case "HR":
        setDisplay({
          ...initialState,
          HR: {
            ...display.HR,
            show: true,
            color: "rgb(32, 81, 145)",
          },
        });
        break;
      case "ERP":
        setDisplay({
          ...initialState,
          ERP: {
            ...display.ERP,
            show: true,
            color: "rgb(32, 81, 145)",
          },
        });
        break;
      case "miniERP":
        setDisplay({
          ...initialState,
          miniERP: {
            ...display.miniERP,
            show: true,
            color: "rgb(32, 81, 145)",
          },
        });
        break;
      case "payRoll":
        setDisplay({
          ...initialState,
          payRoll: {
            ...display.payRoll,
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
          <div className="firstImageCon">
            <img src={lapTop} alt="FFF" className="lapTop-icon" />
          </div>

          <div className="secondImageCon">
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
            {display.HR.show ? (
              <img src={display.HR.img} alt="FFF" className="lapTop_content" />
            ) : null}
            {display.ERP.show ? (
              <img src={display.ERP.img} alt="FFF" className="lapTop_content" />
            ) : null}
            {display.miniERP.show ? (
              <img
                src={display.miniERP.img}
                alt="FFF"
                className="lapTop_content"
              />
            ) : null}
            {display.payRoll.show ? (
              <img
                src={display.payRoll.img}
                alt="FFF"
                className="lapTop_content"
              />
            ) : null}
          </div>
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
          <div
            className="program-container"
            onClick={() => toggle("ERP")}
            style={{ color: display.ERP.color }}
          >
            ERP برنامج محاسبات
          </div>
          <div
            className="program-container"
            onClick={() => toggle("miniERP")}
            style={{ color: display.miniERP.color }}
          >
            mini ERP
          </div>
          <div
            className="program-container"
            onClick={() => toggle("HR")}
            style={{ color: display.HR.color }}
          >
            HR برنامج ادارة موارد بشرية
          </div>
          <div
            className="program-container"
            onClick={() => toggle("payRoll")}
            style={{ color: display.payRoll.color }}
          >
            Pay Roll
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurPrograms;
