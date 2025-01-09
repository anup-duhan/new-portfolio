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
        <div className="mt-6 md:mt-0">
            <div className="text-center md:mt-16">
                <h2 className="text-textmaincolor text-fourty font-bold">SERVICES</h2>
                <div className="w-40 h-1 mx-auto bg-textmaincolor"></div>
            </div>
            <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 py-8 gap-3">
                {CARDS_DATA_LIST.slice(0, visibleCards).map((obj, i) => (
                    <div
                        key={i}
                        className="shadow-custom-red px-7 py-10 rounded-lg gap-4 flex justify-start flex-col bg-white transition-transform  duration-500 transform hover:scale-105 hover:shadow-base hover:shadow-rose-700 cursor-pointer"
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
                        className={`px-10 py-3 rounded-lg shadow-lg text-white ${
                            isLoading
                                ? 'bg-red-600 px-10 py-3 cursor-not-allowed'
                                : 'bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded-md hover:from-pink-500 hover:via-red-500 hover:to-yellow-500 transition-all duration-300'
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
