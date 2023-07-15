'use client'
import React from 'react';
import UserCard from './userCard';
import { Carousel } from './CaroselCard';

const users = [
  {
    name: "Mujtaba",
    title: "Full Stack Dev",
    desc: "He is the only guy who uses malt (As a beer) and uses Code to protect himself from danger. Guy uses Dijkstra to find a path.",
    mail: "muhammadmujtaba150@gmail.com",
    img: "./images/mujtaba.jpg",
    linkedin: "https://www.linkedin.com/in/muhammad-mujtaba-890b7a261/",
    twitter: "#",
    github: "https://github.com/mujtaba-io",
    instagram: "#"
  },
  {
    name: "Hasaan",
    title: "Designer & Front End Engineer",
    desc: "Solves problem with O(P) complexity. Frontend And Creative team. Plays minecraft to kill time!",
    mail: "hasaanahmad10023@gmail.com",
    img: "./images/hasaan.jpg",
    linkedin: "https://www.linkedin.com/in/hasaan-ahmad-94548816b/",
    twitter: "https://twitter.com/HasaanAhmad19",
    github: "https://github.com/HasaanAhmad",
    instagram: "https://www.instagram.com/geniussyco/"
  },
  {
    name: "Haider",
    title: "Designer & Front End Engineer",
    desc: "Web and App geek! Loves to play with React and Java. Frontend And Creative team.",
    mail: "haidersheikh243@gmail.com",
    img: "./images/haider.jpg",
    linkedin: "https://www.linkedin.com/in/muhammad-haider-sheikh-31541a185/",
    twitter: "https://twitter.com/s67125466",
    github: "https://github.com/Haider12212",
    instagram: "#"
  }
];

function AboutSection() {
  return (
    <div className="mx-auto md:flex justify-center items-center p-5">
      <Carousel className="w-full md:w-auto overflow-hidden">
        {users.map((user, index) => (
          <React.Fragment key={index}>
            <UserCard
              name={user.name}
              title={user.title}
              desc={user.desc}
              mail={user.mail}
              img={user.img}
              linkedin={user.linkedin}
              twitter={user.twitter}
              github={user.github}
              instagram={user.instagram}
            />
          </React.Fragment>
        ))}
      </Carousel>
    </div>
  );
}

export default AboutSection;

