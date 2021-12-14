import React from "react";
import Weather from "./Weather";
import './App.css';

export default function App() {
  return (
    <div className="App">
      <div className= "container">
      <Weather />
      <footer>
        <a
          href="https://github.com/snbarnhouse/react-weather-app"
          target="_blank"
          rel="noreferrer"
        >
          Open-Source
        </a>{" "} Code
        by Stephanie Barnhouse
      </footer>
      </div>
    </div>
  );
}


