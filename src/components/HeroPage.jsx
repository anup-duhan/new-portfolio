import React from 'react';
import boyimage from '../components/assests/images/standingboy.png';
import resume from '../components/assests/resume.pdf';

const HeroPage = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = resume;
    link.download = 'Anup_Duhan_Resume.pdf';
    link.click();
  };

  return (
    <main className="bg-gradientBackground py-7">
      <section className="px-4 md:px-14 mx-auto grid grid-cols-1 md:grid-cols-2">
        {/* Text Section */}
        <div data-aos="fade-up" role="region" aria-labelledby="hero-title">
          <h1
            id="hero-title"
            className="text-textmaincolor font-extrabold py-5 text-5xl md:text-6xl md:pt-[140px]"
          >
            ANUP DUHAN
          </h1>
          <p
            className="text-fourty text-black font-bold md:pt-5 leading-tight bg-white inline-block py-4 rounded-md shadow-sm shadow-black px-3"
            aria-label="I am a Frontend Developer"
          >
            I am <span className="text-textmaincolor">Frontend Developer</span>
          </p>

          {/* Buttons */}
          <div className="flex flex-col gap-2 md:flex md:flex-row md:gap-14 py-5 md:pt-12">
            <a
              href="https://wa.me/9671444736"
              target="_blank"
              rel="noopener noreferrer"
              className="relative px-6 py-3 shadow-sm shadow-black text-center text-white font-medium text-lg bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded-md hover:from-pink-500 hover:via-red-500 hover:to-yellow-500 transition-all duration-500"
              aria-label="Contact me on WhatsApp"
            >
              CONTACT
            </a>

            <button
              onClick={handleDownload}
              className="relative px-6 py-3 shadow-sm shadow-black text-white font-medium text-lg bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded-md hover:from-pink-500 hover:via-red-500 hover:to-yellow-500 transition-all duration-500"
              aria-label="Download Resume"
            >
              RESUME
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div>
          <img
            src={boyimage}
            alt="Anup Duhan standing in a professional pose"
            className="w-[503px]"
            data-aos="fade-right"
            loading="lazy"
            decoding="async"
          />
        </div>
      </section>
    </main>
  );
};

export default HeroPage;
