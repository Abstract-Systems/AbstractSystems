import React, { useState } from 'react';
import logo from '../images/abstract-systems-logo.jpg';
import OldButton from './OldButton';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className='h-16 bg-secondary drop-shadow-lg fixed w-full z-20 top-0 left-0 border-b'>
      <div className='max-w-screen-xl flex items-center justify-between mx-auto'>
        <div className='px-2'>
          <a href="#">
            <img className='h-12 rounded-[50px]' src={logo} alt="Abstract Systems" />
          </a>
        </div>

        <div className='flex items-center'>
          <div className={`p-3 hidden md:flex md:w-auto`}>
            <ul className='flex list-none items-center space-x-6'>
              <li className='py-2 px-4 text-white font-barlow-condensed tracking-widest'>Home</li>
              <li className='py-2 px-4 text-white font-barlow-condensed tracking-widest'>Services</li>
              <li className='py-2 px-4 text-white font-barlow-condensed tracking-widest'>Projects</li>
              <li className='py-2 px-4 text-white font-barlow-condensed tracking-widest'>About</li>
            </ul>
          </div>

          <div className='px-2'>
            <OldButton text='Contact US' />
          </div>

          <div className='px-2'>
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded={isMenuOpen}
              onClick={toggleMenu}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Dropdown Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-secondary w-full">
          <ul className='flex flex-col list-none items-center space-y-4 py-4'>
            <li className='py-2 px-4 text-white font-barlow-condensed tracking-widest'>Home</li>
            <li className='py-2 px-4 text-white font-barlow-condensed tracking-widest'>Services</li>
            <li className='py-2 px-4 text-white font-barlow-condensed tracking-widest'>Projects</li>
            <li className='py-2 px-4 text-white font-barlow-condensed tracking-widest'>About</li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
