import React, { useEffect, useState } from "react";
import "./Preloader.css";

const sentencePlanets = [
  "Mercury", "Venus", "Saturn", "Jupiter",
  "Uranus", "Neptune", "Mars", "Moon", "Earth"
];

function Preloader({ loading }) {
  const [progress, setProgress] = useState(0);
  const [planetIndex, setPlanetIndex] = useState(0);

  useEffect(() => {
    if (!loading) return;

    const duration = 6000;

    // Progress interval
    const totalSteps = 100;
    const stepTime = duration / totalSteps;
    let val = 0;
    const progressInterval = setInterval(() => {
      val += 3;
      if (val > 100) val = 100;
      setProgress(val);
      if (val >= 100) clearInterval(progressInterval);
    }, stepTime);

    // Planet switching interval — very fast
    let index = 0;
    const planetIntervalTime = (duration / sentencePlanets.length) / 3; // faster
    const planetInterval = setInterval(() => {
      setPlanetIndex(index);
      index++;
      if (index >= sentencePlanets.length) clearInterval(planetInterval);
    }, planetIntervalTime);

    return () => {
      clearInterval(progressInterval);
      clearInterval(planetInterval);
    };
  }, [loading]);

  if (!loading) return null;

  return (
    <div
      className="preloader"
      style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/space.jpg)` }}
    >
      <img
        src={process.env.PUBLIC_URL + "/moon.jpg"}
        alt="Moon"
        className="planet moon"
        style={{ top: "10%", left: "85%" }}
      />
      <img
        src={process.env.PUBLIC_URL + "/earth.jpg"}
        alt="Earth"
        className="planet earth"
        style={{ top: "5%", left: "15%" }}
      />
      <img
        src={process.env.PUBLIC_URL + "/saturn.jpg"}
        alt="Saturn"
        className="planet saturn"
        style={{
          bottom: "5%",
          right: "5%",
          top: "auto",
          left: "auto",
          position: "absolute"
        }}
      />

      <div className="loader-container">
        <div className="progress-text">{progress}%</div>
        <div className="finding-text">
          <span className="static-text">Finding Shreyas on</span>
          <span className="planet-container">
            <span className="planet-name">{sentencePlanets[planetIndex]}</span>
          </span>
        </div>
        <div className="underline">
          <div
            className="underline-progress"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default Preloader;
