import React from 'react';
import footerBg from '../assets/logo Design and deploy.jpg';

const Footer = () => {
  return (
    <footer className="w-full bg-[#f8f8f8] dark:bg-[#0a0a0a] transition-colors duration-500 py-6 px-4 md:px-10 flex justify-center pb-8">
      
      {/* Floating Glass Footer Card */}
      <div 
        className="group relative w-full max-w-6xl rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/60 dark:border-white/10 cursor-pointer md:cursor-default transition-all duration-500"
        onClick={(e) => {
          e.currentTarget.classList.toggle('active-mobile');
        }}
      >
        
        {/* Background Image Layer */}
        <div 
          className="absolute inset-0 w-full h-full z-0 transform group-hover:scale-105 [.active-mobile_&]:scale-125 [.active-mobile_&]:rotate-12 md:[.active-mobile_&]:scale-105 md:[.active-mobile_&]:rotate-0 transition-transform duration-[2000ms]"
          style={{
            backgroundImage: `url("${footerBg}")`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />

        {/* Light Glassmorphism Overlay - Hidden until hovered */}
        <div className="absolute inset-0 bg-white/70 dark:bg-black/70 backdrop-blur-md z-10 opacity-0 group-hover:opacity-100 [.active-mobile_&]:opacity-100 transition-opacity duration-[800ms]" />

        {/* Content - Hidden until hovered */}
        <div className="relative z-20 w-full px-8 md:px-12 py-8 flex flex-col opacity-0 group-hover:opacity-100 [.active-mobile_&]:opacity-100 transition-all duration-[800ms] pointer-events-none group-hover:pointer-events-auto [.active-mobile_&]:pointer-events-auto delay-[50ms]">
          
          {/* Horizontal Layout for Desktop */}
          <div className="flex flex-col md:flex-row justify-between items-center md:items-start w-full gap-8">
            
            {/* Left Side: Headline & Branding */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left max-w-lg">
              <h2 className="text-3xl md:text-4xl font-serif text-black dark:text-white font-extrabold tracking-tighter mb-2">
                LET'S WORK TOGETHER.
              </h2>
              <p className="text-gray-800 dark:text-gray-300 text-xs md:text-sm font-bold leading-relaxed">
                Building immersive and highly performant web experiences. Open to discussing collaborations and new partnerships.
              </p>
            </div>

            {/* Right Side: Links */}
            <div className="flex gap-12 md:gap-16">
              
              {/* Quick Links */}
              <div className="flex flex-col items-center md:items-start">
                <h4 className="text-sm font-bold text-black dark:text-white mb-3 uppercase tracking-wider">Explore</h4>
                <ul className="space-y-1.5 text-center md:text-left">
                  {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
                    <li key={item}>
                      <a href={`#${item.toLowerCase() === 'skills' ? 'technologies' : item.toLowerCase()}`} className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300 font-bold text-[11px] uppercase tracking-wide">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Socials */}
              <div className="flex flex-col items-center md:items-start">
                <h4 className="text-sm font-bold text-black dark:text-white mb-3 uppercase tracking-wider">Connect</h4>
                <ul className="space-y-1.5 text-center md:text-left">
                  <li>
                    <a href="https://github.com/aashishprasad-duodev" target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300 font-bold text-[11px] uppercase tracking-wide">
                      GitHub ↗
                    </a>
                  </li>
                  <li>
                    <a href="https://linkedin.com/in/aashish-prasad-237b25242" target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300 font-bold text-[11px] uppercase tracking-wide">
                      LinkedIn ↗
                    </a>
                  </li>
                  <li>
                    <a href="mailto:aashishprasad666@gmail.com" className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300 font-bold text-[11px] uppercase tracking-wide">
                      Email ↗
                    </a>
                  </li>
                </ul>
              </div>

            </div>
          </div>

          <hr className="w-full border-gray-400/30 dark:border-gray-600/30 my-6" />

          {/* Copyright Area */}
          <div className="w-full flex flex-col md:flex-row justify-between items-center">
            <p className="text-[10px] text-gray-800 dark:text-gray-300 font-bold tracking-wider uppercase">
              © {new Date().getFullYear()} Aashish Prasad.
            </p>
            <p className="text-[10px] text-gray-800 dark:text-gray-300 font-bold tracking-wider uppercase mt-2 md:mt-0">
              Designed with <span className="text-red-500 animate-pulse inline-block text-sm">♥</span>
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;