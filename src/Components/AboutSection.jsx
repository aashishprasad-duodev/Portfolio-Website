import React, { useState } from 'react';
import self from '../assets/Front.png';

const AboutSection = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div id="about" className="w-full flex items-center justify-center py-16 px-4 md:px-10">
      <div className="w-full md:w-[80%] flex flex-col md:flex-row items-center justify-center gap-12 md:gap-20">
        
        {/* Left side: Circular Image with Flip Effect */}
        <div className="flex-1 flex justify-center md:justify-end">
          <div 
            className="w-56 h-56 md:w-72 md:h-72 bg-transparent group [perspective:1000px] cursor-pointer"
            onClick={() => setIsFlipped(!isFlipped)}
          >
            <div className={`relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] md:group-hover:[transform:rotateY(180deg)] ${isFlipped ? '[transform:rotateY(180deg)]' : ''}`}>
              
              {/* Front Face (Image) */}
              <div className="absolute inset-0 w-full h-full [backface-visibility:hidden]">
                <img 
                  src={self} 
                  alt="Aashish Prasad" 
                  className="w-full h-full rounded-full object-cover object-top shadow-xl border-4 border-white"
                />
              </div>

              {/* Back Face (Name) */}
              <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-full shadow-xl border-4 border-white bg-black flex items-center justify-center">
                <span className="text-white font-serif font-light text-xl md:text-2xl tracking-[0.2em] text-center uppercase px-4">
                  Aashish Prasad
                </span>
              </div>

            </div>
          </div>
        </div>

        {/* Right side: Text Content */}
        <div className="flex-1 flex flex-col justify-center items-center md:items-start text-center md:text-left">
          <h2 className="text-3xl md:text-5xl font-serif text-black dark:text-white mb-6">
            About Me
          </h2>
          
          <p className="w-[90%] md:w-[80%] text-gray-600 dark:text-gray-300 font-semibold leading-relaxed text-base md:text-lg">
            With a strong educational background in Computer Applications (MCA & BCA), I bring both creativity and technical expertise to the web. I specialize in crafting highly interactive user interfaces as a Frontend React Developer, backend by solid full-stack experience using the complete MERN stack.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
