import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay } from 'swiper/modules';

import skills from '../components/assests/images/skills.png';
import html from '../components/assests/images/🦆 icon _HTML 5 Logo_.png';
import css from '../components/assests/images/🦆 icon _Alternate CSS3 Logo_.png';
import bootstrap from '../components/assests/images/🦆 icon _Bootstrap_.png';
import javascript from '../components/assests/images/🦆 icon _JavaScript (JS) Square_.png';
import react from '../components/assests/images/🦆 icon _React_.png';
import vector from '../components/assests/images/Vector.png';

const SkillsPage = () => {
  return (
    <div className=''>
      <div className='px-4 md:px-14 mx-auto grid grid-cols-1 md:grid-cols-2 '>
        <div data-aos="fade-down-right">
          <div className=" md:mt-16">
            <h2 className="text-textmaincolor text-fourty font-bold">SKILLS</h2>
            <div className="w-36 h-1  bg-textmaincolor  "></div>
          </div>
          <div>
            <p className='text-2xl  font-semibold mt-5'>HTML/HTML5</p>
            <input type="range" className="range-input w-[90%] accent-[#0E3C8A]" max="100" min="0" value="90" />
            <p className='text-2xl text-black font-semibold '>CSS/CSS3</p>
            <input type="range" className="range-input w-[90%] accent-[#0E3C8A]" max="100" min="0" value="80" />
            <p className='text-2xl text-black font-semibold '>TaILWINDCSS</p>
            <input type="range" className="range-input w-[90%] accent-[#0E3C8A]" max="100" min="0" value="85" />
            <p className='text-2xl text-black font-semibold '>BOOTSTRAP</p>
            <input type="range" className="range-input w-[90%] accent-[#0E3C8A]" max="100" min="0" value="75" />
            <p className='text-2xl text-black font-semibold '>REACT JS</p>
            <input type="range" className="range-input w-[90%] accent-[#0E3C8A]" max="100" min="0" value="90" />
          </div>
        </div>
        <div className='flex justify-center items-center'>
          <img src={skills} alt="skills" className='w-[400px] my-5 md:my-0' />
        </div>
      </div>

      {/* Swiper Slider */}
      <div className='bg-background mt-10'>
        <div className='max-w-7xl mx-auto px-4 md:px-14 lg:px-6 md:py-4'>
          <Swiper
            spaceBetween={20}
            slidesPerView={4}
            loop={true}
            autoplay={{
              delay: 1000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            breakpoints={{
              320: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 40,
              },
            }}
          >
            {/* Slides */}
            {[html, css, bootstrap, react, vector, bootstrap, html, javascript, css, react, html, bootstrap, vector].map(
              (src, index) => (
                <SwiperSlide key={index}>
                  <div className='flex justify-center items-center py-3'>
                    <img src={src} alt={`Slide ${index}`} className='w-[100px]' />
                  </div>
                </SwiperSlide>
              )
            )}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default SkillsPage;
