import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import MagicButton from "./ui/MagicButton";
import { RiFileDownloadFill } from "react-icons/ri";
import { socialMedia } from "@/data";

const Hero = () => {
  return (
    <div className="pb-10 pt-31" id="home">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      <div
        className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center"
      >
        <div
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>
      <div className="flex justify-start relative my-10 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <TextGenerateEffect
            words="Hi! I'm Abdul Vahab"
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
          />

          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            Web Developer | Graphic Desinger | UI/UX Developer | Freelancer |
            Based in India.
          </p>
          <div className="flex items-center md:gap-3 gap-6">
            {socialMedia.map((info) => (
              <a
                key={info.id}
                href={info.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 my-4 cursor-pointer flex justify-center items-center 
                 backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 
                 rounded-lg border border-black-300 transition-all duration-300 ease-in-out 
                 hover:scale-110 hover:shadow-lg hover:shadow-orange-500/70"
              >
                <img
                  src={info.img}
                  alt="icons"
                  width={20}
                  height={20}
                  className="transition duration-300 hover:brightness-125"
                />
              </a>
            ))}
          </div>

          <a href="#about">
            <MagicButton
              title="Download Resume"
              icon={<RiFileDownloadFill />}
              position="left"
            />
          </a>
        </div>
        <div>
          <img
            className="max-w-xs md:max-w-sm lg:max-w-md"
            src="/Profile image edit.png"
            alt="hero"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
