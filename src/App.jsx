import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./screens/Navbar";
import Hero from "./screens/Hero";
import Portfolios from "./screens/Portfolios";
import Contact from "./screens/Contact";
import Footer from "./screens/Footer";
import ProjectDetails from "./screens/ProjectDetails";

import './App.css'
import './index.css';

function App() {
  const [selectedPage, setSelectedPage] = useState("Home");
  const [isTopOfPage, setIsTopOfPage] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) setIsTopOfPage(true);
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Routes>
      {/* Main Portfolio Page */}
      <Route
        path="/"
        element={
          <div>
            <Navbar
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
              isTopOfPage={isTopOfPage}
            />
            <section className="mx-auto md:h-full">
              <Hero setSelectedPage={setSelectedPage} />
            </section>
            <section id="projects">
              <Portfolios />
            </section>
            <section className="w-full bg-soft">
              <div className="w-5/6 mx-auto">
                <Contact />
              </div>
            </section>
            <Footer />
          </div>
        }
      />

      {/* Project Details Page */}
      <Route path="/project/:id" element={<ProjectDetails />} />
    </Routes>
  );
}

export default App;
