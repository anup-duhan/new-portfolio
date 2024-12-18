import React, { useState } from 'react';
import { Logo, Logoclose, Logoopen } from './icons';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="shadow-sm shadow-[#BBBAB8]">
      <div className="px-4  max-w-7xl mx-auto bg-bgwhite flex justify-between items-center">
        {/* Logo */}
        <div className="py-2">
          <h1>
            <Logo />
          </h1>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex gap-8 text-maincolor font-medium">
          <a href="#">HOME</a>
          <a href="#">ABOUT</a>
          <a href="#">SKILLS</a>
          <a href="#">SERVICES</a>
          <a href="#">PORTFOLIO</a>
          <a href="#">CONTACTS</a>
        </div>

        {/* Hamburger Icon */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-maincolor focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <Logoopen />
            ) : (
              <Logoclose />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-bgwhite absolute w-full h-screen overflow-hidden shadow-md transition-all duration-500 ease-in-out ${isMenuOpen ? 'max-h-screen' : 'max-h-0'
          }`}
      >
        {/* Mobile Menu */}
        <div
          className={`md:hidden bg-bgwhite absolute w-full h-screen shadow-md transition-all duration-500 ease-in-out ${isMenuOpen ? 'max-h-screen' : 'max-h-0'
            } flex flex-col justify-center items-center`}
        >
          <a href="#" className="block py-2 text-maincolor font-medium">
            HOME
          </a>
          <a href="#" className="block py-2 text-maincolor font-medium">
            ABOUT
          </a>
          <a href="#" className="block py-2 text-maincolor font-medium">
            SKILLS
          </a>
          <a href="#" className="block py-2 text-maincolor font-medium">
            SERVICES
          </a>
          <a href="#" className="block py-2 text-maincolor font-medium">
            PORTFOLIO
          </a>
          <a href="#" className="block py-2 text-maincolor font-medium">
            CONTACTS
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
