import React, { useState, useEffect, useRef } from 'react'
import {  AnimatePresence } from 'framer-motion'
import LineGradient from '../component/LineGradient'
import { motion } from "framer-motion";

import { FaGithub } from 'react-icons/fa';

//https://za.pinterest.com/pin/need-website-design-or-develop-website-than-hire-expert--955748352150434796/
const projectData = [
    {
    name: 'project 9',
    title: 'Melula',
    description: 'Melula is a digital platform designed to simplify communication and information management. It enables users to share updates, organise content, and access information efficiently through a clear and user-friendly interface.',
    projectLink: 'https://assignmenthpage.vercel.app/',
    technologies: ['React',  'TailwindCSS'],
    languages: ['JavaScript']
  },
    {
    name: 'project 8',
    title: 'OHS Emergency',
    description: 'The OHS Emergency System is a digital safety platform designed to support rapid communication and response during workplace emergencies. It enables workers and supervisors to report incidents, receive alerts, and follow emergency procedures in real time.',
    projectLink: 'https://github.com/Thapelo-git/Prison_Management_System',
    technologies: ['React',  'TailwindCSS'],
    languages: ['JavaScript']
  },
  {
    name: 'project 7',
    title: 'Book application ',
    description: 'The Books App is a digital platform designed to help users easily browse, manage, and access books. It provides a simple and organised way to view book information, track reading activity, and manage personal or shared book collections.',
    projectLink: 'https://github.com/Thapelo-git/Prison_Management_System',
    technologies: ['React',  'TailwindCSS'],
    languages: ['JavaScript']
  },
  {
    name: 'project 6',
    title: 'Khayasafe ',
    description: 'KhayaSafe is a communication and reporting system designed for mining operations to help miner workers share information clearly and efficiently. It enables real-time communication and structured reporting to support daily operations and improve workplace safety.',
    projectLink: 'https://github.com/Thapelo-git/Prison_Management_System',
    technologies: ['React', 'TailwindCSS'],
    languages: ['JavaScript']
  },
  {
    name: 'project 4',
    title: 'Movie App',
    description: 'A dynamic film discovery platform featuring trending movies, advanced search, and personalized watchlists. Built with modern frontend framework and TMDB API integration.',
    projectLink: 'https://github.com/Thapelo-git/Prison_Management_System',
    technologies: ['React', 'TMDB API', 'TailwindCSS'],
    languages: ['JavaScript']
  },
  {
    name: 'project 5',
    title: 'Recipe App',
    description: 'A full-stack recipe management app with user-generated content, interactive cooking instructions, and personal collections. Features secure authentication and image upload functionality.',
    projectLink: 'https://github.com/Thapelo-git/Recipes-Web.git',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
    languages: ['JavaScript']
  },
  {
    name: 'project 1',
    title: 'E-society Administrator',
    description: 'Efficiently manage payments and organize events with ease, Streamlined platform for handling payments and event management ',
    projectLink: 'https://github.com/Thapelo-git/e-societyAdmin-master',
    technologies: ['React', 'Firebase'],
    languages: ['JavaScript']
  },
  {
    name: 'project 2',
    title: 'Medico App',
    description: 'Medico connects students with access to first aid and health measures',
    projectLink: 'https://github.com/washington786/medico',
    technologies: ['React Native', 'Expo'],
    languages: ['JavaScript']
  },
  {
    name: 'project 3',
    title: 'Hotel App',
    description: 'A mobile application that enables users to browse, book, and manage hotel reservations seamlessly. Built with React Native for smooth cross-platform performance and an intuitive user interface',
    projectLink: 'https://github.com/Thapelo-git/hotelApp',
    technologies: ['React Native', 'Redux'],
    languages: ['JavaScript']
  }
];

const Projects = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const [direction, setDirection] = useState(1); // 1 for next, -1 for previous
  const [thumbOverflow, setThumbOverflow] = useState(false);
  const thumbsContainerRef = useRef(null);
  const activeProject = projectData[activeIdx];

  useEffect(() => {
    const checkOverflow = () => {
      if (thumbsContainerRef.current) {
        setThumbOverflow(thumbsContainerRef.current.scrollWidth > thumbsContainerRef.current.clientWidth);
      }
    };
    checkOverflow();
    window.addEventListener('resize', checkOverflow);
    return () => window.removeEventListener('resize', checkOverflow);
  }, []);

  const scrollThumbs = (dir) => {
    if (thumbsContainerRef.current) {
      thumbsContainerRef.current.scrollBy({ left: dir * 120, behavior: 'smooth' });
    }
  };

  const handleNext = () => {
    setDirection(1);
    setActiveIdx(idx => (idx + 1) % projectData.length);
  };

  const handlePrevious = () => {
    setDirection(-1);
    setActiveIdx(idx => (idx - 1 + projectData.length) % projectData.length);
  };

  const handleThumbnailClick = idx => {
    setDirection(idx > activeIdx ? 1 : -1);
    setActiveIdx(idx);
  };

  const cardVariants = {
    initial: dir => ({
      x: dir === 1 ? [0, -60, 0] : [0, 60, 0],
      y: [-220, -100, 0],
      opacity: [0, 0.6, 1]
    }),
    animate: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: 'easeInOut' }
    },
    exit: dir => ({
      x: dir === 1 ? [-10, -160, -280] : [10, 160, 280],
      y: [0, -80, -40],
      opacity: [1, 0.6, 0],
      transition: { duration: 0.6, ease: 'easeInOut' }
    })
  };

  const projectImages = import.meta.glob('../assets/*.jpg', {
  eager: true,
  import: 'default',
});

   const getProjectImage = (name) => {
  const formatted = name.split(' ').join('-').toLowerCase();
  return projectImages[`../assets/${formatted}.jpg`];
};
  const Project = ({ name, title, description, projectLink,technologies,languages }) => {
    // const projectTitle = name.split(" ").join("-").toLowerCase();
 

    return (
      <motion.div
        key={name}
        className="relative w-full max-w-6xl xl:max-w-7xl flex flex-col md:flex-row items-center text-center md:text-left p-6 md:p-10 group bg-blue-300 rounded-xl shadow-2xl"
        variants={cardVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        custom={direction}
      >
        <div  className="mb-6 md:mb-0 md:mr-10 w-full md:w-1/2 max-w-none flex items-center justify-center"
  style={{ minHeight: 260 }}
        >
          <motion.img
            key={name}
           src={getProjectImage(name)}

            alt={name}
            className="rounded-md shadow-lg w-full object-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ opacity: { duration: 0.25 } }}
            style={{ minHeight: 220, maxHeight: 340 }}
          />
        </div>
        <motion.div
          className="flex-1 flex flex-col justify-center items-center md:items-start"
          key={name + '-desc'}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.23, duration: 0.5 }}
        >
          <p className="text-4xl md:text-5xl font-playfair font-bold mb-3 text-gray-400">{title}</p>
          <p className="text-xl md:text-2xl text-gray-700 mb-5">{description}</p>
           <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-3">
          {technologies.map((tech, i) => (
            <span key={i} className="px-3 py-1 text-sm bg-gray-100 text-black rounded-full font-medium shadow-sm">
              {tech}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-5">
          {languages.map((lang, i) => (
            <span key={i} className="px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-full font-medium shadow-sm">
              {lang}
            </span>
          ))}
        </div>
        <a
          href={projectLink}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-flex items-center gap-2 text-gray-600 font-semibold hover:underline text-xl"
        >
          <FaGithub className="text-2xl" /> View Project
        </a>
         
        </motion.div>
      </motion.div>
    );
  };

  const ProjectThumbnail = ({ project, isActive, onClick }) => {
    //const projectTitle = project.name.split(" ").join("-").toLowerCase();
    return (
      <button
        onClick={onClick}
        className={`flex flex-col items-center p-2 m-2 border rounded-lg focus:outline-none transition shadow-md border-gray-200 hover:border-blue-500 ${isActive ? 'ring-2 ring-blue-500 border-blue-400 bg-blue-50' : ''}`}
        style={{ width: 100 }}
      >
        <img
         src={getProjectImage(name)}

          alt={project.title}
          className="w-16 h-16 object-cover rounded mb-1"
        />
        <span className="text-xs text-gray-700 font-semibold truncate w-full">{project.title}</span>
      </button>
    );
  };

  return (
    <section id='projects' className='pt-48 pb-48 flex flex-col items-center'>
      <motion.div 
        className='md:w-2/4 mx-auto text-center'
        initial="hidden" whileInView="visible" viewport={{once:true,amount:0.5}}
        transition={{duration:0.5}} variants={{
          hidden:{opacity:0,y:-50},
          visible:{opacity:1,y:0}
        }}>
        <div>
          <p className='font-playfair font-semibold text-4xl '>
            <span className='text-red'>PRO</span>JECTS
          </p>
          <div className='flex justify-center mb-5'>
            <LineGradient width='w-1/3'/>
          </div>
        </div>
      </motion.div>
      {/* <div className='flex flex-col items-center'>
        <AnimatePresence mode="wait" initial={false}>
          <Project key={activeProject.name} {...activeProject} />
        </AnimatePresence>
        <div className="flex flex-row gap-4 mt-8 mb-12">
          <button
            onClick={handlePrevious}
            className="px-6 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition-colors font-semibold shadow focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Previous
          </button>
          <button
            onClick={handleNext}
            className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors font-semibold shadow focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Next
          </button>
        </div>
      </div> */}
      {/* Thumbnails row with chevron scroll */}
      <div className="w-full flex flex-col items-center mt-8 max-w-4xl">
        <div className="w-full flex flex-row items-center justify-center">
          {thumbOverflow && (
            <button
              aria-label="Scroll thumbnails left"
              className="h-12 w-8 rounded bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-2xl font-bold mx-1"
              onClick={() => scrollThumbs(-1)}
              style={{ minWidth: 32 }}
            >◀</button>
          )}
          <div
            ref={thumbsContainerRef}
            className="flex flex-row gap-2 w-full overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100"
            style={{scrollBehavior:'smooth'}}
          >
            {projectData.map((proj, idx) => (
              <ProjectThumbnail
                key={proj.name}
                project={proj}
                isActive={idx === activeIdx}
                onClick={() => handleThumbnailClick(idx)}
              />
            ))}
          </div>
          {thumbOverflow && (
            <button
              aria-label="Scroll thumbnails right"
              className="h-12 w-8 rounded bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-2xl font-bold mx-1"
              onClick={() => scrollThumbs(1)}
              style={{ minWidth: 32 }}
            >▶</button>
          )}
        </div>
      </div>
    </section>
  );
}

export default Projects