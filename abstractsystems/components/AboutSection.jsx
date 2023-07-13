import React from 'react';
import UserCard from './userCard';

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
    img: "./images/profile.png"
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
      {users.map((user, index) => (
        <React.Fragment key={index}>
          <UserCard
            name={user.name}
            title={user.title}
            desc={user.desc}
            mail={user.mail}
            img={user.img}
          />
          {index !== users.length - 1 && (
            <div className="my-8 md:my-8 mx-8">
              {/* Add increased vertical spacing between the current card and the next card */}
            </div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
}

export default AboutSection;
