import React from 'react'
import Count from './Assets/counter'
import {HiOutlineLanguage} from 'react-icons/hi2'
import {GiFilmProjector} from 'react-icons/gi'
import {BsCalendarWeek} from 'react-icons/bs'

export default function Counter() {
  return (
    <section className="counter  px-4 bg-[#282a37] py-10 xl:px-20">
        <div className="grid grid-flow-col grid-cols-3 justify-between">
           <div className="col-span-1 md:p-6 p-4 flex text-white ">
            <div className='p-4'> <span className=' border-[1px] p-3 flex justify-center item-center rounded-lg border-[#40424d]' ><HiOutlineLanguage className="md:text-3xl" /></span></div>
             <Count number={7} title={'Languages'} />
           </div>
           <div className="col-span-1 md:p-6 p-4 flex text-white ">
             <div className='p-4 '><span className='border-[1px] p-3 flex justify-center item-center rounded-lg border-[#40424d] text-white' ><GiFilmProjector className="md:text-3xl"  /></span></div>
             <Count number={25} title={'Projects'} /></div>
           <div className="col-span-1  md:p-6 p-4  flex text-white ">
             <div className='p-4 '><span className=' flex justify-center item-center p-3 border-[1px] rounded-lg text-white border-[#40424d]' ><BsCalendarWeek className="md:text-3xl" /></span></div>
             <Count number={1} title={'Year'} />
           </div>
        </div>
    </section>
  )
}
