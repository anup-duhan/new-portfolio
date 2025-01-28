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
        <section className="my-12 md:mb-0 md:py-12 overflow-hidden" aria-labelledby="projects-slider-heading">
            <div className="text-center md:mt-16">
                <h2 id="projects-slider-heading" className="text-textmaincolor text-fourty font-bold">
                    MY PROJECTS
                </h2>
                <div className="w-40 h-1 mx-auto bg-textmaincolor mb-12 md:mb-0"></div>
            </div>
            <div className="max-w-7xl mx-auto px-4 md:py-10">
                <Slider {...settings} aria-live="polite" role="region" aria-describedby="projects-slider-heading">
                    {PROJECT_DATA_LIST.map((obj, i) => (
                        <div key={i} className="p-4" role="listitem">
                            <div className="flex flex-col">
                                <img
                                    src={obj.image}
                                    alt={obj.title ? `Screenshot of ${obj.title} project` : "Project image"}
                                    className="w-full md:h-[200px] h-full object-cover"
                                    loading="lazy"
                                    decoding="async"
                                    aria-describedby={`project-${i}-description`}
                                />
                                <h3 className="text-xl font-semibold mt-3 text-textmaincolor text-center">
                                    {obj.title}
                                </h3>
                                <a
                                    href={obj.Link}
                                    className="p-2 mt-2 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded-md hover:from-pink-500 hover:via-red-500 hover:to-yellow-500 transition-all duration-500 font-semibold text-white text-lg text-center"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    title={`Visit the ${obj.title} project`}
                                    aria-label={`Link to ${obj.title} project`}
                                >
                                    {obj.button}
                                </a>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
};

export default ProjectsSlider;
