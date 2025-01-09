import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Logo, Logoclose, Logoopen } from './icons';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

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
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  return (
    <div className="shadow-sm bg-bgwhite sticky top-0 z-[100]">
      <div className="px-4 max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="py-2">
          <Link to="/">
            <Logo />
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex gap-8 text-maincolor font-medium">
          {['HOME', 'ABOUT', 'SKILLS', 'SERVICES', 'PROJECTS', 'CONTACTS'].map((label, idx) => {
            const path = `/${label.toLowerCase() === 'home' ? '' : label.toLowerCase()}`; // Handle Home as root path
            const isActive = location.pathname === path; // Check if the path matches the current location

            return (
              <Link
                key={idx}
                to={path}
                onClick={closeMenu}
                className={`relative group font-medium ${isActive ? 'text-rose-700' : 'text-maincolor'}
                  transition-transform duration-300 ease-in-out hover:scale-105`}
              >
                {label}
                <span
                  className={`absolute inset-x-0 -bottom-1 h-[2px] ${isActive ? 'bg-rose-700 scale-x-100' : 'bg-transparent scale-x-0'}
                    group-hover:scale-x-100 transition-transform duration-300`}
                ></span>
              </Link>
            );
          })}
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
        className={`md:hidden bg-bgwhite absolute w-full text-center flex flex-col justify-center items-center h-screen overflow-hidden shadow-md transition-all duration-500 ease-in-out ${isMenuOpen ? 'max-h-screen' : 'max-h-0'
          }`}
      >
        <div
          className={`transition-all duration-500 ease-in-out ${isMenuOpen ? 'opacity-100' : 'opacity-0'
            }`}
        >
          {['HOME', 'ABOUT', 'SKILLS', 'SERVICES', 'PROJECTS', 'CONTACTS'].map((label, idx) => {
            const path = `/${label.toLowerCase() === 'home' ? '' : label.toLowerCase()}`;
            const isActive = location.pathname === path;

            return (
              <Link
                key={idx}
                to={path}
                onClick={closeMenu}
                className={`block py-2 ${isActive ? 'text-rose-700' : 'text-maincolor'}
                  hover:text-rose-700 font-medium relative group`}
              >
                {label}
                <span
                  className={`absolute inset-x-0 -bottom-1 h-[2px] ${isActive ? 'bg-rose-700 scale-x-100' : 'bg-transparent scale-x-0'}
                    group-hover:scale-x-100 transition-transform duration-300`}
                ></span>
              </Link>
            );
          })}
        </div>
      </div>
      <div className="bg-backgroundborder w-full h-[3px] max-md:relative z-50"></div>
    </div>
  );
};

export default Navbar;
