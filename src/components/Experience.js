import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaJava,  } from "react-icons/fa";
import { SiSpringboot, SiMysql, SiExpress, SiMongodb } from "react-icons/si";

import "./Experience.css";

const experiences = [
  {
    role: "Full Stack Developer Intern",
    company: "Elendil Private Limited",
    duration: "Feb 2024 - July 2024",
    jobType: "Full Time",
    description:
      "Developed responsive web interfaces using React and Tailwind CSS. Collaborated with backend team for API integration and optimized website performance.",
    technologies: [
      { name: "React", icon: <FaReact /> },
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "Express.js", icon: <SiExpress />},
      { name: "MongoDB", icon: <SiMongodb />},
      
    ],
  },
  {
    role: "Restaurant Manager",
    company: "Cafe Deja Vu",
    duration: "Mar 2022 - Aug 2024",
    jobType: "Part Time",
    description:
      "Implemented REST APIs using Node.js and Express. Worked with MySQL databases and ensured security and scalability.",
    technologies: [
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "MySQL", icon: <SiMysql /> },
      { name: "Java", icon: <FaJava /> },
    ],
  },
  {
    role: "Team Member",
    company: "Pizza Hut",
    duration: "Nov 2022 - Mar 2023",
    jobType: "Part Time",
    description:
      "Built full-stack applications using React, Node.js, Spring Boot, and MySQL. Improved system efficiency and contributed to UI/UX enhancements.",
    technologies: [
      { name: "React", icon: <FaReact /> },
      { name: "Spring Boot", icon: <SiSpringboot /> },
      { name: "MySQL", icon: <SiMysql /> },
      { name: "Java", icon: <FaJava /> },
    ],
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const ExperienceCard = ({ exp }) => (
  <motion.div
    variants={cardVariants}
    whileHover={{
      y: -8,
      scale: 1.03,
      background:
        "linear-gradient(135deg, rgba(31,41,55,0.8) 0%, rgba(17,24,39,0.8) 100%)",
      transition: { duration: 0.3 },
    }}
    className="relative bg-black/60 rounded-xl p-6 w-full max-w-[450px] shadow-md flex flex-col gap-3
               transform transition duration-300 hover:shadow-xl"
  >
    {/* Job Type small text top-right */}
    <span className="absolute top-4 right-4 text-gray-400 text-xs font-medium">
      {exp.jobType}
    </span>

    <h3 className="text-white text-xl font-semibold">{exp.role}</h3>
    <p className="text-gray-300 font-medium">
      {exp.company} | {exp.duration}
    </p>
    <p className="text-gray-200 text-sm mt-2">{exp.description}</p>
    <div className="flex flex-wrap gap-3 mt-3 text-white text-lg">
      {exp.technologies.map((tech, i) => (
        <div key={i} className="flex items-center gap-2">
          {tech.icon && <span>{tech.icon}</span>}
          <span className="text-sm">{tech.name}</span>
        </div>
      ))}
    </div>
  </motion.div>
);

const Experience = () => (
  <section className="w-full flex flex-col items-start py-20">
    <h2 className="experience-title mb-12">
      <span className="personal-title">My</span>
      <span className="project-title">Experience</span>
    </h2>

    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="flex flex-wrap gap-8 justify-center items-start px-[10%]"
    >
      {experiences.map((exp, i) => (
        <ExperienceCard key={i} exp={exp} />
      ))}
    </motion.div>
  </section>
);

export default Experience;
