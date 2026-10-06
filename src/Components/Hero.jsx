import React from "react";
import self from "../assets/Front.png";

const Hero = () => {
  return (
    <div
      id="home"
      className="
        centerbody
        flex-grow
        flex
        items-center
        justify-center
        w-full
        px-4 md:px-10
        py-8 md:py-0
      "
    >
      {/* Main Rectangle */}
      <div
        className="
          rectangle
          flex
          flex-col md:flex-row
          w-[95%] md:w-[80%]
          bg-gradient-to-r
          from-gray-100 dark:from-gray-800
          to-gray-300 dark:to-gray-900
          h-auto
          rounded-md
          overflow-hidden
          mb-8 md:mb-0
        "
      >
        {/* =========================
            LEFT SIDE
        ========================== */}
        <div className="left w-full md:w-[32%] h-auto md:h-full flex justify-start">
          <div className="relative group w-full h-auto md:h-full cursor-pointer overflow-hidden border-b-2 md:border-b-0 md:border-r-2 border-gray-300 dark:border-gray-700">
            <img
              className="
                w-full
                h-full
                object-contain md:object-cover
                object-right md:object-top
                transition-all duration-500
                group-hover:blur-sm
                group-hover:scale-105
              "
              src={self}
              alt="Self"
            />
            
            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
              <span className="text-white font-serif font-light text-3xl md:text-4xl tracking-[0.2em] drop-shadow-2xl text-center px-4 uppercase">
                AASHISH PRASAD
              </span>
            </div>
          </div>
        </div>

        {/* =========================
            RIGHT SIDE
        ========================== */}
        <div
          className="
            right
            relative
            w-full md:w-[68%]
            h-auto md:h-full
            py-8 md:py-10
            flex
            flex-col
            justify-center md:justify-evenly
            items-center
            gap-8 md:gap-12
          "
        >
          {/* Vertical Text Stripe (Absolute) */}
          <div className="hidden md:flex absolute left-0 top-0 bottom-0 flex-col items-center justify-center w-16 lg:w-20 border-l-2 border-gray-300 dark:border-gray-700 pointer-events-none">
            <div className="flex flex-col items-center gap-4 [writing-mode:vertical-rl] rotate-180">
              <span className="text-xl lg:text-2xl font-black text-gray-800 dark:text-gray-200 tracking-[0.2em] uppercase whitespace-nowrap">
                AASHISH PRASAD
              </span>
              <span className="text-xs font-bold text-gray-500 dark:text-gray-400 tracking-widest uppercase whitespace-nowrap">
                MERN-STACK DEV
              </span>
            </div>
          </div>

          {/* Heading */}
          <div
            className="
              topmost
              w-full
              flex
              flex-col
              justify-center
              items-center
              gap-3 md:gap-5
            "
          >
            <div className="text-4xl md:text-6xl leading-tight font-serif text-center text-black dark:text-white">
              Design Better
            </div>
            <div className="text-3xl md:text-5xl font-serif text-center text-black dark:text-white">
              CODE Smarter
            </div>
          </div>

          {/* Description */}
          <div className="w-full flex justify-center">
            <p
              className="
                w-[90%] md:w-[60%]
                font-semibold
                text-gray-500 dark:text-gray-400
                leading-6
                text-center
                text-sm md:text-base
              "
            >
              I build refined code that is easy to read and maintain. I am a
              full stack developer with a passion for creating beautiful and
              functional websites. I have experience with a variety of
              technologies.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center gap-5">
            <a
              href="#contact"
              className="
                group
                bg-black dark:bg-white
                rounded-md
                w-32
                h-10
                text-white dark:text-black
                flex
                justify-center
                items-center
                cursor-pointer
                hover:bg-gray-800 dark:hover:bg-gray-200
                hover:scale-105
                active:scale-95
                transition-all
                duration-300
                text-sm md:text-base
              "
            >
              <span className="inline-block transition-transform duration-300 group-hover:-translate-x-1">Get</span>
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1 ml-1">in touch</span>
            </a>
            <a
              href="#projects"
              className="
                group
                bg-black dark:bg-white
                rounded-md
                w-32
                h-10
                text-white dark:text-black
                flex
                justify-center
                items-center
                cursor-pointer
                hover:bg-gray-800 dark:hover:bg-gray-200
                hover:scale-105
                active:scale-95
                transition-all
                duration-300
                text-sm md:text-base
              "
            >
              <span className="inline-block transition-transform duration-300 group-hover:-translate-x-1">View</span>
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1 ml-1">Projects</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
