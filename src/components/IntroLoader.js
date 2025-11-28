import React, { useEffect, useState } from "react";
import "./IntroLoader.css";

function IntroLoader({ onFinish }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Hide intro after 4 seconds
    const timer = setTimeout(() => setVisible(false), 4000);

    // After fade-out (0.5s), trigger onFinish
    const finishTimer = setTimeout(() => {
      if (onFinish) onFinish();
    }, 4500);

    return () => {
      clearTimeout(timer);
      clearTimeout(finishTimer);
    };
  }, [onFinish]);

  return (
    <div className={`intro-loader ${visible ? "show" : "hide"}`}>
      <div className="dark-overlay"></div>
      <div className="intro-text">
        <h1>नमस्ते</h1>
        <h2 className="hello-text">NAMASTE</h2>
      </div>
    </div>
  );
}

export default IntroLoader;
