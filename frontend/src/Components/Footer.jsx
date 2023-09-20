import React from 'react';
import {AiOutlineCopyright} from 'react-icons/ai';

export const Footer = () => {
  return (
    <div className='bg-[#2a2c39] text-center'>
         <div className="mx-auto max-w-[1340px]">
            <p className="items-center mx-auto flex text-gray-600 py-4 text-sm md:text-xl">Created By &nbsp;<span className="text-white">MISHRI LAL SAHU</span> &nbsp;|&nbsp; <AiOutlineCopyright className='text-md items-center md:text-2xl'/>2023</p>
         </div>
    </div>
  )
}
