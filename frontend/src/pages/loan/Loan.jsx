import React from "react";

export default function Loan() {
  return (
    <div className="relative w-full">
      <img
        src="/elements/loan.jpg"
        alt="Loan Image"
        className="w-full h-auto object-cover"
      />
      <div className="absolute top-[82px] left-20 w-[550px] h-10 bg-[#ffffff] flex items-center justify-center"></div>
      <button className="absolute w-24 h-9 right-56 top-[472px] bg-[#1b61c3] text-teal-50 text-center text-lg font-medium hover:bg-[#154D9A] rounded-lg">
        SUBMIT rounded-lg
      </button>
      <button className="absolute w-24 h-9 right-28 top-[470px] bg-red-700 text-teal-50 text-center text-lg font-medium hover:bg-red-800 rounded-lg">
        CANCEL
      </button>
    </div>
  );
}
