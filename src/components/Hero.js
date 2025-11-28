import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <div className="hero">
      <h1 className="hero-title">
        <span className="jefith">ASPIRING </span>
        <span className="stint">JAVA </span>
        <span className="jefith">and </span> <br />
        <span className="stint">FULL STACK </span>
        <span className="jefith">DEVELOPER</span>
        <span className="punctuation">.</span>
      </h1>

      <div className="hero-right">
        <p className="hero-description">
          A designer who loves to code and a developer who loves to design. 
          I create things that look simple, but feel alive. For me, a good website 
          isn't just about pixels and performance, it's about how it makes people feel when they use it.
        </p>

        <h2 className="hero-quote">
          Typing clean code<span className="punctuation">,</span> one line <span className="stint-word">AT A TIME</span><span className="punctuation">.</span>
        </h2>

        <div className="hero-buttons">
          <a href="#contact" className="collab-btn">
            Let's Collaborate
          </a>
          <a
            href="/path-to-your-resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="resume-btn-hero"
          >
            RESUME
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hero;
