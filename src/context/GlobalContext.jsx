//import React, { createContext, useState } from 'react';

import {createContext, useState} from "react";
import {booklist as bl} from "../data/listalibros.js";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
    const [categoria, setCategoria] = useState('todas');
    const [darkMode, setDarkMode] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const usuario = "Pepe";
    const booklist = [...bl];
    const [deliveryInfo, setDeliveryInfo] = useState({
        nombre: '',
        direccion: '',
        ciudad: '',
        telefono: '',
        metodoPago: '',
    });

    const toggleDarkMode = () => {
        setDarkMode(prev => !prev);
    };

    const changeCategoria = (newCategoria) => {
        setCategoria(newCategoria);
    };
    /*const changeCartItem = (newCartItem) => {
        setCartItems(newCartItem);
    };*/

    return (
        <GlobalContext.Provider value={{ categoria, darkMode, usuario, booklist, cartItems, setCartItems,
            toggleDarkMode, changeCategoria, deliveryInfo, setDeliveryInfo }}>
            {children}
        </GlobalContext.Provider>
    );
};