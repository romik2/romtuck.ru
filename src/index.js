import App from './App';
import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import data from './config.json';

var server = new WebSocket(data.ws);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App server={server}/>
);
