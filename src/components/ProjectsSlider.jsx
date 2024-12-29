import React from 'react';
import Slider from 'react-slick';
import { PROJECT_DATA_LIST } from './assests/common/helper';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const ProjectsSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            },
        ],
    };

    return (
        <div className=" my-12 md:mb-0 md:py-12 overflow-hidden">
            <div className="text-center md:mt-16">
                        <h2 className="text-textmaincolor text-fourty font-bold"> MY PROJECTS</h2> 
                        <div className="w-40 h-1 mx-auto  bg-textmaincolor mb-12 md:mb-0 "></div>
                    </div>
            <div className='max-w-7xl mx-auto px-4 md:py-10'>
                <Slider {...settings}>
                    {PROJECT_DATA_LIST.map((obj, i) => (
                        <div key={i} className='p-4'>
                            <div className='flex flex-col'>
                                <img
                                    src={obj.image}
                                    alt={obj.title || "Project"}
                                    className="w-full md:h-[200px] h-full object-cover"
                                />
                                <h3 className="text-xl font-semibold mt-3 text-textmaincolor text-center ">
                                    {obj.title}
                                </h3>
                                <a
                                    href={obj.Link}
                                    className='p-2 mt-2 rounded-md hover:bg-rose-700 transition-all duration-700 bg-textmaincolor font-semibold text-white text-lg text-center'
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {obj.button}
                                </a>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>

    );
};

export default ProjectsSlider;
