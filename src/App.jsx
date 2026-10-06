import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import TechnologySection from "./Components/TechnologySection";
import AboutSection from "./Components/AboutSection";
import KeyFeatures from "./Components/KeyFeatures";
import TechUsedProof from "./Components/TechUsedProof";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

const App = () => {
  const [isDark, setIsDark] = useState(false);
  const toggleTheme = () => setIsDark(!isDark);

  return (
    <div className={isDark ? 'dark' : ''}>
      <div className="w-full min-h-screen flex flex-col justify-between overflow-x-hidden bg-[#f8f8f8] dark:bg-[#0a0a0a] text-black dark:text-white transition-colors duration-500">
        <Navbar toggleTheme={toggleTheme} isDark={isDark} />
        <Hero />
        <TechnologySection />
        <AboutSection />
        <KeyFeatures />
        <TechUsedProof />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default App;