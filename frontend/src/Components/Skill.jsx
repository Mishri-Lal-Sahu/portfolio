import React from 'react'
import { FiDownload } from "react-icons/fi";
import ProgressBar from './Assets/ProgressBar'

export default function Skill() {
  return (
    <section className="skill bg-[#252734] px-4 py-10 xl:px-10 ">
       <div className="grid grid-flow-col md:grid-cols-2 grid-cols-1 md:max-w-[70em] mx-auto items-center ">
            <div className="col-span-1 p-6 md:p-10">
                <div className="text-slate-400 text-lg  py-2">|| My Skills</div>
                <div className="xl:text-5xl text-2xl my-2 md:my-6 md:text-4xl text-white font-bold">My Special Skill Field Here.</div>
                <div className="flex my-4">
                    <a
                        href="./../../public/mishri-lal-sahu-resume.pdf"
                        download
                        className="border-[1px] py-2 md:py-4 md:my-4 border-slate-400 flex leading-4 rounded-[2.75rem] px-4 md:px-8 text-[10px] md:text-base text-slate-300"
                    >
                        Get Resume <FiDownload className="ml-[10px]" />
                    </a>
                </div>
            </div>
            <div className="col-span-1 p-6 md:py-0 md:p-10">
                <div className="p-6 pt-0">
                    <ProgressBar className={'bg-[#2a2c39] p-8'} value={80} label="Communication" color='#3d3dd2' height={5} />
                </div>
                <div className="p-6 pt-0">
                    <ProgressBar className={'bg-[#2a2c39] p-8'} value={40} label="App Development" color='#3d3dd2' height={5} />
                </div>
                <div className="p-6 pt-0">
                    <ProgressBar className={'bg-[#2a2c39] p-8'} value={100} label="Web Development" color='#3d3dd2' height={5} />
                </div>
                <div className="p-6 pt-0">
                    <ProgressBar className={'bg-[#2a2c39] p-8'} value={60} label="Leadership" color='#3d3dd2' height={5} />
                </div>
                
            </div>
       </div>
    </section>
  )
}
