import React from 'react';
import ReactDOM from 'react-dom/client';
import './main.css'
import App from "./App.jsx";
import {BrowserRouter} from "react-router";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);
/*
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)*/
