"use client";

import { FaLocationArrow } from "react-icons/fa6";
import { projects } from "@/data";

const RecentProjects = () => {
  return (
    <section className="py-10 w-full" id="projects">
      <h1 className="heading text-center">
        Where <span className="text-purple">Code</span> Meets{" "}
        <span className="text-purple">Creativity</span>
      </h1>

      {/* Responsive Grid */}
      <div className="grid gap-8 mt-12 p-4 sm:gap-10 grid-cols-[repeat(auto-fit,minmax(280px,1fr))]">
        {projects.map((item) => (
          <article
            key={item.id}
            className="relative group bg-[#13162D]/80 border border-purple/20 rounded-2xl 
                       overflow-hidden flex flex-col justify-between 
                       transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_20px_#CBACF933]"
          >
            {/* Inner card content */}
            <div className="p-6 flex flex-col h-full">
              {/* Project Image */}
              <figure className="relative w-full h-40 rounded-xl overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </figure>

              {/* Title */}
              <h2 className="mt-4 text-lg md:text-xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-red-400 bg-clip-text">
                {item.title}
              </h2>

              {/* Description */}
              <p className="mt-2 text-sm text-gray-400">{item.des}</p>

              {/* Footer */}
              <footer className="flex justify-between items-center mt-6">
                {/* Tech Icons */}
                <div className="flex -space-x-3">
                  {item.iconLists.map((icon, index) => (
                    <img
                      key={index}
                      src={icon}
                      alt="tech-icon"
                      className="w-9 h-9 rounded-full border border-white/20 bg-black/70 p-1 transition-transform duration-300 hover:scale-110"
                    />
                  ))}
                </div>

                {/* Live Site Link */}
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-purple-400 text-sm hover:text-pink-400 transition-colors"
                >
                  Live Site
                  <FaLocationArrow className="ml-2 transition-transform duration-300 group-hover:rotate-45" />
                </a>
              </footer>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default RecentProjects;
