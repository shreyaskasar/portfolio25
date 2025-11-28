import React, { useEffect, useState } from "react";
import "./ScrollProgress.css";

function ScrollProgress() {
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = (scrollTop / docHeight) * 100;
      setScrollPercent(scrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="scroll-progress-container">
      {/* Progress Bar Background */}
      <div className="scroll-bar-bg">
        {/* Smoke Trail */}
        <div
          className="scroll-bar-smoke"
          style={{ width: `${scrollPercent}%` }}
        ></div>

        {/* Spaceship */}
        <img
          src="/spaceship.png"  // <- direct public folder path
          alt="spaceship"
          className="scroll-spaceship"
          style={{ left: `calc(${scrollPercent}% - 20px)` }}
        />
      </div>
    </div>
  );
}

export default ScrollProgress;
