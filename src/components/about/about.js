import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./about.css";
import orangeBg from "../../assets/white.png";

const About = () => {
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

  //   window.addEventListener('scroll', () => {
  //     let scrollTop = window.scrollY,
  //             minHeight = -200,
  //             logoHeight = Math.max(minHeight, 0 - scrollTop);
  //     console.log(logoHeight)
  //     if(logoHeight > 0){
  //         setMargin(0)
  //     }else if(logoHeight < -200) {
  //         setMargin(-200)
  //     }else{
  //         setMargin(logoHeight)
  //     }
  // })

  return (
    <div className="about-section">
      <img src={orangeBg} alt="FFF" className="about-section__whitebg" />
      <div className="carousel-container">
        <Carousel
          responsive={responsive}
          autoPlay
          infinite
          autoPlaySpeed={1800}
        >
          <div className="about-section__card__container">
            <div className="about-section_card ourOffers">
              <div className="about-section__content">
                <div className="about-section_card__text1">
                  الزوار شاهدوا ايضا
                </div>
                <div className="about-section_card__text2">عروضنا المميزة</div>
                <a href="#" className="about-section_card__button">
                  تعرف على المزيد
                </a>
              </div>
            </div>
          </div>

          <div className="about-section__card__container">
            <div className="about-section_card ourServices">
              <div className="about-section__content">
                <div className="about-section_card__text1">
                  الزوار شاهدوا ايضا
                </div>
                <div className="about-section_card__text2">خدماتنـــا</div>
                <a href="#" className="about-section_card__button">
                  تعرف على المزيد
                </a>
              </div>
            </div>
          </div>

          <div className="about-section__card__container">
            <div className="about-section_card ourProgramms">
              <div className="about-section__content">
                <div className="about-section_card__text1">
                  الزوار شاهدوا ايضا
                </div>
                <div className="about-section_card__text2">برامجنـــا</div>
                <a href="#" className="about-section_card__button">
                  تعرف على المزيد
                </a>
              </div>
            </div>
          </div>

          <div className="about-section__card__container">
            <div className="about-section_card ourClients">
              <div className="about-section__content">
                <div className="about-section_card__text1">
                  الزوار شاهدوا ايضا
                </div>
                <div className="about-section_card__text2">عمـــــلاؤنا</div>
                <a href="#" className="about-section_card__button">
                  تعرف على المزيد
                </a>
              </div>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default About;
