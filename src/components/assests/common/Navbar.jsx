import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Logo, Logoclose, Logoopen } from './icons';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  return (
    <header className="shadow-sm bg-bgwhite sticky top-0 z-[100]" aria-label="Main navigation">
      <nav className="px-4 max-w-7xl mx-auto flex justify-between items-center" role="navigation">
        {/* Logo */}
        <div className="py-2">
          <Link to="/" aria-label="Navigate to Home">
            <Logo />
          </Link>
        </div>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex gap-8 text-maincolor font-medium">
          {['HOME', 'ABOUT', 'SKILLS', 'SERVICES', 'PROJECTS', 'CONTACTS'].map((label, idx) => {
            const path = `/${label.toLowerCase() === 'home' ? '' : label.toLowerCase()}`;
            const isActive = location.pathname === path;

            return (
              <li key={idx}>
                <Link
                  to={path}
                  onClick={closeMenu}
                  className={`relative group font-medium ${isActive ? 'text-rose-700' : 'text-maincolor'}
                    transition-transform duration-300 ease-in-out hover:scale-105`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {label}
                  <span
                    className={`absolute inset-x-0 -bottom-1 h-[2px] ${isActive ? 'bg-rose-700 scale-x-100' : 'bg-transparent scale-x-0'}
                      group-hover:scale-x-100 transition-transform duration-300`}
                  ></span>
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Hamburger Icon */}
        <button
          onClick={toggleMenu}
          className="md:hidden flex items-center text-maincolor focus:outline-none"
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <Logoopen /> : <Logoclose />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-bgwhite absolute w-full text-center flex flex-col justify-center items-center h-screen overflow-hidden shadow-md transition-all duration-500 ease-in-out ${isMenuOpen ? 'max-h-screen' : 'max-h-0'}`}
        aria-hidden={!isMenuOpen}
      >
        <ul
          className={`transition-all duration-500 ease-in-out ${isMenuOpen ? 'opacity-100' : 'opacity-0'}`}
        >
          {['HOME', 'ABOUT', 'SKILLS', 'SERVICES', 'PROJECTS', 'CONTACTS'].map((label, idx) => {
            const path = `/${label.toLowerCase() === 'home' ? '' : label.toLowerCase()}`;
            const isActive = location.pathname === path;

            return (
              <li key={idx} className="py-2">
                <Link
                  to={path}
                  onClick={closeMenu}
                  className={`block font-medium ${isActive ? 'text-rose-700' : 'text-maincolor'}
                    hover:text-rose-700 relative group`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {label}
                  <span
                    className={`absolute inset-x-0 -bottom-1 h-[2px] ${isActive ? 'bg-rose-700 scale-x-100' : 'bg-transparent scale-x-0'}
                      group-hover:scale-x-100 transition-transform duration-300`}
                  ></span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="bg-backgroundborder w-full h-[3px] max-md:relative z-50"></div>
    </header>
  );
};

export default Navbar;
