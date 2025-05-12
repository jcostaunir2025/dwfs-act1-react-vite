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
import Footer from "./components/Footer.jsx";
import Login from "./components/Login.jsx";
import Checkout from "./components/Checkout/Checkout.jsx";

function AppContent() {
    const { darkMode, usuario } = useContext(GlobalContext);

    return (
        <div id="app-div" className={`App ${darkMode ? 'dark-mode' : ''}`}>
            <Header user={usuario}/>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/libros/:categoria" element={<Landing />} />
                <Route path="/checkout" element={<Checkout />} />
            </Routes>
            <Footer />
        </div>
    );
}

function App() {
    return (
        <GlobalProvider>
            <AppContent/>
        </GlobalProvider>
    );
}

export default App;