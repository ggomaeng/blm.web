import React from "react";
import "./App.css";
import "blm.css/index.css";
import github from "./github.svg";

function App() {
  return (
    <div className="app">
      <h1>BLM.css</h1>
      <h4>Turn your website into black and white to show your support for the BLM movement.</h4>
      <code>1. npm install --save blm.css</code>
      <code>2. import "blm.css/index.css"</code>
      <a
        href="https://github.com/ggomaeng/blm.css"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img className="github" src={github} alt="" />
        <p>@ggomaeng</p>
      </a>
    </div>
  );
}

export default App;
