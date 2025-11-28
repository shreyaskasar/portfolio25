import React, { useState, useEffect } from "react";
import { AiOutlineHome } from "react-icons/ai"; // Home
import { FaLinkedinIn } from "react-icons/fa";   // LinkedIn
import { FiGithub } from "react-icons/fi";      // GitHub
import "./Navbar.css";

function Navbar() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (window.scrollY > lastScrollY + 5) setShowNavbar(false);
          else if (window.scrollY < lastScrollY - 5) setShowNavbar(true);
          setLastScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 h-24 backdrop-blur-sm flex items-start bg-transparent transition-all duration-500 ease-in-out
        ${showNavbar ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"}`}
    >
      {/* LEFT — Logo & Text */}
      <div className="leftnav cursor-pointer flex flex-col justify-start pl-4 pt-6 transition-opacity duration-500 ease-in-out">
        <h1 className="jefith-font text-[2.5vw] sm:text-[3vw] md:text-[2vw]">
          SHREYAS KASAR
        </h1>
        <span className="stint-font text-[1.8vw] sm:text-[1.7vw] md:text-[1.3vw]">
          PORTFOLIO'25
        </span>
      </div>

      {/* SOCIAL ICONS */}
      <div
        className={`social-icons absolute flex items-center gap-6 text-white transition-all duration-300 ease-in-out
          ${showNavbar ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"}`}
      >
        {/* Scroll to top button */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="hover:text-gray-300 transition-colors text-2xl"
          aria-label="Scroll to top"
        >
          <AiOutlineHome />
        </button>

        <a
          href="https://www.linkedin.com/in/shreyas-kasar-302487329"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-300 transition-colors text-2xl"
        >
          <FaLinkedinIn />
        </a>

        <a
          href="https://github.com/shreyaskasar"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-300 transition-colors text-2xl"
        >
          <FiGithub />
        </a>
      </div>
    </div>
  );
}

export default Navbar;
