import { educationData } from "@/data";
import React from "react";
import { FaGraduationCap, FaTools, FaAward } from "react-icons/fa";

const Education = () => {
  // Function to get icon based on type
  const getIcon = (type: string) => {
    switch (type) {
      case "Education":
        return <FaGraduationCap size={25} />;
      case "Training":
        return <FaTools size={25} />;
      case "Certification":
        return <FaAward size={25} />;
      default:
        return <FaGraduationCap size={25} />;
    }
  };

  return (
    <div className="py-20 w-full" id="education">
      <h1 className="heading text-center">
        My <span className="text-purple">Learning</span> &{" "}
        <span className="text-purple">Certifications</span>
      </h1>

      <div className="mt-12 grid gap-8 p-4 sm:grid-cols-2 lg:grid-cols-3">
        {educationData.map((edu) => (
          <div
            key={edu.id}
            className="group relative border border-purple/20 rounded-2xl p-6 
                       transition-all duration-500 hover:border-purple-600 hover:shadow-[0_0_30px_#CBACF933]"
          >
            {/* Icon */}
            <div
              className="absolute -top-5 left-6 flex items-center justify-center w-10 h-10 
                            rounded-full bg-purple-500 text-white shadow-lg shadow-purple-500/30"
            >
              {getIcon(edu.type)}
            </div>

            {/* Degree / Title */}
            <h2 className="text-lg md:text-xl font-bold text-pink-500 mt-8">
              {edu.degree}
            </h2>

            {/* School / Platform */}
            <p className="mt-1 text-sm text-orange-300">{edu.school}</p>

            {/* Duration */}
            <p className="mt-1 text-xs text-white italic">{edu.duration}</p>

            {/* Description */}
            <p className="mt-3 text-sm text-white leading-relaxed">
              {edu.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
