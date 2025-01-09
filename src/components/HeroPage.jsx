import React from 'react'
import boyimage from '../components/assests/images/standingboy.png'
import resume from '../components/assests/resume.pdf'
const HeroPage = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = resume;
    link.download = 'Resume.pdf';
    link.click();
  };
  return (
    <div className='bg-gradientBackground py-7'>
      <div className='px-4 md:px-14  mx-auto grid grid-cols-1 md:grid-cols-2'>
        <div data-aos="fade-up">
          <h1 className='text-textmaincolor font-extrabold py-5 text-5xl md:text-6xl md:pt-[140px]'> ANUP DUHAN</h1>
          <p className='text-fourty text-black font-bold md:pt-5 leading-tight'> I am <span className='text-textmaincolor'> Frontend Developer</span></p>
          <div className="flex flex-col gap-2 md:flex md:flex-row md:gap-14 py-5 md:pt-12">
            <button className="relative px-6 py-3 text-white font-medium text-lg bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded-md hover:from-pink-500 hover:via-red-500 hover:to-yellow-500 transition-all duration-500">
              CONTACT
            </button>
            <button
              onClick={handleDownload}
              className="relative px-6 py-3  text-white font-medium text-lg bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded-md hover:from-pink-500 hover:via-red-500 hover:to-yellow-500 transition-all duration-500"
            >
              RESUME
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