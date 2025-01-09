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
                <div className='order-2 flex justify-center items-center my-10 md:my-0'>
                    <img src={me} alt="aboutme" className='w-[467px] my-5 md:mt-16' />
                </div>
                <div className='order-1 md:order-2'>
                    <div className=" md:mt-16">
                        <h2 className="text-textmaincolor text-fourty font-bold" data-aos="fade-up-left">ABOUT ME</h2>
                        <div className="w-40 h-1  bg-textmaincolor mb-6 md:mb-0" data-aos="fade-up-right"></div>
                    </div>

                    <p className='text-lightblack text-xl md:text-2xl text-justify md:mt-16'> I am Anup Duhan Front End Developer with 6 months of experience. My passion for web development began in march 2024 and from then on, I did everything I could to break into this path, while having fun on the various projects developed. My experience acquired over the course of the projects allows me to better understand the expectations of a client and to respond precisely to the need requested according to the field of activity. I completed MCA in 2023.
                    </p>
                    <button
                        onClick={handleDownload}
                        className="relative px-6 py-3 mt-6 text-white font-medium text-lg bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded-md hover:from-pink-500 hover:via-red-500 hover:to-yellow-500 transition-all duration-300"
                    >
                        RESUME
                    </button>
                </div>
            </div>

        </div>
    )
}

export default AboutPage