import React from "react";
import {
  FaGithub, FaReact, FaNodeJs, FaJava, FaDatabase, FaHtml5, FaCss3
} from "react-icons/fa";
import {
  SiSpringboot, SiTailwindcss, SiMysql, SiJavascript, SiBootstrap
} from "react-icons/si";
import { motion } from "framer-motion";
import "./Projects.css";

const projects = [
  {
    title: "Portfolio Website",
    description: "A personal portfolio website built with React and Tailwind CSS.",
    technologies: [
      { name: "React", icon: <FaReact /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
      { name: "JavaScript", icon: <SiJavascript /> },
    ],
    liveDemo: "https://your-live-demo-link.com",
    github: "https://github.com/your-repo",
  },
  {
    title: "Ecommerce App",
    description:
      "An online shopping application with cart and payment integration. Includes authentication, payment gateway integration, and responsive UI for mobile and desktop.",
    technologies: [
      { name: "React", icon: <FaReact /> },
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "MongoDB", icon: <FaDatabase /> },
    ],
    liveDemo: "https://your-live-demo-link.com",
    github: "https://github.com/your-repo",
  },
  {
    title: "Bug Tracker",
    description: "A bug tracking system with user management and notifications.",
    technologies: [
      { name: "Spring Boot", icon: <SiSpringboot /> },
      { name: "MySQL", icon: <SiMysql /> },
      { name: "Java", icon: <FaJava /> },
    ],
    liveDemo: "https://your-live-demo-link.com",
    github: "https://github.com/your-repo",
  },
  {
    title: "Blog Platform",
    description:
      "A blogging platform with authentication, rich text editor, and commenting system. Fully responsive and optimized for SEO.",
    technologies: [
      { name: "React", icon: <FaReact /> },
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "Bootstrap", icon: <SiBootstrap /> },
    ],
    liveDemo: "https://your-live-demo-link.com",
    github: "https://github.com/your-repo",
  },
  {
    title: "Landing Page",
    description:
      "A modern landing page using HTML5, CSS3 and JS with animations and responsive UI.",
    technologies: [
      { name: "HTML5", icon: <FaHtml5 /> },
      { name: "CSS3", icon: <FaCss3 /> },
      { name: "JavaScript", icon: <SiJavascript /> },
    ],
    liveDemo: "https://your-live-demo-link.com",
    github: "https://github.com/your-repo",
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

const ProjectCard = ({ project }) => (
  <motion.div
    variants={cardVariants}
    whileHover={{
      y: -10, // lifts card
      scale: 1.05, // slightly larger
      background: "linear-gradient(135deg, #1f2937 0%, #374151 100%)", // gradient color change
      transition: { duration: 0.3, ease: "easeOut" },
    }}
    className="bg-black/60 rounded-xl p-6 flex flex-col justify-between w-full max-w-[350px] shadow-md"
  >
    <div>
      <h3 className="text-white text-lg font-semibold mb-2">{project.title}</h3>
      <p className="text-gray-300 text-sm mb-4">{project.description}</p>
      <div className="flex flex-wrap gap-3 text-white text-xl">
        {project.technologies.map((tech, i) => (
          <div key={i} className="flex items-center gap-2">
            <span>{tech.icon}</span>
            <span className="text-sm">{tech.name}</span>
          </div>
        ))}
      </div>
    </div>
    <div className="flex justify-between mt-4 items-center gap-4">
      <a
        href={project.liveDemo}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-md text-sm shadow-md transition transform duration-300 hover:scale-105"
      >
        Live Demo
      </a>
      <a
        href={project.github}
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:text-gray-300 text-2xl transition transform duration-300 hover:scale-110"
      >
        <FaGithub />
      </a>
    </div>
  </motion.div>
);

const Projects = () => (
  <section className="w-full flex flex-col items-start py-20">
    <h2 className="personal-project-title">
      <span className="personal-title">PERSONAL</span>
      <span className="project-title">PROJECTS</span>
    </h2>

    <div className="w-full px-[10%]">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="flex flex-wrap gap-8 justify-center items-start"
      >
        {projects.map((project, i) => (
          <ProjectCard key={i} project={project} />
        ))}
      </motion.div>
    </div>
  </section>
);

export default Projects;
