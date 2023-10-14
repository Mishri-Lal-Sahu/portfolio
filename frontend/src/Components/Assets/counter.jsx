import React from "react";
import CountUp from "react-countup";

export default function Count({ number, title, className}) {
  return (
    <div className="md:ml-6 ">
      <h1 className="mb-0 text-xl md:text-2xl xl:text-5xl"><CountUp duration={10} className={className} end={number} />+</h1>
      <span className="text-[#858792] text-sm md:text-md xl:text-lg">{title}</span>
    </div>
  );
}