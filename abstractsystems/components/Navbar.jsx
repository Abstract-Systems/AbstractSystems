'use client'
import React, { useState } from 'react';
import OldButton from './OldButton';
import Image from 'next/image';
import { scroller } from 'react-scroll';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavItemClick = (sectionId) => {
    scroller.scrollTo(sectionId, {
      smooth: true,
      offset: -50, // Adjust the offset as needed
    });
    setIsMenuOpen(false); // Close the menu after clicking a navigation item
  };

  const handleContactClick = () => {
    handleNavItemClick('contactSection');
    console.log('Contact clicked');
  };

  return (
    <nav className='h-16 border-none bg-backgroun-secondary drop-shadow-lg fixed w-full z-20 top-0 left-0 border-b'>
      <div className='max-w-screen-xl flex items-center justify-between mx-auto'>
        <div className='px-2 transition-opacity duration-300'>
          <a href='#'>
            <Image src='/images/logo.png' height={50} width={50} alt='Abstract Systems' />
          </a>
        </div>

        <div className='flex items-center'>
          <div className={`p-3 hidden md:flex md:w-auto transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}>
            <ul className='flex list-none items-center space-x-6'>
              <li
                className='py-2 px-4 text-xl text-white font-barlow-condensed tracking-widest cursor-pointer transition-colors duration-300 hover:text-gray-300'
                onClick={() => handleNavItemClick('heroSection')}
              >
                Home
              </li>
              <li
                className='py-2 px-4 text-xl text-white font-barlow-condensed tracking-widest cursor-pointer transition-colors duration-300 hover:text-gray-300'
                onClick={() => handleNavItemClick('serviceSection')}
              >
                Services
              </li>
              <li
                className='py-2 px-4 text-xl text-white font-barlow-condensed tracking-widest cursor-pointer transition-colors duration-300 hover:text-gray-300'
                onClick={() => handleNavItemClick('projectsSection')}
              >
                Projects
              </li>
              <li
                className='py-2 px-4 text-xl text-white font-barlow-condensed tracking-widest cursor-pointer transition-colors duration-300 hover:text-gray-300'
                onClick={() => handleNavItemClick('aboutSection')}
              >
                About
              </li>
            </ul>
          </div>

          <div className='px-2 transition-opacity duration-300' onClick={handleContactClick}>
            <OldButton text='Contact US' />
          </div>

          <div className='px-2 transition-all duration-300'>
            <button
              data-collapse-toggle='navbar-sticky'
              type='button'
              className={`inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 ${
                isMenuOpen ? 'rotate-45' : ''
              } transition-all duration-300`}
              aria-controls='navbar-sticky'
              aria-expanded={isMenuOpen}
              onClick={toggleMenu}
            >
              <span className='sr-only'>Open main menu</span>
              <svg
                className='w-5 h-5 transform transition-transform'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 17 14'
              >
                <path
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M1 1h15M1 7h15M1 13h15'
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Dropdown Menu */}
      {isMenuOpen && (
        <div className='md:hidden bg-backgroun-secondary w-full transition-opacity duration-300'>
          <ul className='flex flex-col list-none items-center space-y-4 py-4'>
            <li
              className='py-2 px-4 text-white font-barlow-condensed tracking-widest cursor-pointer transition-colors duration-300 hover:text-gray-300'
              onClick={() => handleNavItemClick('heroSection')}
            >
              Home
            </li>
            <li
              className='py-2 px-4 text-white font-barlow-condensed tracking-widest cursor-pointer transition-colors duration-300 hover:text-gray-300'
              onClick={() => handleNavItemClick('serviceSection')}
            >
              Services
            </li>
            <li
              className='py-2 px-4 text-white font-barlow-condensed tracking-widest cursor-pointer transition-colors duration-300 hover:text-gray-300'
              onClick={() => handleNavItemClick('projectsSection')}
            >
              Projects
            </li>
            <li
              className='py-2 px-4 text-white font-barlow-condensed tracking-widest cursor-pointer transition-colors duration-300 hover:text-gray-300'
              onClick={() => handleNavItemClick('aboutSection')}
            >
              About
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
