import React from "react";
import Service from "./Service";

const services = [
  {
    title: "Web Development",
    desc: "Web Development is bla bla bla",
    icon: "./images/code.png",
    r_image: "./images/web.png",
  },
  {
    title: "Mobile Development",
    desc: "Mobile Development is bla bla bla",
    icon: "./images/mmobile.png",
    r_image: "./images/mobile.png",
  },
  {
    title: "Software Solutions",
    desc: "Software Solutions is bla bla bla",
    icon: "./images/ssolution.png",
    r_image: "./images/solution.png",
  },
  {
    title: "UI /UX Design",
    desc: "UI /UX Design is bla bla bla",
    icon: "./images/ui.png",
    r_image: "./images/uiux.png",
  },
  // Add more service objects as needed
];

const ServiceLayout = () => {
  return (
    <div className="flex flex-col items-center justify-center p-10 bg-backgroun-primary rounded-l-lg">
      <div className="relative w-full md:w-[70%]">
        <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-md rounded-lg p-6">
          <h1 className="text-white text-3xl font-bold text-center px-5 py-3 font-barlow-condensed">
            Services
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
            {services.map((service, index) => (
              <div className="mb-8" key={index}>
                <Service
                  title={service.title}
                  desc={service.desc}
                  icon={service.icon}
                  r_image={service.r_image} // Add the r_image prop here
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceLayout;
