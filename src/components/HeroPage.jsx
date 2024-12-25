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
        <div className=''>
          <h1 className='text-textmaincolor font-extrabold py-5 text-5xl md:text-6xl md:pt-[140px]'> ANUP DUHAN</h1>
          <p className='text-fourty text-black font-bold md:pt-5 leading-tight'> I am <span className='text-textmaincolor'> Frontend Developer</span></p>
          <div className="flex flex-col gap-2 md:flex md:flex-row md:gap-14 py-5 md:pt-12">
            <button className="block w-full px-10 py-4 text-white bg-buttoncolor rounded-md font-medium text-xl md:inline md:w-auto">
              CONTACT
            </button>
            <button  onClick={handleDownload} className="block w-full px-10 py-4 text-textmaincolor border border-textmaincolor rounded-md font-medium text-xl md:inline md:w-auto">
              RESUME
            </button>
          </div>

        </div>
        <div className=''>
          <img src={boyimage} alt="boyimage" className='w-[503px]' />
        </div>
      </div>
    </div>
  )
}

export default HeroPage