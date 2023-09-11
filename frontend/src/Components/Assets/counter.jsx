import React from "react";
import CountUp from "react-countup";

export default function Count({ number, title, className}) {
  return (
    <div className="number">
      <h1><CountUp duration={10} className={className} end={number} />+</h1>
      <span className="text-[#858792] text-sm">{title}</span>
    </div>
  );
}