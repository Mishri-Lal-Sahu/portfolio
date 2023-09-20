import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';


import './styles.css';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

const project = [
  {title:'project 1',link:'./',path:'1.jpg',class:'',description:'This is my first project. '},
  {title:'project 2',link:'./',path:'2.jpg',class:'',description:'This is my first project. '},
  {title:'project 3',link:'./',path:'3.jpg',class:'',description:'This is my first project. '},
  {title:'project 4',link:'./',path:'4.jpg',class:'',description:'This is my first project. '},
  {title:'project 5',link:'./',path:'5.jpg',class:'',description:'This is my first project. '}
]

export function Project() {
  return (
    <section className='swiper-project px-4 xl:px-10 bg-[#2a2c39] md:py-8 py-4 xl:py-10'>
    <div className="text-slate-400 text-lg  py-2">|| My Projects</div>
    <div className="xl:text-5xl text-2xl my-2 md:my-6 md:text-4xl text-white font-bold">My Creations For Myself.</div>
    <div className="py-14 md:px-14 px-6">
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        loop={true}
        autoplay={{
        delay: 1000, // Autoplay delay in milliseconds
        disableOnInteraction: false, // Autoplay continues even when user interacts with the slider
      }}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
      { 
      project.map((el)=>(
        <SwiperSlide>
        
<div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href={el.link}>
        <img className="rounded-t-lg" src={process.env.PUBLIC_URL +'/Images/Projects/'+el.path} alt={el.title} title={el.title}/>
    </a>
    <div class="p-5">
        <a href={el.link}>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{el.title} </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{el.description}</p>
        <a href={el.link} class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#3d3dd2] rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
             <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
    </div>
</div>

        </SwiperSlide>
      ))
      }
      </Swiper>
    </div>
    </section>
  );
}
