import React from "react";
import Service from "./Service";

const services = [
  {
    title: "Web Development",
    desc: "Our Web Development service focuses on creating dynamic and interactive websites, tailored to meet the unique needs of businesses and individuals. We specialize in user-friendly designs that are visually appealing and optimized for search engines.",
    icon: "./images/code.png",
    r_image: "/images/animation.gif",
  },
  {
    title: "Mobile Development",
    desc: "With Mobile Development, we help businesses reach a wider audience and enhance user engagement through customized iOS and Android applications. We follow a streamlined approach to create intuitive and feature-rich mobile apps that leverage the latest frameworks and tools.",
    icon: "./images/mmobile.png",
    r_image: "/images/animation1.gif",
  },
  {
    title: "Software Solutions",
    desc: "Our Software Solutions are designed to address the specific challenges faced by businesses across different industries. We offer end-to-end software development services, developing robust and scalable applications that automate processes and optimize efficiency.",
    icon: "./images/ssolution.png",
    r_image: "/images/animation3.gif",
  },
  {
    title: "UI /UX Design",
    desc: "UI/UX Design is at the core of our digital products, ensuring exceptional user experiences. We combine creativity, research, and user-centered design principles to craft visually appealing interfaces aligned with brand identity. From wireframing to prototyping and usability testing, we create intuitive and accessible designs.",
    icon: "./images/ui.png",
    r_image: "/images/animation4.gif",
  },
  // Add more service objects as needed
];

const ServiceLayout = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-white text-4xl font-bold text-center px-5 py-3 font-sarpanch">
        Services
      </h1>
      <p className="py-5 w-[60%] text-center font-barlow-condensed text-xl">Explore our comprehensive range of website, mobile app, and software solutions, alongside expertly crafted UI/UX designs, tailored to exceed your expectations and elevate your digital presence. </p>
      <div className="w-full md:w-[50%] p-10 bg-backgroun-primary rounded-l-lg">
        <div className="bg-white bg-opacity-5 backdrop-filter backdrop-blur-md rounded-lg p-6 mb-5 md:max-w">
          <div className="flex flex-wrap justify-center gap-8 mt-8 rounded-2xl items-center">
            {services.map((service, index) => (
              <div key={index} className="hover:scale-105 transition ease-in-out">
                <Service
                  title={service.title}
                  desc={service.desc}
                  icon={service.icon}
                  r_image={service.r_image}
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
