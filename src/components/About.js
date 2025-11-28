import React from "react";
import "./About.css";

const AboutMe = () => {
  return (
    <section className="about-section w-full flex flex-col py-20 px-[10%]">
      {/* Heading */}
      <h2 className="about-heading mb-12">About Me</h2>

      {/* Content: Image left, text right */}
      <div className="about-content flex flex-col md:flex-row items-center gap-10">
        {/* Profile Image */}
        <div className="about-image flex-shrink-0">
          <img
            src="/profile.png"
            alt="Shreyas Kasar"
            className="w-64 h-64 rounded-xl object-cover shadow-lg"
          />
        </div>

        {/* Description */}
        <div className="about-text-container flex-1">
          <p className="about-text">
            Hello! I'm <span className="font-semibold">Shreyas Kasar</span>, an aspiring Java and Full Stack Developer. 
            I enjoy building <strong>modern, responsive web applications</strong> that solve real-world problems. 
            I have hands-on experience with <strong>React, Node.js, Spring Boot, Tailwind CSS, and MySQL</strong>. 
            I am passionate about <strong>learning new technologies</strong>, improving my coding skills, and contributing to projects that make an impact.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
