import React from "react";
import "./footer.css";
import { AiFillHome } from "react-icons/ai";
import { IconContext } from "react-icons";
import { FaPhone } from "react-icons/fa";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import RequestDemo from "../requestDemo/requestDemo";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__content">
        <div className="addresses_container">
          <div className="address__header">عناوين الشركة</div>
          <div className="address">
            <IconContext.Provider value={{ color: "white", size: "20px" }}>
              <div>
                <AiFillHome />
              </div>
            </IconContext.Provider>
            <div>ش محمد كامل حسين - النزهة الجديدة</div>
          </div>
          <div className="address">
            <IconContext.Provider value={{ color: "white", size: "20px" }}>
              <div>
                <AiFillHome />
              </div>
            </IconContext.Provider>
            <div>9 ش المدينة المنورة - شبرا الخيمة</div>
          </div>

          <div className="address">
            <IconContext.Provider value={{ color: "white", size: "20px" }}>
              <div>
                <AiFillHome />
              </div>
            </IconContext.Provider>
            <div>
              شارع محمد رشيد رضا - جنوب الرياض الدار البيضاء - المملكة العربية
              السعودية
            </div>
          </div>

          <div className="contacts">
            <div className="phone">
              <IconContext.Provider value={{ color: "white", size: "20px" }}>
                <div>
                  <FaPhone />
                </div>
                <div className="phone_number">01013409434 (2+)</div>
              </IconContext.Provider>
            </div>

            <div className="phone">
              <IconContext.Provider value={{ color: "white", size: "20px" }}>
                <div>
                  <FaPhone />
                </div>
                <div className="phone_number">01127791586 (2+)</div>
              </IconContext.Provider>
            </div>
          </div>

          <div className="contacts" style={{ marginTop: "0" }}>
            <div className="phone">
              <IconContext.Provider value={{ color: "white", size: "20px" }}>
                <div>
                  <FaPhone />
                </div>
                <div className="phone_number">01127790498 (2+)</div>
              </IconContext.Provider>
            </div>

            <div className="phone">
              <IconContext.Provider value={{ color: "white", size: "20px" }}>
                <div>
                  <FaPhone />
                </div>
                <div className="phone_number">0546223726</div>
              </IconContext.Provider>
            </div>
          </div>
        </div>

        <RequestDemo />

        <div className="icons-container">
          <div className="icon-container">
            <IconContext.Provider value={{ color: "white", size: "50px" }}>
              <div>
                <BsYoutube />
              </div>
            </IconContext.Provider>
          </div>

          <div className="icon-container">
            <IconContext.Provider value={{ color: "white", size: "50px" }}>
              <div>
                <BsLinkedin />
              </div>
            </IconContext.Provider>
          </div>

          <div className="icon-container">
            <IconContext.Provider value={{ color: "white", size: "50px" }}>
              <div>
                <BsTwitter />
              </div>
            </IconContext.Provider>
          </div>

          <div className="icon-container">
            <IconContext.Provider value={{ color: "white", size: "50px" }}>
              <div>
                <BsInstagram />
              </div>
            </IconContext.Provider>
          </div>

          <div className="icon-container">
            <IconContext.Provider value={{ color: "white", size: "50px" }}>
              <div>
                <BsFacebook />
              </div>
            </IconContext.Provider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
