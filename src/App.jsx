import { useEffect, useState } from "react";
import Navbar from "./screens/Navbar"
import Landing from "./screens/Landing"
import Projects from "./screens/Projects"
import Contact from "./screens/Contact"
import Footer from "./screens/Footer"
import Portfolios from "./screens/Portfolios"

import './App.css'
import './index.css';
import Hero from "./screens/Hero";

function App() {
  const [selectedPage,setSelectedPage] = useState("home");
  const [isTopOfPage,setIsTopOfPage]=useState(true);
useEffect(()=>{
    const handleScroll = () =>{
      if(window.scrollY === 0) setIsTopOfPage(true);
      if(window.scrollY !== 0) setIsTopOfPage(false)
    }
  window.addEventListener("scroll",handleScroll);
  return () => window.removeEventListener("scroll",handleScroll);
  },[]);


  return (
    
<div className="app bg-deep-blue">
  <Navbar
    selectedPage={selectedPage}
    setSelectedPage={setSelectedPage}
    isTopOfPage={isTopOfPage}
  />

  {/* LANDING (constrained) */}
  <section className="w-5/6 mx-auto md:h-full">
    {/* <Landing setSelectedPage={setSelectedPage} /> */}
   <Hero/>
  </section>

  {/* PROJECTS (FULL WIDTH, FULL SCREEN) */}
  <section id="projects">
    <Portfolios/>
 {/* <Projects /> */}
  </section>

  {/* CONTACT (constrained again) */}
  <section className="w-5/6 mx-auto">
    <Contact />
  </section>

  <Footer />
</div>

  )
}

export default App
