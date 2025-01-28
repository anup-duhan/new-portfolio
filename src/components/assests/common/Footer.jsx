import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer 
      className="bg-lightblack text-white bg-opacity-90 z-[100] py-3 font-semibold text-center text-sm md:text-base"
      aria-label="Site Footer"
    >
      <p>
        Developed by <span className="font-bold">Anup Duhan</span> &copy; by{' '}
        <a
          href="https://www.codewide.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:underline"
        >
          Codewide, Hisar
        </a>{' '}
        | {currentYear} All Rights Reserved
      </p>
    </footer>
  );
};

export default Footer;
