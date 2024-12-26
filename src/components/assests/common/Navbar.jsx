import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { Logo, Logoclose, Logoopen } from './icons';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'; // Disable scrolling
    } else {
      document.body.style.overflow = 'auto'; // Enable scrolling
    }

    // Cleanup to ensure no side effects when the component unmounts
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  return (
    <div className="shadow-sm bg-bgwhite sticky top-0 z-[100]">
      <div className="px-4 max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="py-2">
          <h1>
            <Logo />
          </h1>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex gap-8 text-maincolor font-medium">
          {['HOME', 'ABOUT', 'SKILLS', 'SERVICES', 'PROJECTS', 'CONTACTS'].map((label, idx) => (
            <Link
              key={idx}
              to={`/${label.toLowerCase()}`}
              onClick={closeMenu}
              className="relative group font-medium text-maincolor transition-transform hover:scale-105"
            >
              {label}
              <span className="absolute inset-x-0 -bottom-1 h-[2px] bg-gradient-to-r from-blue-500 via-purple-500 to-rose-700 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </Link>
          ))}
        </div>

        {/* Hamburger Icon */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-maincolor focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <Logoopen /> : <Logoclose />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-bgwhite absolute w-full text-center flex flex-col justify-center items-center h-screen overflow-hidden shadow-md transition-all duration-500 ease-in-out ${
          isMenuOpen ? 'max-h-screen' : 'max-h-0'
        }`}
      >
        <div
          className={`transition-all duration-500 ease-in-out ${
            isMenuOpen ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {['HOME', 'ABOUT', 'SKILLS', 'SERVICES', 'PROJECTS', 'CONTACTS'].map((label, idx) => (
            <Link
              key={idx}
              to={`/${label.toLowerCase()}`}
              onClick={closeMenu}
              className="block py-2 text-maincolor font-medium relative group"
            >
              {label}
              <span className="absolute inset-x-0 -bottom-1 h-[2px] bg-gradient-to-r from-blue-500 via-purple-500 to-rose-700 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </Link>
          ))}
        </div>
      </div>
      <div className="bg-backgroundborder w-full h-[2px] max-md:relative z-50"></div>
    </div>
  );
};

export default Navbar;
