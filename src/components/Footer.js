import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="w-full text-gray-300 py-8 px-6 mt-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Left side: Name / copyright */}
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} Shreyas Kasar. All rights reserved.
        </p>

        {/* Right side: Text links */}
        <div className="flex gap-6 text-white text-lg footer-links">
          <a
            href="https://github.com/shreyaskasar"
            target="_blank"
            rel="noopener noreferrer"
          >
            GITHUB
          </a>
          <a
            href="https://www.linkedin.com/in/shreyas-kasar-302487329"
            target="_blank"
            rel="noopener noreferrer"
          >
            LINKEDIN
          </a>
          <a
            href="https://www.instagram.com/kasarshreyas"
            target="_blank"
            rel="noopener noreferrer"
          >
            INSTAGRAM
          </a>
          <a href="mailto:shreyaskasar028@gmail.com">EMAIL</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
