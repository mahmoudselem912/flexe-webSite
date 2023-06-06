import React from "react";
import "./ourClients.css";
import Carousel from "react-multi-carousel";
import CPCLogo from "../../assets/CPCLogo.png";
import NikeLogo from "../../assets/nikeLogo.png";
import AdidasLogo from "../../assets/adidasLogo.png";

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
      logo: NikeLogo,
      company_name: "Nike",
    },
    {
      logo: AdidasLogo,
      company_name: "Adidas",
    },
  ];

  return (
    <div className="ourClients-section">
      <div className="ourClients-section__info-container">
        <div className="ourClients-section__text-container">
          <div className="ourClients-section__text">
            اكتر من 7000 عميل وثقوا فى خدماتنا وبرامجنا بكل ثقة على مدار 13سنة
          </div>
          <div className="horizontal-line"></div>
        </div>
      </div>

      <h2 className="ourClients-section__header">عمـــلاؤنـــا</h2>
      <Carousel responsive={responsive} autoPlay infinite autoPlaySpeed={2000}>
        {clients.map((client) => (
          <div className="ourClient-container">
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
