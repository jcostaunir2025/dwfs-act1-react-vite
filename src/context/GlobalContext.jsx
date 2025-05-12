import {createContext, useState} from "react";
import {booklist as bl, suggestions as su} from "../data/listalibros.js";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
    const [titulo, setTitulo] = useState('todos');
    const [darkMode, setDarkMode] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const usuario = "G9";
    const booklist = [...bl];
    const suggestions = [...su];
    const [inputsuggestion, setInputsuggestion] = useState('');

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

    const changeTitulo = (newTitulo) => {
        setTitulo(newTitulo);
    };
    const changeInputsuggestion = (newInput) => {
        setInputsuggestion(newInput);
    };

    return (
        <GlobalContext.Provider value={{ titulo, darkMode, usuario, booklist, cartItems, setCartItems, inputsuggestion, suggestions, toggleDarkMode, changeTitulo, changeInputsuggestion, deliveryInfo, setDeliveryInfo }}>
            {children}
        </GlobalContext.Provider>
    );
};