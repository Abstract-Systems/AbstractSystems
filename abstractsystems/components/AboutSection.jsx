import React from 'react';
import UserCard from './userCard';

function AboutSection() {
  return (
    <div className="mx-auto md:flex justify-evenly items-center sm:flex-wrap p-5">
      <UserCard
        name="Mujtaba"
        title="Full Stack Dev"
        desc="He is the only guy who uses malt (As a beer) and uses Code to protect himself from danger. Guy uses Dijkstra to find a path."
        mail="mujtaba@gmail.com"
        img="./images/mujtaba.png"
      />
      <div className="my-8 md:my-8 mx-8">
        {/* Add increased vertical spacing between the first and second card */}
      </div>
      <UserCard
        name="Hasaan"
        title="Designer & Front End Engineer"
        desc="He is the only guy who uses malt (As a beer) and uses Code to protect himself from danger. Guy uses Dijkstra to find a path."
        mail="hasaan@gmail.com"
        img="./images/profile.png"
      />
      <div className="my-8 md:my-8 mx-8">
        {/* Add increased vertical spacing between the second and third card */}
      </div>
      <UserCard
        name="Haider"
        title="Designer & Front End Engineer"
        desc="He is the only guy who uses malt (As a beer) and uses Code to protect himself from danger. Guy uses Dijkstra to find a path."
        mail="haider@gmail.com"
        img="./images/profile.png"
      />
    </div>
  );
}

export default AboutSection;
