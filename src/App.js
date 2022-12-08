import './App.css';
import React, { useState } from 'react';
import Home from './route/Home/Home';
import Experience from './route/Experience/Experience';
import Education from './route/Education/Education';
import Certificate from './route/Certificate/Certificate';
import PreLoader from './component/PreLoader/PreLoader';
import { BrowserRouter as Router, Route , Routes } from "react-router-dom";

function App({server}) {
  function capitalize(str) {
    return `${str.charAt(0).toUpperCase()}${str.slice(1)}`;
   }
  
  const [certificate, setCertificate] = useState([]);
  const [work, setWork] = useState([]);
  const [experience, setExperience] = useState([]);
  const [education, setEducation] = useState([]);

  server.onopen = () => { 
    document.getElementById("loader").hidden = true;
    document.getElementById("content").hidden = false;
    document.getElementById("error").hidden = true;
  };

  server.onmessage = (message) => {
    var jsonData = JSON.parse(message.data);
    eval(`set${capitalize(jsonData.table)}(jsonData.row)`);
  };

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
