import React from 'react'
import Project from './Project'

const projects = [
    {
        projectnumber: "01",
        title: "MediMeet",
        desc: "The Doctor Appointment Management System is a comprehensive and user-friendly Java app designed to streamline and automate the process of managing appointments between doctors and patients. It provides a convenient platform for doctors, patients, and administrators to interact, schedule appointments, and maintain essential medical records.",
        icon: "./images/starbucks.png",
        r_image: "./images/DocAppoint.jpeg",
        link: "https://github.com/HasaanAhmad/MediMeet",
    },
    {
        projectnumber: "02",
        title: "Apna Ghar Construction",
        desc: "Apna Ghar Construction is an online platform where individuals can list their house demands, and registered builders can view and offer bids. Users can create listings specifying their requirements, and builders can submit competitive bids. Homeowners have the option to accept or reject offers, facilitating efficient communication and collaboration between homeowners and builders. [Link Not Available as it's not open source project]",
        icon: "./images/amazon.png",
        r_image: "./images/agc.jpg",
        link: "#",
    },
    {
        projectnumber: "03",
        title: "Document Reader and Converter Mobile App",
        desc: "This all-document reader helps you easily read pdf, word files, excel sheets xls and ppts with its document reader function. It scans images to read, edit and convert the text into pdf or word file. Convert files into any form or file of your choice. Don’t have access to a laptop all the time? Don’t worry all document reader have got your back. You don’t need to download a separate pdf converter, MS word, MS excel and MS power point on your phone just download the all-document reader app and read any sort of file just with a single click.",
        icon: "./images/netflix.png",
        r_image: "./images/mobileapp.jpeg",
        link: "https://play.google.com/store/apps/details?id=com.pdfdocumentreader.pdfconverter",
    },
    {
        projectnumber: "04",
        title: "Contact Form",
        desc: "A multi-step contact form made in ReactJS is a user-friendly and organized way to gather information from users in a systematic manner. Instead of overwhelming users with a long and intimidating form, it breaks down the process into multiple steps or sections, guiding users through each step until the completion of the form",
        r_image: "./images/react-form.jpeg",
        link: "https://multi-step-form-phi-woad.vercel.app/",
    },
    // Add more project objects as needed
]

const Projectlayout = () => {
  return (
    <div className="flex flex-col items-center justify-center">
        <h1 className="text-white text-4xl font-bold text-center px-5 py-3 font-sarpanch">
            Projects
        </h1>
        <p className='text-lg text-yellow-50 font-bold text-center px-5 py-3 font-barlow-condensed'>Discover the art of software craftsmanship in our project showcase. Abstract Systems</p>
        <div className="w-full md:w-[70%]  p-10 bg-backgroun-primary rounded-l-lg">
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