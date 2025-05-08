/*import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React, { useState } from 'react';
import Header from './components/Header.jsx';
import Landing from './components/Landing.jsx';
import Footer from './components/Footer.jsx';*/

import {useContext} from "react";
import {GlobalContext, GlobalProvider} from "./context/GlobalContext.jsx";
import Header from "./components/Header.jsx";
import {Route, Routes} from "react-router";
import Landing from "./components/Landing.jsx";
import Principal from "./components/Principal.jsx";
import Footer from "./components/Footer.jsx";
import Login from "./components/Login.jsx";

function AppContent() {
    const { darkMode, usuario } = useContext(GlobalContext);

    return (
        <div className={`App ${darkMode ? 'dark-mode' : ''}`}>
            <Header user={usuario}/>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/libros/:categoria" element={<Landing />} />
            </Routes>
            <Footer />
        </div>
    );
}

function App() {
    return (
        <GlobalProvider>
            <AppContent />
        </GlobalProvider>
    );
}

export default App;

/*
function App() {
    const [user, setUser] = useState('Javier'); // Usuario por defecto

    const handleUserChange = (newUser) => {
        setUser(newUser);
    };

    return (
        <div className="App">
            <Header user={user} />
            <Landing user={user} onUserChange={handleUserChange}/>
            <Footer />
        </div>
    );
}

export default App;

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App*/
