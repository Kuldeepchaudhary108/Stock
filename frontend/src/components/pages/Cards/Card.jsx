import React from "react";

const Card = ({ bgColor, icon, title }) => {
  return (
    <div className="w-56 h-44 m-auto flex flex-col justify-center items-center rounded-lg shadow-lg transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl dark:bg-zinc-800 dark:text-white cursor-pointer">
      <div
        className="w-56 h-28 flex justify-center items-center rounded-t-lg absolute top-0"
        style={{ backgroundColor: bgColor }}
      >
        <img src={icon} alt={title} className="h-10" />
      </div>
      <p className="text-center font-medium mt-20 dark:text-white text-gray-800">
        {title}
      </p>
    </div>
  );
};

export { Card };
