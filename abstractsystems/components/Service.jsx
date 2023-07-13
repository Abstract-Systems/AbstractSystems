import React from "react";
import Image from "next/image";

const Service = (props) => {
  return (
    <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-md rounded-lg p-6">
      <div className="flex flex-col md:flex-row md:items-center">
        <div className="md:mr-4">
          <img src={props.icon} alt="Icon" className="w-12 h-12" />
        </div>
        <div className="flex-grow">
          <div className="text-center md:text-left"> {/* Update to align text center on mobile and left on larger screens */}
            <h3 className="text-xl font-barlow-condensed">{props.title}</h3>
            <p className="mt-2">{props.desc}</p>
          </div>
        </div>
        <div className="mt-4 md:mt-0">
          <Image src={props.r_image} alt="Image" height={150} width={150} />
        </div>
      </div>
    </div>
  );
};

export default Service;
