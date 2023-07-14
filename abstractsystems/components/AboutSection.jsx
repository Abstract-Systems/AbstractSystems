import React from 'react';
import UserCard from './userCard';
import { Carousel } from './CaroselCard';

const users = [
  {
    name: "Mujtaba",
    title: "Full Stack Dev",
    desc: "He is the only guy who uses malt (As a beer) and uses Code to protect himself from danger. Guy uses Dijkstra to find a path.",
    mail: "mujtaba@gmail.com",
    img: "./images/mujtaba.png"
  },
  {
    name: "Hasaan",
    title: "Designer & Front End Engineer",
    desc: "He is the only guy who uses malt (As a beer) and uses Code to protect himself from danger. Guy uses Dijkstra to find a path.",
    mail: "hasaan@gmail.com",
    img: "./images/hasaan.jpg"
  },
  {
    name: "Haider",
    title: "Designer & Front End Engineer",
    desc: "He is the only guy who uses malt (As a beer) and uses Code to protect himself from danger. Guy uses Dijkstra to find a path.",
    mail: "haider@gmail.com",
    img: "./images/profile.png"
  }
];

function AboutSection() {
  return (
    <div className="mx-auto md:flex justify-evenly items-center sm:flex-wrap p-5">
      <Carousel>

      {users.map((user, index) => (
        <React.Fragment key={index}>
          <UserCard
            name={user.name}
            title={user.title}
            desc={user.desc}
            mail={user.mail}
            img={user.img}
            />
        </React.Fragment>
      ))}
      </Carousel>
    </div>
  );
}

export default AboutSection;
