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
          <Link to="/" onClick={closeMenu} className="link-hover-effect">HOME</Link>
          <Link to="/about" onClick={closeMenu} className="link-hover-effect">ABOUT</Link>
          <Link to="/Skills" onClick={closeMenu} className="link-hover-effect">SKILLS</Link>
          <Link to="/services" onClick={closeMenu} className="link-hover-effect">SERVICES</Link>
          <Link to="/projects" onClick={closeMenu} className="link-hover-effect">PROJECTS</Link>
          <Link to="/contacts" onClick={closeMenu} className="link-hover-effect">CONTACTS</Link>
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
          <Link to="/" onClick={closeMenu} className="block py-2 text-maincolor font-medium link-hover-effect">
            HOME
          </Link>
          <Link to="/about" onClick={closeMenu} className="block py-2 text-maincolor font-medium link-hover-effect">
            ABOUT
          </Link>
          <Link to="/skills" onClick={closeMenu} className="block py-2 text-maincolor font-medium link-hover-effect">
            SKILLS
          </Link>
          <Link to="/services" onClick={closeMenu} className="block py-2 text-maincolor font-medium link-hover-effect">
            SERVICES
          </Link>
          <Link to="/projects" onClick={closeMenu} className="block py-2 text-maincolor font-medium link-hover-effect">
            PROJECTS
          </Link>
          <Link to="/contacts" onClick={closeMenu} className="block py-2 text-maincolor font-medium link-hover-effect">
            CONTACTS
          </Link>
        </div>
      </div>
      <div className="bg-backgroundborder w-full h-[2px] max-md:relative z-50"></div>
    </div>
  );
};

export default Navbar;
