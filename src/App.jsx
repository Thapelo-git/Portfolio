import { useEffect, useState } from "react";
import Navbar from "./screens/Navbar"
import Landing from "./screens/Landing"
import Projects from "./screens/Projects"
import Contact from "./screens/Contact"
import Footer from "./screens/Footer"

import './App.css'
import './index.css';

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
    <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage}
    isTopOfPage={isTopOfPage}/>
    <div className="w-5/6 mx-auto md:h-full">
    {/* {isAboveMediumScreens &&(
      <DotGroup selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
    )}  */}
    
    <Landing setSelectedPage={setSelectedPage}/>
    </div>
    <Projects/>
     <div className="w-5/6 mx-auto ">
    <Contact/>
    </div>
   
    <Footer/>
    </div>
  )
}

export default App
