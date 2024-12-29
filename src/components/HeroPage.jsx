import React from 'react'
import boyimage from '../components/assests/images/standingboy.png'
import resume from '../components/assests/resume.pdf'
const HeroPage = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = resume;
    link.download = 'Resume.pdf'; // File name to be saved as
    link.click();
  };
  return (
    <div className='bg-gradientBackground py-7'>
      <div className='px-4 md:px-14  mx-auto grid grid-cols-1 md:grid-cols-2'>
        <div data-aos="fade-up">
          <h1 className='text-textmaincolor font-extrabold py-5 text-5xl md:text-6xl md:pt-[140px]'> ANUP DUHAN</h1>
          <p className='text-fourty text-black font-bold md:pt-5 leading-tight'> I am <span className='text-textmaincolor'> Frontend Developer</span></p>
          <div className="flex flex-col gap-2 md:flex md:flex-row md:gap-14 py-5 md:pt-12">
            <button className="group relative block w-full px-10 py-4 text-white bg-maincolor rounded-md font-medium text-xl md:inline md:w-auto overflow-hidden">
              <span className="absolute left-0 top-0 h-32 w-32 -translate-y-2 translate-x-12 rotate-45 bg-white opacity-[3%]"></span>
              <span className="absolute left-0 top-0 -mt-1 h-48 w-48 -translate-x-56 -translate-y-24 rotate-45 bg-rose-700 opacity-100 transition-all duration-500 ease-in-out group-hover:-translate-x-8"></span>
              <span className="relative z-10 text-white transition-colors duration-200 ease-in-out group-hover:text-black">
                CONTACT
              </span>
              <span className="absolute inset-0 rounded-md border-2 border-transparent"></span>
            </button>

            <button onClick={handleDownload} className="group relative block w-full px-10 py-4 text-white bg-maincolor rounded-md font-medium text-xl md:inline md:w-auto overflow-hidden">
              <span className="absolute left-0 top-0 h-32 w-32 -translate-y-2 translate-x-12 rotate-45 bg-white opacity-[3%]"></span>
              <span className="absolute left-0 top-0 -mt-1 h-48 w-48 -translate-x-56 -translate-y-24 rotate-45 bg-rose-700 opacity-100 transition-all duration-500 ease-in-out group-hover:-translate-x-8"></span>
              <span className="relative z-10 text-white transition-colors duration-200 ease-in-out group-hover:text-black">
                RESUME
              </span>
              <span className="absolute inset-0 rounded-md border-2 border-transparent"></span>
            </button>
          </div>

        </div>
        <div className=''>
          <img src={boyimage} alt="boyimage" className='w-[503px]' data-aos="fade-right" />
        </div>
      </div>
    </div>
  )
}

export default HeroPage