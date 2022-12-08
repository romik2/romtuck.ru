import App from './App';
import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';

const url = 'ws://192.168.1.157:4567';
var server = new WebSocket(url);

server.onerror = () => {
  window.location.reload();
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App server={server}/>
);
