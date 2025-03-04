import React, { useEffect, useRef } from "react";
import { SolarSystem } from "./scenes/SolarSystem";
import "./assets/styles.css";

export default function App() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const solarSystem = new SolarSystem(canvasRef.current);

    return () => {
      solarSystem.cleanup();
    };
  }, []);

  return (
    <div>
      <canvas ref={canvasRef}></canvas>
      <div id="controls">
        <label htmlFor="planet-select">Select Planet:</label>
        <select id="planet-select">
          <option value="Mercury">Mercury</option>
          <option value="Venus">Venus</option>
        </select>

        <label htmlFor="size">Size:</label>
        <input type="range" id="size" min="0.1" max="2" step="0.1" />

        <label htmlFor="speed">Speed:</label>
        <input type="range" id="speed" min="0.01" max="0.1" step="0.01" />

        <label htmlFor="distance">Distance:</label>
        <input type="range" id="distance" min="5" max="50" step="1" />

        <button id="save-button">Save Configuration</button>
        <button id="load-button">Load Configuration</button>
      </div>
    </div>
  );
}
