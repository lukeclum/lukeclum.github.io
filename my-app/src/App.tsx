import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import CaseStudyJoule from "./pages/CaseStudyJoule";
import CaseStudyStoryform from "./pages/CaseStudyStoryform";
import CaseStudyJoulePackaging from "./pages/CaseStudyJoulePackaging";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/joule-sous-vide" element={<CaseStudyJoule />} />
        <Route path="/storyform" element={<CaseStudyStoryform />} />
        <Route path="/joule-packaging" element={<CaseStudyJoulePackaging />} />
      </Routes>
    </div>
  );
}

export default App;
