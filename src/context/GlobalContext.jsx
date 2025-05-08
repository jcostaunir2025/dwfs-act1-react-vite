//import React, { createContext, useState } from 'react';

import {createContext, useState} from "react";
import {booklist, booklist as bl} from "../data/listalibros.js";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
    const [categoria, setCategoria] = useState('todas');
    const [darkMode, setDarkMode] = useState(false);
    const usuario = "Pepe";
    const booklist = [...bl];

    const toggleDarkMode = () => {
        setDarkMode(prev => !prev);
    };

    const changeCategoria = (newCategoria) => {
        setCategoria(newCategoria);
    };

    return (
        <GlobalContext.Provider value={{ categoria, darkMode, usuario, booklist, toggleDarkMode, changeCategoria }}>
            {children}
        </GlobalContext.Provider>
    );
};