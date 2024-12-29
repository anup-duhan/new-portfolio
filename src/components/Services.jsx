import React, { useState } from 'react';
import { CARDS_DATA_LIST } from './assests/common/helper';

const Services = () => {
    const [visibleCards, setVisibleCards] = useState(4); 
    const [isLoading, setIsLoading] = useState(false); 

    const handleLoadMore = () => {
        setIsLoading(true);
        setTimeout(() => {
            setVisibleCards((prev) => prev + 4); 
            setIsLoading(false);
        }, 1500);
    };

    return (
        <div className="">
            <div className="text-center md:mt-16">
                <h2 className="text-textmaincolor text-fourty font-bold">SERVICES</h2>
                <div className="w-40 h-1 mx-auto bg-textmaincolor"></div>
            </div>
            <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 py-8 gap-10">
                {CARDS_DATA_LIST.slice(0, visibleCards).map((obj, i) => (
                    <div
                        key={i}
                        className="shadow-custom-red px-7 py-10 rounded-lg gap-4 flex justify-start flex-col bg-white transition-transform  duration-500 transform hover:scale-105 hover:shadow-lg hover:shadow-rose-700 cursor-pointer"
                        data-aos="zoom-in">
                        <img
                            src={obj.image}
                            alt="webdesign"
                            className="max-w-[350px] h-[150px] rounded-lg transition-transform transform hover:scale-110"
                        />
                        <h1 className="text-2xl text-buttoncolor font-bold hover:text-rose-700 transition-all duration-300">
                            {obj.title}
                        </h1>
                        <p className="text-lightblack text-xl font-semibold leading-tight hover:text-maincolor transition-all duration-300">
                            {obj.description}
                        </p>
                    </div>
                ))}
            </div>
            {visibleCards < CARDS_DATA_LIST.length && (
                <div className="text-center">
                    <button
                        onClick={handleLoadMore}
                        className={`px-6 py-2 rounded-lg shadow-lg text-white ${
                            isLoading
                                ? 'bg-gray-400 px-10 py-4 cursor-not-allowed'
                                : 'bg-maincolor px-10 py-4 hover:bg-rose-700 hover:shadow-rose-700 transition-all duration-500'
                        }`}
                        disabled={isLoading} // Disable the button while loading
                    >
                        {isLoading ? 'Loading...' : 'Load More'}
                    </button>
                </div>
            )}
        </div>
    );
};

export default Services;
