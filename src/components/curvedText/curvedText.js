import React from "react";
import "./curvedText.css";

function CurvedText({ text, arc, radius }) {
  const characters = text.split("");
  const degree = arc / characters.length;

  return (
    <div className="curved-text">
      {characters.map((char, i) => (
        <span
          key={`heading-span-${i}`}
          style={{
            height: `${radius}px`,
            transform: `rotate(${degree * i - arc / 2}deg)`,
            transformOrigin: `0 ${radius}px 0`,
          }}
        >
          {char}
        </span>
      ))}
    </div>
  );
}

export default CurvedText;
