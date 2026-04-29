import { useNavigate } from "react-router-dom";
import { RadialScrollGallery } from "../component/RadialScrollGallery";
import { projects } from "../data/projects";

const Portfolios = () => {
  const navigate = useNavigate();

  return (
    <main className="w-full bg-soft overflow-hidden">
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

      {/* Radial Scroll Gallery */}
      <div className="w-full">
        <RadialScrollGallery
          baseRadius={400}
          mobileRadius={180}
          visiblePercentage={45}
          scrollDuration={3000}
        >
          {(hoveredIndex) =>
            projects.map((project, index) => (
              <div
                key={index}
                className="relative w-48 h-64 md:w-64 md:h-80 rounded-2xl overflow-hidden cursor-pointer
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
    </main>
  );
};

export default Portfolios;
