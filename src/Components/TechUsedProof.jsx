import React, { useState } from 'react';
import img1 from '../assets/spider hanging.jpg';
import img2 from '../assets/gwen.jpg';
import img3 from '../assets/hold.jpg';
import img4 from '../assets/building.jpg';
import img5 from '../assets/pose.jpg';
import img6 from '../assets/sitting.jpg';
import img7 from '../assets/venom.jpg';
import img8 from '../assets/spidy logo.jpg';
import img9 from '../assets/Spider-Man.jpg';

const boxes = [
  { id: 1, title: "HTML", img: img1 },
  { id: 2, title: "CSS", img: img2 },
  { id: 3, title: "JavaScript", img: img3 },
  { id: 4, title: "React JS", img: img4 },
  { id: 5, title: "Next JS (in progress)", img: img5 },
  { id: 6, title: "Node JS", img: img6 },
  { id: 7, title: "Express JS", img: img7 },
  { id: 8, title: "MongoDB", img: img8 },
  { id: 9, title: "Auth + Deployment", img: img9 },
];

const FlipBox = ({ box }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  React.useEffect(() => {
    let timer;
    if (isFlipped) {
      timer = setTimeout(() => {
        setIsFlipped(false);
      }, 2000);
    }
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [isFlipped]);

  return (
    <div 
      className="relative w-full h-[400px] snap-start shrink-0 cursor-pointer group/flip [perspective:1000px]"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div 
        className={`w-full h-full relative transition-transform duration-700 [transform-style:preserve-3d] ${isFlipped ? '[transform:rotateY(180deg)]' : ''}`}
      >
        
        {/* FRONT SIDE (Frosted Glass & Tech Name) */}
        <div className="absolute inset-0 [backface-visibility:hidden] group/box bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-800 dark:to-gray-900 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden flex items-center justify-center">
           {/* Solid Black Background that fades in on hover */}
           <div className="absolute inset-0 bg-black opacity-0 group-hover/box:opacity-100 transition-opacity duration-500 z-0"></div>

           {/* Text Content */}
           <div className="absolute inset-0 flex items-center justify-center p-6 z-10 transition-transform duration-700 scale-90 group-hover/box:scale-100">
              <span className="text-gray-800 dark:text-gray-100 group-hover/box:text-white transition-colors duration-500 font-bold text-3xl md:text-4xl text-center leading-snug tracking-wider">
                {box.title}
              </span>
           </div>

           {/* Frosted Glass Overlay */}
           <div className="absolute inset-0 bg-white/50 dark:bg-black/30 backdrop-blur-[20px] transition-all duration-500 group-hover/box:opacity-0 z-20 pointer-events-none border border-white/50 dark:border-white/10 rounded-2xl">
           </div>
        </div>

        {/* BACK SIDE (Spider Image) */}
        <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] bg-black rounded-2xl shadow-xl overflow-hidden flex items-center justify-center p-4">
            <img 
              src={box.img} 
              alt={box.title} 
              className="w-full h-full object-contain opacity-80 group-hover/flip:opacity-100 transition-opacity duration-500"
            />
        </div>

      </div>
    </div>
  );
};

const TechUsedProof = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setShowTooltip(false);
    }, 10000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div id="technologies" className="w-full py-16 md:py-24 px-4 md:px-10 flex flex-col items-center">
      
      {/* Title */}
      <h2 className="text-3xl md:text-5xl font-serif text-black dark:text-white mb-16 text-center tracking-widest">
        TECHNOLOGIES
      </h2>

      {/* Outer wrapper for the tooltip hover detection */}
      <div className="relative group w-full max-w-6xl">
        
        {/* Scrollable Container with Snapping */}
        <div className="relative w-full h-[400px] overflow-y-auto no-scrollbar snap-y snap-mandatory rounded-2xl">
          
          {/* Glass Tooltip on Hover (Inside scroll area so it scrolls away with the first 3 boxes) */}
          {showTooltip && (
            <div className="absolute top-[320px] left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-30">
               <div className="px-6 py-3 bg-white/40 dark:bg-black/40 backdrop-blur-md border border-white/50 dark:border-white/10 shadow-[0_4px_20px_rgba(0,0,0,0.15)] rounded-full text-gray-800 dark:text-gray-200 text-sm font-semibold tracking-wide whitespace-nowrap">
                  Scroll down ↓
               </div>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {boxes.map((box) => (
              <FlipBox key={box.id} box={box} />
            ))}
          </div>
        </div>

      </div>

    </div>
  );
};

export default TechUsedProof;
