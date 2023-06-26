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
import { BsWhatsapp } from "react-icons/bs";
import RequestDemo from "../requestDemo/requestDemo";
import whiteIcon from "../../assets/IconWhite.png";
import { FaCopyright } from "react-icons/fa";
import DropDown from "../dropDown/dropDow";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer__content">
        <div className="addresses_container">
          <div className="address__header">عناوين الشركة</div>
          <div className="address">
            <IconContext.Provider value={{ color: "white", size: "2rem" }}>
              <div>
                <AiFillHome />
              </div>
            </IconContext.Provider>
            <div>ش محمد كامل حسين - النزهة الجديدة</div>
          </div>
          <div className="address">
            <IconContext.Provider value={{ color: "white", size: "2rem" }}>
              <div>
                <AiFillHome />
              </div>
            </IconContext.Provider>
            <div>9 ش المدينة المنورة - شبرا الخيمة</div>
          </div>

          <div className="address">
            <IconContext.Provider value={{ color: "white", size: "2rem" }}>
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
              <IconContext.Provider value={{ color: "white", size: "2rem" }}>
                <div>
                  <FaPhone />
                </div>
                <div className="phone_number">01013409434 (2+)</div>
              </IconContext.Provider>
            </div>

            <div className="phone">
              <IconContext.Provider value={{ color: "white", size: "2rem" }}>
                <div>
                  <FaPhone />
                </div>
                <div className="phone_number">01127791586 (2+)</div>
              </IconContext.Provider>
            </div>
          </div>

          <div className="contacts" style={{ marginTop: "0" }}>
            <div className="phone">
              <IconContext.Provider value={{ color: "white", size: "2rem" }}>
                <div>
                  <FaPhone />
                </div>
                <div className="phone_number">01127790498 (2+)</div>
              </IconContext.Provider>
            </div>

            <div className="phone">
              <IconContext.Provider value={{ color: "white", size: "2rem" }}>
                <div>
                  <FaPhone />
                </div>
                <div className="phone_number">0546223726</div>
              </IconContext.Provider>
            </div>
          </div>
        </div>

        <RequestDemo />
        <div className="whiteIcon-container">
          <img src={whiteIcon} alt="FFF" className="whiteIcon" />
        </div>
        <div></div>

        <div className="bottom-container">
          <div style={{ display: "flex", flexDirection: "column", gap: "2vw" }}>
            <div className="icons-container">
              <div className="icon-container">
                <IconContext.Provider value={{ color: "white", size: "3rem" }}>
                  <div>
                    <BsYoutube />
                  </div>
                </IconContext.Provider>
              </div>

              <div className="icon-container">
                <IconContext.Provider value={{ color: "white", size: "3rem" }}>
                  <div>
                    <a
                      href="https://wa.me/01141467046"
                      target="_blank"
                    >
                      <BsWhatsapp />
                    </a>
                  </div>
                </IconContext.Provider>
              </div>

              <div className="icon-container">
                <IconContext.Provider value={{ color: "white", size: "3rem" }}>
                  <div>
                    <a
                      href="https://www.linkedin.com/company/93383302/admin/?feedType=following"
                      target="_blank"
                    >
                      <BsLinkedin />
                    </a>
                  </div>
                </IconContext.Provider>
              </div>

              {/* <div className="icon-container">
                <IconContext.Provider value={{ color: "white", size: "3rem" }}>
                  <div>
                    <BsTwitter />
                  </div>
                </IconContext.Provider>
              </div> */}

              {/* <div className="icon-container">
                <IconContext.Provider value={{ color: "white", size: "3rem" }}>
                  <div>
                    <BsInstagram />
                  </div>
                </IconContext.Provider>
              </div> */}

              <div className="icon-container">
                <IconContext.Provider value={{ color: "white", size: "3rem" }}>
                  <div>
                    <a
                      href="https://www.facebook.com/profile.php?id=100090874748456&mibextid=ZbWKwL"
                      target="_blank"
                    >
                      <BsFacebook />
                    </a>
                  </div>
                </IconContext.Provider>
              </div>
            </div>
            <div className="copyRight">
              <div className="coyRight-text">FLEXE SOFT@2023</div>
              <IconContext.Provider value={{ color: "white", size: "2.4rem" }}>
                <div>
                  <FaCopyright />
                </div>
              </IconContext.Provider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
