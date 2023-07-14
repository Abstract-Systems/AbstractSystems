import React from 'react';

const UserCard = (props) => {
  return (
    <div className="bg-[#42433E] rounded-lg p-4 shadow-lg">
      <div className="flex flex-col items-center">
        <img
          src={props.img}
          alt="Profile"
          className="w-40 h-40 rounded-full border-10 border-yellow-500"
        />
        <div className="text-center mt-4">
          <h2 className="text-xl font-bold font-barlow-condensed tracking-widest text-[#F0F0F0]">{props.name}</h2>
          <p className="text-lg text-gray-500 font-barlow-condensed">{props.title}</p>
          <p className="mt-4 text-[#F0F0F0]">{props.desc}</p>
        </div>
        <div className="flex items-center mt-6 bg-[#D9D9D9] rounded-lg p-2">
          <img src="./images/gmail.png" alt="" className="w-6 h-6" />
          <span className="text-[#434343] ml-2">{props.mail}</span>
        </div>
        <div className="flex justify-end mt-4 space-x-2">
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <img src="./images/linkedin.png" alt="" className="w-6 h-6" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <img src="./images/twitter.png" alt="" className="w-6 h-6" />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <img src="./images/github.png" alt="" className="w-6 h-6" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <img src="./images/insta.png" alt="" className="w-6 h-6" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
