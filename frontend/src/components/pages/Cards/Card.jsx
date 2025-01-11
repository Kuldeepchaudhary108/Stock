import React from "react";

const Card = ({ bgColor, icon, title }) => {
  return (
    <>
      <div
        className={`w-56 h-44 flex flex-col justify-center dark:bg-slate-400 cursor-pointer items-center rounded-lg shadow-lg transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl`}
      >
        <div
          className={` w-56 h-28 flex justify-center items-center rounded-t-lg top-0 absolute`}
          style={{ backgroundColor: bgColor }}
        >
          <img src={icon} alt={title} className="h-10" />
        </div>
        <p className="text-black absolute top-2/3 font-medium mt-2 dark:text-white  rounded-lg">
          {title}
        </p>
      </div>
    </>
  );
};

export { Card };
