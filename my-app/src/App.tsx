import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import CaseStudyJoule from "./pages/CaseStudyJoule";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Joule-sous-vide" element={<CaseStudyJoule />} />
      </Routes>
    </div>
  );
}

export default App;
