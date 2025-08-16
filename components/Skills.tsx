import { SkillLogos } from "@/data";
import React from "react";

const Skills = () => {
  return (
    <div className="w-full" id="skills">
      <h1 className="heading">
        My <span className="text-purple">skills</span>
      </h1>
      <div className="w-full mt-12 gap-6 flex justify-center flex-wrap">
        {SkillLogos.map((info) => (
          <a
            key={info.id}
            target="_blank"
            rel="noopener noreferrer"
            className="w-20 h-20 my-4 flex justify-center items-center 
                         backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 
                         rounded-lg border border-black-300 transition-all duration-300 ease-in-out 
                         hover:scale-110 hover:shadow-lg hover:shadow-pink-500/50"
          >
            <img
              src={info.img}
              alt="icons"
              width={40}
              height={40}
              className="transition duration-300 hover:brightness-125"
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Skills;
