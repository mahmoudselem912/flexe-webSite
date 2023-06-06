import React, { useCallback, useEffect, useState } from "react";
import flexeProfile from "../../assets/flexeprofile.mp4";
import "./importantPoints.css";


const ImportantPoints = () => {
  const [scale, setScale] = useState(1);

  const [y, setY] = useState(document.scrollingElement.scrollHeight);
  const [scrollDirection, setScrollDirection] = useState(
    "you have not scrolled yet"
  );

  const handleNavigation = useCallback(
    (e) => {
      if (y > window.scrollY) {
        setScrollDirection("Scrolling Up");
        let scrollTop = window.scrollY;
        let minHeight = 1 + scrollTop / 1000;
        let right = scrollTop;
        let logoHeight = Math.min(minHeight, right);

        if (logoHeight > 1.5) {
          setScale(1.5);
        } else if (logoHeight < 1) {
          setScale(1);
        } else {
          setScale(logoHeight);
        }
      } else if (y < window.scrollY) {
        setScrollDirection("Scrolling Down");
        let scrollTop = window.scrollY;
        let minHeight = 1;
        let right = 1 + scrollTop / 1000;
        let logoHeight = Math.max(minHeight, right);

        if (logoHeight > 1.5) {
          setScale(1.5);
        } else if (logoHeight < 1) {
          setScale(1);
        } else {
          setScale(logoHeight);
        }
      }
      setY(window.scrollY);
    },
    [y]
  );

  useEffect(() => {
    window.addEventListener("scroll", handleNavigation);

    return () => {
      window.removeEventListener("scroll", handleNavigation);
    };
  }, [handleNavigation]);

  // window.addEventListener('scroll', () => {

  // })

  return (
    <div className="video-container">
      <video
        loop
        muted
        autoPlay
        className="video"
        style={{ transform: `scale( ${scale})` }}
      >
        <source src={flexeProfile} type="video/webm"></source>
      </video>
    </div>
  );
};

export default ImportantPoints;
