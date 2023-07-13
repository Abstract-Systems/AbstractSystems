import React from 'react'
import Project from './Project'

const projects = [
    {
        projectnumber: "01",
        title: "Starbucks CLONE",
        desc: "Starbucks CLONE is bla bla bla",
        icon: "./images/starbucks.png",
        r_image: "/images/starbucks.png",
        link: "https://starbucks-clone-1b1d0.web.app/",
    },
    {
        projectnumber: "02",
        title: "Amazon CLONE",
        desc: "Amazon CLONE is bla bla bla",
        icon: "./images/amazon.png",
        r_image: "/images/amazon.png",
        link: "https://clone-1b1d0.web.app/",
    },
    {
        projectnumber: "03",
        title: "Netflix CLONE",
        desc: "Netflix CLONE is bla bla bla",
        icon: "./images/netflix.png",
        r_image: "/images/netflix.png",
        link: "https://netflix-clone-1b1d0.web.app/",
    },
    {
        projectnumber: "04",
        title: "Spotify CLONE",
        desc: "Spotify CLONE is bla bla bla",
        icon: "./images/spotify.png",
        r_image: "/images/spotify.png",
        link: "https://spotify-clone-1b1d0.web.app/",
    },
    // Add more project objects as needed
]

const Projectlayout = () => {
  return (
    <div className="flex flex-col items-center justify-center">
        <h1 className="text-white text-3xl font-bold text-center px-5 py-3 font-barlow-condensed">
            Projects
        </h1>
        <div className="w-full md:w-[50%]  p-10 bg-backgroun-primary rounded-l-lg">
            <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-md rounded-lg p-6 mb-5">
                <div className="flex flex-col gap-8 mt-8">
                    {projects.map((project, index) => (
                        <div key={index}>
                            <Project
                                projectnumber={project.projectnumber}
                                title={project.title}
                                desc={project.desc}
                                icon={project.icon}
                                r_image={project.r_image}
                                link={project.link}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
    )
}

export default Projectlayout