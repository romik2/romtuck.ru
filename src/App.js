import './App.css';
import React, { useEffect } from 'react';
import Home from './route/Home/Home';
import Experience from './route/Experience/Experience';
import Education from './route/Education/Education';
import Certificate from './route/Certificate/Certificate';
import PreLoader from './component/PreLoader/PreLoader';
import { BrowserRouter as Router, Route , Routes } from "react-router-dom";

function App() {  

  useEffect(() => {
    document.getElementById("loader").hidden = true;
  });

  return (
    <>
      <PreLoader/>
      <Router>
          <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/education" element={<Education/>} />
              <Route path="/experience" element={<Experience/>} />
              <Route path="/certificate" element={<Certificate/>} />
              <Route path="*" element={<Home/>} />
          </Routes>
      </Router>
    </>
  );
}

export default App;
