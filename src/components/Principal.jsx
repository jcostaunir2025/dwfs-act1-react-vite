import React from "react";
import Libro from "./Libro.jsx";

const Principal = ({ libros, titulo }) => {
        let filtrados = !libros.every(element => element.isFiltered === false);
    return (
        <div className="principal">
            { filtrados ? libros.filter(item => item.isFiltered === true).map((libro) => (
                <Libro key={libro.id} libro={libro} titulo={titulo} libros={libros} />
            )) : libros.map((libro) => (
                <Libro key={libro.id} libro={libro} titulo={titulo} libros={libros} />
            ))}
        </div>
    );
};

export default Principal;