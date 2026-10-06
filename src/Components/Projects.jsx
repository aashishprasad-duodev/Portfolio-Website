import React from 'react';

const projectsData = [
  {
    title: "DevHire - Full Stack Job Portal (In Progress)",
    techStack: "React.js, Node.js, Express.js, MongoDB, JWT, REST API",
    bullets: [
      "Building a full-stack MERN job portal with role-based access for job seekers and recruiters.",
      "Implementing user registration, login, JWT authentication, protected routes, job CRUD operations, search, filtering, and application tracking.",
      "Designing RESTful APIs and MongoDB data models for users, jobs, and applications; planning resume upload and recruiter dashboard modules."
    ]
  },
  {
    title: "Personal Portfolio Website",
    techStack: "React.js, Tailwind CSS, UI/UX Design",
    bullets: [
      "Designed and built a highly interactive, modern personal portfolio website to showcase technical skills and projects.",
      "Implemented complex CSS 3D transforms, glassmorphism UI elements, and custom scroll-snapping layouts for an immersive user experience.",
      "Developed engaging animations including infinite scroll marquees and dynamic interactive flip cards."
    ]
  }
];

const Projects = () => {
  return (
    <div id="projects" className="w-full py-16 md:py-24 px-4 md:px-10 flex flex-col items-center">
      <h2 className="text-3xl md:text-5xl font-serif text-black dark:text-white mb-16 text-center tracking-widest">
        PROJECTS
      </h2>
      
      <div className="w-full max-w-5xl flex flex-col gap-10">
        {projectsData.map((project, index) => (
            <div 
              key={index} 
              className={`relative group w-full h-[450px] bg-black rounded-[2rem] overflow-hidden border border-white/10 shadow-lg cursor-pointer transition-all duration-500`}
              onClick={(e) => {
                e.currentTarget.classList.toggle('active-mobile');
              }}
            >
              {/* Subtle premium glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 [.active-mobile_&]:opacity-100 transition-opacity duration-700"></div>

              {/* Title & Tech Stack Container - Starts centered, slides up smoothly */}
              <div className="absolute w-full top-1/2 -translate-y-1/2 group-hover:top-10 [.active-mobile_&]:top-10 group-hover:-translate-y-0 [.active-mobile_&]:-translate-y-0 transition-all duration-[800ms] ease-[cubic-bezier(0.22,1,0.36,1)] px-8 md:px-12 z-20">
                <h3 className="text-2xl md:text-4xl font-bold text-white mb-3 tracking-wide">
                  {project.title}
                </h3>
                <p className="text-xs md:text-sm font-semibold text-gray-400 uppercase tracking-[0.2em]">
                  {project.techStack}
                </p>
              </div>

              {/* Bullets Container - Hidden below, slides up and fades in */}
              <div className="absolute top-[160px] w-full px-8 md:px-12 opacity-0 translate-y-16 group-hover:opacity-100 [.active-mobile_&]:opacity-100 group-hover:translate-y-0 [.active-mobile_&]:translate-y-0 transition-all duration-[800ms] delay-75 ease-[cubic-bezier(0.22,1,0.36,1)] pointer-events-none group-hover:pointer-events-auto [.active-mobile_&]:pointer-events-auto z-20">
                <ul className="space-y-4">
                  {project.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-indigo-400 mr-4 mt-1 text-xl leading-none">•</span>
                      <span className="text-gray-300 text-sm md:text-base leading-relaxed font-medium">
                        {bullet}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
