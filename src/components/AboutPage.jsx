import React from 'react';
import me from '../components/assests/images/me.png';
import resume from '../components/assests/resume.pdf';

const AboutPage = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = resume;
    link.download = 'Anup_Duhan_Resume.pdf'; // Provide a descriptive file name
    link.click();
  };

  return (
    <section className="py-10" aria-labelledby="about-me-heading">
      <div className="px-4 md:px-14 mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Image Section */}
        <div className="flex justify-center items-center my-10 md:my-0">
          <img
            src={me}
            alt="Anup Duhan - Front End Developer"
            className="w-[467px] my-5 md:mt-16 rounded-md shadow-md"
            loading="lazy" // Lazy-load the image for performance
          />
        </div>

        {/* About Section */}
        <div>
          <header className="md:mt-16">
            <h2
              id="about-me-heading"
              className="text-textmaincolor text-4xl font-bold"
              data-aos="fade-up-left"
            >
              ABOUT ME
            </h2>
            <div
              className="w-40 h-1 bg-textmaincolor mb-6 md:mb-0"
              data-aos="fade-up-right"
            ></div>
          </header>

          <p
            className="text-lightblack text-xl md:text-2xl text-justify bg-gray-100 p-5 rounded-md md:mt-7 leading-relaxed"
            aria-label="Description about Anup Duhan"
          >
            I am Anup Duhan, a Front End Developer with 6 months of experience. My passion for web
            development began in March 2024, and since then, I have dedicated myself to building a
            career while enjoying various projects. My experience gained through these projects helps
            me better understand client expectations and deliver solutions tailored to their needs. 
            I hold an MCA degree, which I completed in 2023.
          </p>

          <button
            onClick={handleDownload}
            className="relative px-6 py-3 shadow-sm shadow-black mt-6 text-white font-medium text-lg bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded-md hover:from-pink-500 hover:via-red-500 hover:to-yellow-500 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
            aria-label="Download Resume"
          >
            DOWNLOAD RESUME
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
