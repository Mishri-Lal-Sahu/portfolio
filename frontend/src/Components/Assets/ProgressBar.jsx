import React from 'react'

function ProgressBar({value,className,label,color, height}) {

  return (
    <div className={className}>
      <div className="text-[#858792] pb-4 flex justify-between"><span>{label}</span> <span>{value}%</span></div>
      <div className="bg-[rgba(255,255,255,.1)]" style={{height:height+'px'}}>
         <div className="transition-[width] duration-[3s] w-0" style={{width:value+'%',backgroundColor:color,height:'100%'}}></div>
      </div>
    </div>
  )
}


export default ProgressBar

