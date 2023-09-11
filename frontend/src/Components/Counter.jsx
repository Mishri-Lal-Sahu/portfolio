import React from 'react'
import {GrLanguage} from 'react-icons/gr'
import Count from './Assets/counter'

export default function Counter() {
  return (
    <section className="counter px-4 bg-[#282a37] py-10 xl:px-10">
        <div className="grid grid-flow-col grid-cols-3 justify-between">
           <div className="col-span-1 md:p-6 p-4 flex text-white md:text-3xl">
             <span className='p-4 border-[1px] md:ml-4 rounded-sm border-[#40424d]' ><GrLanguage className='text-white' /></span>
             <Count number={7} title={'Languages'} />
           </div>
           <div className="col-span-1 md:p-6 p-4 md:ml-4 flex text-white md:text-3xl">
             <span className='p-4 border-[1px] rounded-sm border-[#40424d]' ><GrLanguage className='text-white' /></span>
             <Count number={7} title={'Languages'} /></div>
           <div className="col-span-1 md:p-6 p-4 md:ml-4 flex text-white md:text-3xl">
             <span className='p-4 border-[1px] rounded-sm border-[#40424d]' ><GrLanguage className='text-white' /></span>
             <Count number={7} title={'Languages'} />
           </div>
        </div>
    </section>
  )
}
