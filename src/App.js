import './App.css';
import React, { useState } from 'react';
import Home from './route/Home/Home';
import Experience from './route/Experience/Experience';
import Education from './route/Education/Education';
import Certificate from './route/Certificate/Certificate';
import PreLoader from './component/PreLoader/PreLoader';
import { BrowserRouter as Router, Route , Routes } from "react-router-dom";

function App() {  
  const url = 'ws://192.168.1.157:4567';
  const [certificate, setCertificate] = useState([]);
  const [server, setServer] = useState(new WebSocket(url));
  const [work, setWork] = useState([]);
  const [experience, setExperience] = useState([]);
  const [education, setEducation] = useState([]);

  server.onopen = () => { 
    document.getElementById("loader").hidden = true;
    document.getElementById("content").hidden = false;
    document.getElementById("error").hidden = true;
  };

  server.onmessage = (message) => {
    
  };

  server.onerror = () => {
    document.getElementById("error").hidden = false;
    document.getElementById("loader").hidden = false;
    document.getElementById("content").hidden = true;
    setServer(new WebSocket(url));
  };

  return (
    <>
      <PreLoader/>
      <div id='content' hidden>
      <Router>
          <Routes>
              <Route exac path="/" element={<Home data={work}/>} />
              <Route exac path="/education" element={<Education data={education}/>} />
              <Route exac path="/experience" element={<Experience data={experience}/>} />
              <Route exac path="/certificate" element={<Certificate data={certificate}/>} />
              <Route exac path="*" element={<Home/>} />
          </Routes>
      </Router>
      </div>
    </>
  );
}

export default App;
