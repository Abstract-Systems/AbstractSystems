import React from 'react'

const Project = (props) => {
  return (
    <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-md rounded-lg p-6">
        <div className="flex flex-col md:flex-row md:items-center border-b-white">
            <div className="md:mr-4">
                <h1 className="text-white text-3xl font-bold text-center px-5 py-3 font-barlow-condensed tracking-wider">
                    {props.projectnumber}
                </h1>

                <button className=" bg-btn-primary  rounded-full p-2">
                    <span className=' text-xm'>Read More</span>
                </button>
            </div>
            <div className="flex-grow">
                <div className="text-center md:text-left"> {/* Update to align text center on mobile and left on larger screens */}
                    <h3 className="text-xl font-barlow-condensed">{props.title}</h3>
                    <p className="mt-2">{props.desc}</p>
                </div>
            </div>
            <div className="mt-4 md:mt-0">
                <img src={props.r_image} alt="Image" className="w-12 h-12" />
            </div>
        </div>
    </div>
  )
}

export default Project