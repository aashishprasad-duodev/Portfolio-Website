import React, { useState, useEffect } from "react";
import logo from "../assets/logoDesign.png";
import self from "../assets/self.jpg";

const navLinks = ["Home", "About", "Technologies", "Projects", "Contact"];

const Navbar = ({ toggleTheme, isDark }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  
  // Typewriter effect state
  const fullText = "Inspired by Satish Kumar, Sr. Dev @ duo-dev";
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // Logo flip effect
  useEffect(() => {
    const interval = setInterval(() => {
      setIsFlipped((prev) => !prev);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  // Typewriter effect logic
  useEffect(() => {
    let timeoutId;
    
    if (isDeleting) {
      if (displayedText.length > 0) {
        timeoutId = setTimeout(() => {
          setDisplayedText(fullText.substring(0, displayedText.length - 1));
        }, 30); // Deleting speed
      } else {
        setIsDeleting(false);
        timeoutId = setTimeout(() => {}, 500);
      }
    } else {
      if (displayedText.length < fullText.length) {
        timeoutId = setTimeout(() => {
          setDisplayedText(fullText.substring(0, displayedText.length + 1));
        }, 100); // Typing speed
      } else {
        timeoutId = setTimeout(() => {
          setIsDeleting(true);
        }, 3000); // Pause when text is fully typed
      }
    }
    
    return () => clearTimeout(timeoutId);
  }, [displayedText, isDeleting]);

  return (
    <div className="navbar flex flex-col md:flex-row items-center justify-between w-full px-4 md:px-10 py-4 gap-4 md:gap-0">
      
      {/* Left Section: Logo & Typewriter */}
      <div className="flex items-center gap-4 md:flex-1">
        {/* Logo with Auto-Flip Effect */}
        <div className="logo w-24 h-24 md:w-28 md:h-28 [perspective:1000px] shrink-0">
          <div 
            className={`relative w-full h-full transition-transform duration-[800ms] [transform-style:preserve-3d] ${isFlipped ? '[transform:rotateY(180deg)]' : ''}`}
          >
            {/* Front face (Logo) */}
            <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] flex items-center justify-center bg-white dark:bg-gray-800 rounded-full">
              <img
                className="w-full h-full object-contain rounded-full"
                src={logo}
                alt="Logo"
              />
            </div>

            {/* Back face (Self Image) */}
            <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] flex items-center justify-center bg-white dark:bg-gray-800 rounded-full">
              <img
                className="w-full h-full object-contain rounded-full drop-shadow-md p-1"
                src={self}
                alt="Aashish"
              />
            </div>
          </div>
        </div>

        {/* Typewriter Effect (Hidden on very small screens) */}
        <div className="hidden lg:flex items-center max-w-[250px] xl:max-w-sm">
          <span className="font-mono text-xs xl:text-sm font-semibold text-gray-600 dark:text-gray-300 min-h-[40px] flex items-center">
            {displayedText}
            <span className="animate-pulse border-r-2 border-black dark:border-white h-4 ml-1"></span>
          </span>
        </div>
      </div>

      {/* Center Section: Navigation */}
      <div className="navlink flex justify-center items-center">
        <ul className="flex flex-wrap gap-4 md:gap-6 justify-center items-center">
          {navLinks.map((link) => (
            <li
              key={link}
              className="font-bold cursor-pointer hover:text-gray-500 dark:hover:text-gray-400 transition text-sm md:text-base"
            >
              <a href={`#${link.toLowerCase()}`}>{link}</a>
            </li>
          ))}
        </ul>
      </div>

      {/* Right Section: Appearance Button */}
      <div className="buttonofApperance flex justify-center md:justify-end items-center w-auto md:flex-1">
        <button
          onClick={toggleTheme}
          className="
            bg-black dark:bg-white
            text-white dark:text-black
            w-24 md:w-32
            h-10
            flex
            justify-center
            items-center
            rounded-md
            cursor-pointer
            hover:bg-gray-800 dark:hover:bg-gray-200
            transition-colors duration-300
            text-sm md:text-base
            font-bold shadow-md
          "
        >
          {isDark ? '☀️ Light' : '🌙 Dark'}
        </button>
      </div>
    </div>
  );
};

export default Navbar;