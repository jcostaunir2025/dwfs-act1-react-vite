import React, {useContext} from 'react';
import {GlobalContext} from "../context/GlobalContext.jsx";
import Principal from "./Principal.jsx";
import useLibros from "../hooks/useLibros.jsx";
import ShoppingCart from "./ShoppingCart.jsx";
import InputAutoComplete from "./InputAutoComplete.jsx";

const Landing = () => {
    const { titulo, inputsuggestion } = useContext(GlobalContext);
    const { libros, loading } = useLibros(inputsuggestion);

    if (loading) {
        return (
            <main className="landing">
                <div className="loading-container">
                    <div className="spinner"></div>
                    <p>Cargando...</p>
                </div>
            </main>
        );
    }

    return (
        <main className="landing">
            <ShoppingCart libros={libros} remove={true} />
            <InputAutoComplete />
            <Principal libros={libros} titulo={titulo} />
        </main>
    );
};

export default Landing;