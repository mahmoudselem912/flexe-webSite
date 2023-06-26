import React from "react";
import "./ourClients.css";
import Carousel from "react-multi-carousel";
import CPCLogo from "../../assets/cpc.png";
import CiraLogo from "../../assets/cira.png";
import FrankeLogo from "../../assets/franke.png";
import MarbellaLogo from '../../assets/marbella.png'
import EagleLogo from '../../assets/eagle.png'
import AlaminLogo from '../../assets/alamin.png'

const moment = require('moment')

const OurClients = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 400, min: 0 },
      items: 1,
    },
  };

  const clients = [
    {
      logo: CPCLogo,
      company_name: "شركة التعاون للبترول",
    },
    {
      logo: CiraLogo,
      company_name: "Cira Education",
    },
    {
      logo: FrankeLogo,
      company_name: "Franke",
    },
    {
      logo: MarbellaLogo,
      company_name: "Marbella"
    },
    {
      logo: EagleLogo,
      company_name: "Eagle"
    },
    {
      logo: AlaminLogo,
      company_name: "Alamin"
    }
  ];

  return (
    <div className="ourClients-section" id="clients">
      <div className="ourClients-section__info-container">
        <div className="ourClients-section__text-container">
          <div className="ourClients-section__text">
            اكتر من 200 عميل وثقوا فى خدماتنا وبرامجنا بكل ثقة على مدار {+moment(new Date()).format("YYYY") - 2020} سنين
          </div>
          <div className="horizontal-line"></div>
        </div>
      </div>

      <h2 className="ourClients-section__header">كبــار عمــلاؤنا </h2>
      <Carousel responsive={responsive} autoPlay infinite autoPlaySpeed={2000}>
        {clients.map((client,i) => (
          <div className="ourClient-container" key={i}>
            <img src={client.logo} alt="FFF" className="ourClient-logo" />{" "}
            <div>
              <div className="ourClient-name">{client.company_name}</div>
            </div>
          </div>
        ))}
      </Carousel>

      
    </div>
  );
};

export default OurClients;
