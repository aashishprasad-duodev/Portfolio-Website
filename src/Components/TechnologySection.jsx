import React from "react";
import html from "../assets/html.jpg";
import react from "../assets/Reactjs.jpg";
import email from "../assets/email 2.jpg";

const techIcons = [
  { id: 1, src: html, alt: "HTML" },
  { id: 2, src: react, alt: "React" },
  { id: 3, src: react, alt: "React" },
  { id: 4, src: email, alt: "Email" },
  { id: 5, src: react, alt: "React" },
  { id: 6, src: react, alt: "React" },
  { id: 7, src: html, alt: "HTML" },
];

const TechnologySection = () => {
  return (
    <div className="w-full h-auto min-h-[5rem] mt-8 md:mt-12 mb-8 md:mb-12 py-4 md:py-0 overflow-hidden relative flex group cursor-pointer">
      
      {/* First Scrolling Group */}
      <div className="flex min-w-full flex-shrink-0 animate-marquee group-hover:[animation-play-state:paused] items-center justify-around gap-8 md:gap-16 px-4 md:px-8">
        {techIcons.map((tech, index) => (
          <div key={`group1-${index}`} className="w-14 h-14 md:w-20 md:h-20 flex-shrink-0 rounded-full hover:scale-110 transition-transform duration-300">
            <img
              className="w-full h-full object-cover border-2 border-gray-400 rounded-full"
              src={tech.src}
              alt={tech.alt}
            />
          </div>
        ))}
      </div>

      {/* Second Scrolling Group (identical duplicate to follow the first) */}
      <div className="flex min-w-full flex-shrink-0 animate-marquee group-hover:[animation-play-state:paused] items-center justify-around gap-8 md:gap-16 px-4 md:px-8">
        {techIcons.map((tech, index) => (
          <div key={`group2-${index}`} className="w-14 h-14 md:w-20 md:h-20 flex-shrink-0 rounded-full hover:scale-110 transition-transform duration-300">
            <img
              className="w-full h-full object-cover border-2 border-gray-400 rounded-full"
              src={tech.src}
              alt={tech.alt}
            />
          </div>
        ))}
      </div>

    </div>
  );
};

export default TechnologySection;
