import React from "react";
import facebook from "../assets/images/facebook-fill.png";
import instargram from "../assets/images/instagram-fill.png";
import twitter from "../assets/images/twitter-fill.png";
import youtube from "../assets/images/youtube-fill.png";
interface Team {
  avatar: string;
  name: string;
  job: string;
  about: string;
}

export const logo = [facebook, instargram, twitter, youtube];

const TeamMember: React.FC<Team> = (props) => {
  return (
    <div className="w-full shadow-2xl mt-5">
      <img className="w-1/3 mx-auto" src={props.avatar} alt="this is avatar" />
      <div className="p-3">
        <h1 className="w-full text-center uppercase font-bold text-xl">
          {props.name}
        </h1>
        <h1 className="w-full text-center uppercase text-sm my-2 text-yellow-500">
          {props.job}
        </h1>
        <p className="w-fill text-center">{props.about}</p>
      </div>
      <div className="w-5/6 mx-auto flex justify-evenly py-5">
        {logo.map((itm) => (
          <div>
            <img className="w-1/3 shadow-2xl" src={itm} alt="this is logo" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamMember;
