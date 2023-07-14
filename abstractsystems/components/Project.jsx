import React from 'react';

const Project = (props) => {
  return (
    <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-md rounded-lg p-6">
      <div className="flex flex-col md:flex-row md:items-center border-b-white">
        <div className="md:mr-4 text-center">
          <h1 className="text-white text-3xl font-bold px-5 py-3 font-barlow-condensed tracking-wider">
            {props.projectnumber}
          </h1>
          <a href={props.link} target="_blank" rel="noopener noreferrer">
            <button className="bg-pink-600 rounded-full p-2 w-32 mx-auto">
              <span className='text-sm'>Visit</span>
            </button>
          </a>
        </div>
        <div className="flex-grow">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-barlow-condensed">{props.title}</h3>
            <p className="mt-2 max-w-md">{props.desc}</p>
          </div>
        </div>
        <div className="mt-4 md:mt-0">
          <img src={props.r_image} alt="Image" className="w-[300px] rounded-lg" />
        </div>
      </div>
    </div>
  );
};

export default Project;
