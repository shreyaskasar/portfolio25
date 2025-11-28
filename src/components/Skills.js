import React from "react";
import { FaJava, FaReact, FaNodeJs, FaDatabase } from "react-icons/fa";
import { SiSpringboot, SiTailwindcss, SiHtml5, SiCss3 } from "react-icons/si";
import "./Skills.css"; // Import CSS for font

function Skills() {
  const skills = [
    { name: "Java", icon: <FaJava size={40} /> },
    { name: "React", icon: <FaReact size={40} /> },
    { name: "Node.js", icon: <FaNodeJs size={40} /> },
    { name: "Database", icon: <FaDatabase size={40} /> },
    { name: "Spring Boot", icon: <SiSpringboot size={40} /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss size={40} /> },
    { name: "HTML5", icon: <SiHtml5 size={40} /> },
    { name: "CSS3", icon: <SiCss3 size={40} /> },
  ];

  return (
    <section className="w-full flex flex-col py-20">
      {/* Heading aligned like Project / Experience */}
      <h2 className="skills-heading mb-12 px-[10%]">
        Skills
      </h2>

      {/* Skills grid centered below the heading */}
      <div className="flex justify-center">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-12">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="flex flex-col items-center justify-center gap-4 bg-black/30 backdrop-blur-md p-6 rounded-lg hover:scale-105 transform transition-all duration-300"
            >
              <div className="text-white">{skill.icon}</div>
              <span className="text-white text-xl md:text-2xl">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
