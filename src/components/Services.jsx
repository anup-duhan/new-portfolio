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
            <h2 className="text-fourty font-bold text-center text-maincolor"> SERVICES </h2>
            <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 py-8 gap-10">
                {CARDS_DATA_LIST.slice(0, visibleCards).map((obj, i) => (
                    <div
                        key={i}
                        className="shadow-custom-red px-7 py-10 rounded-lg gap-4 flex justify-start flex-col"
                    >
                        <img src={obj.image} alt="webdesign" className="max-w-[350px] h-[150px]" />
                        <h1 className="text-2xl text-buttoncolor font-bold">{obj.title}</h1>
                        <p className="text-lightblack text-xl font-semibold leading-tight">
                            {obj.description}
                        </p>
                    </div>
                ))}
            </div>
            {visibleCards < CARDS_DATA_LIST.length && (
                <div className="text-center">
                    <button
                        onClick={handleLoadMore}
                        className={` px-6 py-2 rounded-lg shadow-lg text-white ${
                            isLoading
                                ? 'bg-gray-400 cursor-not-allowed'
                                : 'bg-maincolor hover:bg-hovercolor'
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