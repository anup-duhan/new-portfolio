import React from 'react'
import me from '../components/assests/images/me.png'
const AboutPage = () => {
    return (
        <div className='py-10'>
            <div className='px-4 md:px-14 mx-auto grid grid-cols-1 md:grid-cols-2 '>
                <div className='order-2'>
                    <img src={me} alt="aboutme" className='w-[467px] my-5 md:mt-16' />
                </div>
                <div className='order-1 md:order-2'>
                    <h2 className='text-textmaincolor text-fourty font-bold md:mt-16'>ABOUT ME</h2>
                    <p className='text-lightblack text-xl md:text-2xl text-justify md:mt-20'> I am Anup Duhan Front End Developer with 6 months of experience. My passion for web development began in march 2024 and from then on, I did everything I could to break into this path, while having fun on the various projects developed. My experience acquired over the course of the projects allows me to better understand the expectations of a client and to respond precisely to the need requested according to the field of activity.
                    </p>
                    <button className="block w-full px-10 py-4 mt-5 md:mt-16 text-white bg-buttoncolor rounded-md font-medium text-xl md:inline md:w-auto">
                        RESUME
                    </button>
                </div>
            </div>

        </div>
    )
}

export default AboutPage