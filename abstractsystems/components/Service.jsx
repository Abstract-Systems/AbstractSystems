'use client'
import React from "react";
import { scroller } from "react-scroll";
const handleLearnMoreClick = () => {
  scroller.scrollTo("contactSection", {
    smooth: true,
    offset: -50, // Adjust the offset as needed
  });
};

const Service = (props) => {
  return (
    <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-md rounded-lg p-6 text-center">
      <div className="flex flex-col items-center">
        <div className="mt-4">
          <img className="rounded-xl" src={props.r_image} alt="Image" height={150} width={150} />
        </div>
        <div>
          <h3 className="text-xl font-barlow-condensed py-2 text-white">{props.title}</h3>
          <p className="mt-2 text-white text-sm">{props.desc}</p>
        </div>

        <button className="mt-4 bg-pink-600 opacity-100 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded-full "onClick={handleLearnMoreClick} >
          Learn More
        </button>
      </div>
    </div>
  );
};

export default Service;
