import { FaWhatsapp } from "react-icons/fa6";

import { socialMedia } from "@/data";
import MagicButton from "./ui/MagicButton";

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10" id="contact">
      {/* background grid */}
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50 "
        />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Let’s <span className="text-purple">Connect</span> and{" "}
          <span className="text-purple">Build</span> Something{" "}
          <span className="text-purple">Amazing</span>
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-lg text-center">
          I love connecting with developers, designers, and tech enthusiasts.
          Have a project, question, or idea? Let’s talk and create something
          impactful.
        </p>

        <a href="mailto:abdulvahabaa916@gmail.com">
          <MagicButton
            title="Let's get in touch"
            icon={<FaWhatsapp />}
            position="left"
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <div className="flex flex-col items-center p-4">
          <p className="md:text-base text-sm md:font-normal font-light">
            © 2025 Abdul Vahab • Professional Web Developer • Graphic Designer •
            UI/UX Developer
          </p>
        </div>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <div
              key={info.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <img src={info.img} alt="icons" width={20} height={20} />
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
