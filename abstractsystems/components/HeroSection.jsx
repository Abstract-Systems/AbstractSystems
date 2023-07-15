'use client'
import {React, useState, useEffect} from 'react';
import MainText from './IType';
import { scroller } from "react-scroll";

const scrolldown = () => {
  scroller.scrollTo("serviceSection", {
    duration: 800,
    delay: 0,
    smooth: "easeInOutQuart",
    offset:-50
  })
};
export default function HeroSection() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <div className="flex flex-col items-center justify-center h-screen relative">
      <div className="w-[90%] mx-auto flex flex-col md:flex-row justify-between items-center py-12 pl-4 pr-4 md:pl-20 md:pr-20">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-sarpanch text-white typewriter leading-tight tracking-wide mt-10">
            <MainText />
          </h1>
          <p className="text-lg md:text-2xl font-barlow-condensed text-white mt-10 md:mt-10">
            We believe in harnessing the power of abstraction to bring your digital dreams to life.<br></br>
            Our team is dedicated to transforming abstract ideas into tangible and innovative digital solutions that exceed your expectations.
          </p>
        </div>
        <div className="w-full md:w-1/2 max-w-[500px] mt-8">
          <img className="w-full h-auto rounded-[50px]" src="./images/computerscreen.png" alt="abstract systems" />
        </div>
      </div>
      <div className="flex flex-col justify-end items-center mt-auto mb-2 md:mt-auto" onClick={scrolldown}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 animate-bounce text-pink-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 13l-7 7-7-7m14-8l-7 7-7-7"
          />
        </svg>
        <p className="text-pink-500 mt-1">Scroll down</p>
      </div>
      {!isSmallScreen && (
        <>
          <div className="blob top-left"></div>
          <div className="blob bottom-right"></div>
        </>
      )}
    </div>
  );
}
