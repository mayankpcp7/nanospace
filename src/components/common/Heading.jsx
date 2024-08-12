import React from "react";

const Heading = ({ HeadingText, className = "" }) => {
  return (
    <h2
      className={`font-orbitron font-bold leading-120 text-custom-sm sm:text-custom-md custom-xl md:text-custom-lg xl:text-2xl ${className}`}
    >
      {HeadingText}
    </h2>
  );
};

export default Heading;
