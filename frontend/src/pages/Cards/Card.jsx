// components/Card.jsx
import React from "react";

const Card = ({ bgColor, icon, title }) => {
  return (
    <>
      <div
        className={`w-56 h-44 flex flex-col justify-center cursor-pointer items-center rounded-lg shadow-lg transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl`}
      >
        <div
          className={` w-56 h-28 flex justify-center items-center rounded-t-lg`}
          style={{ backgroundColor: bgColor }}
        >
          <img src={icon} alt={title} className="h-10" />
        </div>
        <p className="text-black font-medium mt-2 rounded-lg">{title}</p>
      </div>
    </>
  );
};

export { Card };
