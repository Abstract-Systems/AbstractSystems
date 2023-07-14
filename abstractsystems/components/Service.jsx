import React from "react";
import Image from "next/image";

const Service = (props) => {
  return (
    <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-md rounded-lg p-8 text-center">
      <div className="flex flex-col items-center">
      <div className="mt-4">
          <Image src={props.r_image} alt="Image" height={200} width={250} />
        </div>
        <div>
          <h3 className="text-xl font-barlow-condensed">{props.title}</h3>
          <p className="mt-2">{props.desc}</p>
        </div>
        
      </div>
    </div>
  );
};

export default Service;
