import { useNavigate } from "react-router-dom";
import { useState, useRef } from "react";
import { RadialScrollGallery } from "../component/RadialScrollGallery";
import { projects } from "../data/projects";

const Portfolios = () => {
  const navigate = useNavigate();
  const [activeSlide, setActiveSlide] = useState(0);
  const scrollRef = useRef(null);

  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollLeft = scrollRef.current.scrollLeft;
      const width = scrollRef.current.clientWidth;
      const newActive = Math.round(scrollLeft / width);
      setActiveSlide(newActive);
    }
  };

  return (
    <main className="w-full bg-soft">
      {/* Section Header — matches Hero style */}
      <div className="text-center pt-20 pb-4 px-4">
        <p className="text-dark/50 text-sm font-semibold uppercase tracking-widest mb-2">
          What I've Built
        </p>
        <h2 className="text-5xl font-extrabold text-dark leading-tight">
          My Work Gallery
        </h2>
        <p className="text-dark/60 mt-3 text-lg max-w-xl mx-auto">
          Click on any project image to explore the full case study
        </p>
        {/* Accent underline bar */}
        <div className="mx-auto mt-6 w-16 h-1 bg-accent rounded-full" />
      </div>

      {/* Desktop/Tablet: Radial Scroll Gallery */}
      <div className="hidden md:block w-full">
        <RadialScrollGallery
          baseRadius={400}
          mobileRadius={140}
          visiblePercentage={45}
          scrollDuration={3000}
        >
          {(hoveredIndex) =>
            projects.map((project, index) => (
              <div
                key={index}
                className="relative w-64 h-80 rounded-2xl overflow-hidden cursor-pointer
                           shadow-xl border-2 border-white/60 group transition-transform duration-300 hover:scale-105"
                onClick={() => navigate(`/project/${index}`)}
              >
                <img
                  src={project.mainImage}
                  alt={project.title}
                  className="w-full h-full object-cover brightness-90 contrast-110 group-hover:brightness-75 transition-all duration-300"
                />
                {/* Hover overlay with title */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/20 to-transparent 
                                opacity-0 group-hover:opacity-100 transition-opacity duration-300 
                                flex flex-col justify-end p-4">
                  <h3 className="text-white font-extrabold text-xl">{project.title}</h3>
                  <p className="text-accent text-xs font-semibold mt-1 uppercase tracking-wider">
                    View Details →
                  </p>
                </div>
              </div>
            ))
          }
        </RadialScrollGallery>
      </div>

      {/* Mobile: Horizontal Snap Scrolling Gallery */}
      <div className="md:hidden w-full px-4 pb-20 pt-8">
        <div 
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex overflow-x-auto gap-6 snap-x snap-mandatory scrollbar-hide pb-8" 
          style={{ scrollBehavior: 'smooth' }}
        >
          {projects.map((project, index) => (
            <div
              key={index}
              onClick={() => navigate(`/project/${index}`)}
              className="snap-center shrink-0 w-[85vw] h-[55vh] relative rounded-3xl overflow-hidden shadow-2xl cursor-pointer"
            >
              <img
                src={project.mainImage}
                alt={project.title}
                className="w-full h-full object-cover brightness-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-white font-extrabold text-3xl mb-2">{project.title}</h3>
                <div className="flex items-center gap-2">
                  <p className="text-accent text-sm font-bold uppercase tracking-widest">
                    View Case Study
                  </p>
                  <span className="text-accent text-lg">→</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Swipe Hint / Pagination */}
        <div className="flex justify-center mt-4 space-x-2">
          {projects.map((_, idx) => (
            <div 
              key={idx} 
              className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === activeSlide ? 'bg-accent w-4' : 'bg-gray-300'}`}
            ></div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Portfolios;
