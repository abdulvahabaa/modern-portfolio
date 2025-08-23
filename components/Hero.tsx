"use client";
import React, { useState } from "react";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import MagicButton from "./ui/MagicButton";
import { RiFileDownloadFill } from "react-icons/ri";
import { socialMedia } from "@/data";
import Lottie from "react-lottie";
import confettiAnimation from "@/data/confetti.json"; // 👈 your lottie file

const Hero = () => {
  const [showConfetti, setShowConfetti] = useState(false);

  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: confettiAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const handleDownload = () => {
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 2000); // hide after 2s
  };

  return (
    <div className="py-20 pt-31" id="home">
      {/* Background spotlights */}
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

      {/* Background grid mask */}
      <div
        className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] 
        bg-grid-black-100/[0.2] absolute top-0 left-0 flex items-center justify-center"
      >
        <div
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
          bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      {/* Hero Content */}
      <div className="flex justify-start relative z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <TextGenerateEffect
            words="Hi! I'm Abdul Vahab"
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
          />

          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            Web Developer | Graphic Designer | UI/UX Developer | Freelancer |
            Based in India.
          </p>

          {/* Social Media Links */}
          <div className="flex items-center justify-center gap-3">
            {socialMedia.map((info) => (
              <a
                key={info.id}
                href={info.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 my-4 cursor-pointer flex justify-center items-center 
                  backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 
                  rounded-lg border border-black-300 transition-all duration-300 ease-in-out 
                  hover:scale-110 hover:shadow-lg hover:shadow-orange-500/60"
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

          {/* Download Button with Confetti */}
          <div className="relative flex items-center justify-center">
            {showConfetti && (
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <Lottie options={defaultOptions} height={300} width={300} />
              </div>
            )}

            <a
              href="/assets/docs/Abdul Vahab Resume.pdf"
              download
              onClick={handleDownload}
            >
              <MagicButton
                title="Download Resume"
                icon={<RiFileDownloadFill />}
                position="left"
              />
            </a>
          </div>
        </div>

        {/* Hero Image */}
        <div>
          <img
            className="max-w-xs md:max-w-sm lg:max-w-md"
            src="/assets/images/Profile image edit.png"
            alt="hero"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
