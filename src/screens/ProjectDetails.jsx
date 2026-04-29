import { useParams, useNavigate } from 'react-router-dom';
import { projects } from '../data/projects';
import { FaGithub, FaExternalLinkAlt, FaArrowLeft, FaClock, FaUser, FaStar, FaCalendarAlt } from 'react-icons/fa';

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const projectIndex = parseInt(id, 10);
  const project = projects[projectIndex];
  const prevProject = projects[projectIndex - 1];
  const nextProject = projects[projectIndex + 1];

  if (!project) {
    return (
      <div className="min-h-screen bg-soft flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4 text-dark">Project not found</h2>
          <button
            onClick={() => navigate('/')}
            className="px-6 py-3 bg-accent text-white rounded-full font-bold hover:opacity-80 transition"
          >
            Go Back Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-soft text-dark">
      {/* ── Sticky Top Nav ─────────────────────────────────────── */}
      <nav className="sticky top-0 z-50 bg-soft/90 backdrop-blur-md border-b border-dark/10 px-6 md:px-12 py-4 flex items-center justify-between">
        <button
          onClick={() => navigate('/')}
          className="flex items-center gap-2 font-bold text-dark/70 hover:text-accent transition-colors"
        >
          <FaArrowLeft />
          <span>Back to Portfolio</span>
        </button>
        <span className="text-sm font-semibold text-dark/40 uppercase tracking-widest hidden sm:block">
          Case Study
        </span>
        {/* Prev / Next */}
        <div className="flex items-center gap-4">
          {prevProject && (
            <button
              onClick={() => navigate(`/project/${projectIndex - 1}`)}
              className="text-sm font-semibold text-dark/60 hover:text-accent transition-colors"
            >
              ← Prev
            </button>
          )}
          {nextProject && (
            <button
              onClick={() => navigate(`/project/${projectIndex + 1}`)}
              className="text-sm font-semibold text-dark/60 hover:text-accent transition-colors"
            >
              Next →
            </button>
          )}
        </div>
      </nav>

      {/* ── Hero Banner ────────────────────────────────────────── */}
      <div className="relative w-full h-72 md:h-[420px] overflow-hidden">
        <img
          src={project.mainImage}
          alt={project.title}
          className="w-full h-full object-cover brightness-75"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-soft via-soft/40 to-transparent" />

        {/* Title on banner */}
        <div className="absolute bottom-8 left-6 md:left-16">
          <p className="text-accent font-bold uppercase tracking-widest text-sm mb-1">
            Project Case Study
          </p>
          <h1 className="text-5xl md:text-7xl font-extrabold text-dark drop-shadow-sm">
            {project.title}
          </h1>
        </div>

        {/* Accent glow blob */}
        <div className="absolute top-10 right-10 w-64 h-64 bg-accent rounded-full blur-3xl opacity-20 pointer-events-none" />
      </div>

      {/* ── Main Content ───────────────────────────────────────── */}
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-16">

        {/* Quick Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {[
            { icon: <FaUser />, label: 'Role', value: project.role },
            { icon: <FaClock />, label: 'Duration', value: project.duration },
            { icon: <FaStar />, label: 'Experience', value: project.experience },
            { icon: <FaCalendarAlt />, label: 'Date', value: project.date },
          ].map(({ icon, label, value }) => (
            <div
              key={label}
              className="bg-white rounded-2xl p-5 shadow-md border border-dark/5 flex flex-col gap-2"
            >
              <span className="text-accent text-lg">{icon}</span>
              <p className="text-xs font-bold uppercase tracking-widest text-dark/40">{label}</p>
              <p className="font-bold text-dark text-sm leading-snug">{value}</p>
            </div>
          ))}
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">

          {/* LEFT — Text Content */}
          <div className="lg:col-span-3 space-y-10">

            {/* Description */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-1 bg-accent rounded-full" />
                <h2 className="text-2xl font-extrabold text-dark">Description</h2>
              </div>
              <p className="text-dark/70 leading-relaxed text-lg">{project.description}</p>
            </div>

            {/* Overview */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-1 bg-accent rounded-full" />
                <h2 className="text-2xl font-extrabold text-dark">Overview</h2>
              </div>
              <p className="text-dark/70 leading-relaxed text-lg">{project.overview}</p>
            </div>

            {/* Challenges */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-1 bg-accent rounded-full" />
                <h2 className="text-2xl font-extrabold text-dark">Challenges</h2>
              </div>
              <div className="bg-dark text-white rounded-2xl p-6 shadow-lg relative overflow-hidden">
                {/* Accent glow */}
                <div className="absolute -top-6 -right-6 w-32 h-32 bg-accent rounded-full blur-2xl opacity-20" />
                <p className="leading-relaxed text-white/80 relative z-10">{project.challenges}</p>
              </div>
            </div>

            {/* Tech Stack */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-1 bg-accent rounded-full" />
                <h2 className="text-2xl font-extrabold text-dark">Tech Stack</h2>
              </div>
              <div className="flex flex-wrap gap-3">
                {project.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-5 py-2 bg-white text-dark border border-dark/10 rounded-full 
                               text-sm font-bold shadow-sm hover:border-accent hover:text-accent 
                               transition-colors duration-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 px-8 py-4 bg-accent text-white 
                           rounded-full font-extrabold hover:opacity-90 active:scale-95 transition 
                           flex-1 shadow-xl shadow-accent/30 text-base"
              >
                <FaExternalLinkAlt className="text-sm" />
                View Live Demo
              </a>
              <a
                href={project.sourceCode}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 px-8 py-4 bg-dark text-white 
                           rounded-full font-extrabold hover:opacity-80 active:scale-95 transition 
                           flex-1 shadow-xl text-base"
              >
                <FaGithub className="text-sm" />
                View Source
              </a>
            </div>
          </div>

          {/* RIGHT — Images */}
          <div className="lg:col-span-2 space-y-5">
            {/* Main image */}
            <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <img
                src={project.mainImage}
                alt={project.title}
                className="w-full aspect-[4/3] object-cover"
              />
            </div>
            {/* Thumbnails */}
            {project.thumbnails && project.thumbnails.map((thumb, idx) => (
              <div key={idx} className="rounded-2xl overflow-hidden shadow-lg border-2 border-white">
                <img
                  src={thumb}
                  alt={`${project.title} screenshot ${idx + 1}`}
                  className="w-full h-44 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>

        {/* ── Prev / Next Projects ──────────────────────────── */}
        <div className="mt-20 pt-10 border-t border-dark/10 flex flex-col sm:flex-row gap-4 justify-between">
          {prevProject ? (
            <button
              onClick={() => navigate(`/project/${projectIndex - 1}`)}
              className="flex-1 flex flex-col items-start gap-1 bg-white rounded-2xl p-6 shadow-md
                         border border-dark/5 hover:border-accent transition group"
            >
              <span className="text-xs font-bold text-dark/40 uppercase tracking-widest group-hover:text-accent transition">
                ← Previous Project
              </span>
              <span className="font-extrabold text-dark text-lg">{prevProject.title}</span>
            </button>
          ) : <div className="flex-1" />}

          {nextProject && (
            <button
              onClick={() => navigate(`/project/${projectIndex + 1}`)}
              className="flex-1 flex flex-col items-end gap-1 bg-white rounded-2xl p-6 shadow-md
                         border border-dark/5 hover:border-accent transition group"
            >
              <span className="text-xs font-bold text-dark/40 uppercase tracking-widest group-hover:text-accent transition">
                Next Project →
              </span>
              <span className="font-extrabold text-dark text-lg">{nextProject.title}</span>
            </button>
          )}
        </div>

      </div>
    </div>
  );
};

export default ProjectDetails;
