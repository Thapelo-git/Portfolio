//import portrait from '../assets/Pro.jpeg';
import proNoB from '../assets/proNoB.png';
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = ({setSelectedPage}) => {
  return (
    <section className="relative min-h-screen bg-soft overflow-hidden">
      
      {/* BACKGROUND TEXT */}
      <h1 className="absolute inset-0 flex items-center justify-center 
        text-[18vw] font-black text-black/5 select-none pointer-events-none">
        Full Stack Developer
      </h1>

  

      {/* MAIN CONTENT */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 items-center px-10 h-[80vh]">

        {/* LEFT TEXT */}
        <div>
          <p className="mb-4">👋 Hi, I’m Jessy Linda</p>
          <h2 className="text-5xl font-extrabold leading-tight">
            BRANDING, <br />
            PRODUCT UI/UX <br />
            & DESIGN.
          </h2>
        </div>

        {/* IMAGE */}
        <div className="relative flex justify-center">
          {/* ORANGE GLOW */}
          <div className="absolute w-[360px] h-[360px] bg-accent rounded-full blur-2xl"></div>

          <img
            src={proNoB}
            alt="portrait"
            className="relative z-10 w-[320px] object-cover"
          />

          {/* FLOATING TAGS */}
          <span className="absolute top-16 -left-10 bg-black text-white text-sm px-4 py-1 rounded-full">
           Mobile Developer
          </span>
          <span className="absolute top-28 right-0 bg-black text-white text-sm px-4 py-1 rounded-full">
           Software Developer
          </span>

          {/* SIGNATURE */}
          <span className="absolute bottom-10 text-purple-600 text-4xl font-signature">
            Jessy
          </span>
        </div>

        {/* RIGHT CARD */}
        <div className="flex justify-center lg:justify-end">
          <div className="bg-white text-gray-500 rounded-2xl p-6 w-[280px] shadow-xl">
            <p className="text-sm mb-4">
              <strong>2+ Years of Expertise</strong> React Native & React JS(MERN stack).Freelance background in 
                    React,Node,& PostgreSQL.
            </p>
            <p className="underline text-sm mb-4">chabathapelo1@gmail.com</p>
            <AnchorLink 
                className='w-full bg-black text-white py-3 px-4 rounded-full text-sm'
                onClick={()=>setSelectedPage={setSelectedPage}} 
                href="#contact">
                     LET’S DISCUSS
                </AnchorLink>
            {/* <button className="w-full bg-black text-white py-3 rounded-full text-sm"
            onClick={()=> setSelectedPage={setSelectedPage}} 
                   href="#contact"         >
              LET’S DISCUSS
            </button> */}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
