import React from 'react'
import me from '../components/assests/images/me.png'
import resume from '../components/assests/resume.pdf'
const AboutPage = () => {
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = resume;
        link.download = 'Resume.pdf'; // File name to be saved as
        link.click();
    };
    return (
        <div className='py-10'>
            <div className='px-4 md:px-14 mx-auto grid grid-cols-1 md:grid-cols-2 '>
                <div className='order-2'>
                    <img src={me} alt="aboutme" className='w-[467px] my-5 md:mt-16' />
                </div>
                <div className='order-1 md:order-2'>
                    <h2 className='text-textmaincolor text-fourty font-bold md:mt-16'>ABOUT ME</h2>
                    <p className='text-lightblack text-xl md:text-2xl text-justify md:mt-20'> I am Anup Duhan Front End Developer with 6 months of experience. My passion for web development began in march 2024 and from then on, I did everything I could to break into this path, while having fun on the various projects developed. My experience acquired over the course of the projects allows me to better understand the expectations of a client and to respond precisely to the need requested according to the field of activity. I completed MCA in 2023.
                    </p>
                    <button onClick={handleDownload} className="group mt-16 relative block w-full px-10 py-4 text-white bg-maincolor rounded-md font-medium text-xl md:inline md:w-auto overflow-hidden">
                        <span className="absolute left-0 top-0 h-32 w-32 -translate-y-2 translate-x-12 rotate-45 bg-white opacity-[3%]"></span>
                        <span className="absolute left-0 top-0 -mt-1 h-48 w-48 -translate-x-56 -translate-y-24 rotate-45 bg-rose-700 opacity-100 transition-all duration-500 ease-in-out group-hover:-translate-x-8"></span>
                        <span className="relative z-10 text-white transition-colors duration-200 ease-in-out group-hover:text-black">
                            RESUME
                        </span>
                        <span className="absolute inset-0 rounded-md border-2 border-transparent"></span>
                    </button>
                </div>
            </div>

        </div>
    )
}

export default AboutPage