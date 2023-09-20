import React from "react";
import CountUp from "react-countup";

export default function Count({ number, title, className}) {
  return (
    <div className="md:ml-6 ml-2">
      <h1 className="mb-0 text-xl md:text-5xl"><CountUp duration={10} className={className} end={number} />+</h1>
      <span className="text-[#858792] text-lg">{title}</span>
    </div>
  );
}