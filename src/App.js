import React, { useEffect, useState } from "react";
import IntrLoader from "./components/IntroLoader";
import Preloader from "./components/Preloader";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [introDone, setIntroDone] = useState(false);
  const [loading, setLoading] = useState(true);

  // INTRO PRELOADER (Namaste + Hello)
  useEffect(() => {
    const introTimer = setTimeout(() => {
      setIntroDone(true);
    }, 3000); // Intro preloader duration
    return () => clearTimeout(introTimer);
  }, []);

  // MAIN PRELOADER (your existing one)
  useEffect(() => {
    if (introDone) {
      const mainTimer = setTimeout(() => setLoading(false), 3000);
      return () => clearTimeout(mainTimer);
    }
  }, [introDone]);

  return (
    <>
      {/* INTRO PRELOADER */}
      {!introDone && <IntrLoader />}

      {/* MAIN PRELOADER (only after intro finishes) */}
      {introDone && loading && <Preloader loading={loading} />}

      {/* MAIN CONTENT */}
      {!loading && (
        <>
          <Navbar />
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
