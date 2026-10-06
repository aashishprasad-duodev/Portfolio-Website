import React, { useState } from 'react';
import selfimage from '../assets/selfimage.png';
import selfimage2 from '../assets/selfimage2.png';
import selfimage3 from '../assets/selfimage3.png';

const FlipCard = ({ img, title, subtitle }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className="w-56 h-56 md:w-64 md:h-64 bg-transparent group [perspective:1000px] cursor-pointer"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div className={`relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] md:group-hover:[transform:rotateY(180deg)] ${isFlipped ? '[transform:rotateY(180deg)]' : ''}`}>
        {/* Front Face */}
        <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] bg-white dark:bg-gray-900 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-800">
          <img className='w-full h-full object-contain rounded-2xl' src={img} alt={title} />
        </div>
        {/* Back Face */}
        <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] bg-black rounded-2xl shadow-lg border border-gray-800 flex flex-col items-center justify-center">
          <span className="text-white font-bold text-2xl md:text-3xl tracking-wide text-center uppercase px-2">{title}</span>
          <span className="text-gray-400 font-medium text-sm md:text-base absolute bottom-6">{subtitle}</span>
        </div>
      </div>
    </div>
  );
};

const KeyFeatures = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center py-16 md:py-24 px-4 md:px-10">
      
      {/* Container for Cards */}
      <div className="w-full max-w-5xl flex items-center justify-center mb-12">
        
        {/* Three Square Boxes (Cards) */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 w-full justify-center items-center">
          <FlipCard img={selfimage} title="REACT JS" subtitle="Frontend" />
          <FlipCard img={selfimage2} title="NODE JS" subtitle="Backend" />
          <FlipCard img={selfimage3} title="Deployment" subtitle="Netlify / Vercel" />
        </div>
      </div>

      {/* Bottom Title */}
      <h2 className="text-3xl md:text-5xl font-serif text-black dark:text-white text-center">
        KEY Concepts
      </h2>
      
    </div>
  );
};

export default KeyFeatures;
