import './App.css';
import React, { useState, useEffect } from 'react';
import Home from './route/Home/Home';
import general from "./api/general";
import Experience from './route/Experience/Experience';
import Education from './route/Education/Education';
import Certificate from './route/Certificate/Certificate';
import PreLoader from './component/PreLoader/PreLoader';
import { BrowserRouter as Router, Route , Routes } from "react-router-dom";

function App() {  
  const [certificate, setCertificate] = useState([]);
  const [experience, setExperience] = useState([]);
  const [education, setEducation] = useState([]);
  const [work, setWork] = useState([]);

  useEffect(() => {
      general('api/work').then(works => setWork(works));
      general('api/experience').then(experience => setExperience(experience));
      general('api/education').then(education => setEducation(education));
      general('api/certificate').then(certificate => setCertificate(certificate));
      document.getElementById("loader").hidden = true;
      document.getElementById("content").hidden = false;
      document.getElementById("error").hidden = true;
  }, []);

  useEffect(() => {
    let interval = setInterval(() => {
      general('api/work').then(works => setWork(works));
      general('api/experience').then(experience => setExperience(experience));
      general('api/education').then(education => setEducation(education));
      general('api/certificate').then(certificate => setCertificate(certificate));
    }, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <PreLoader/>
      <div id='content' hidden>
      <Router>
          <Routes>
              <Route path="/" element={<Home data={work}/>} />
              <Route path="/education" element={<Education data={education}/>} />
              <Route path="/experience" element={<Experience data={experience}/>} />
              <Route path="/certificate" element={<Certificate data={certificate}/>} />
              <Route path="*" element={<Home/>} />
          </Routes>
      </Router>
      </div>
    </>
  );
}

export default App;
