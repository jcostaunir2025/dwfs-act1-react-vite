import React from "react";
import Libro from "./Libro.jsx";

const Principal = ({ libros, titulo }) => {

    return (
        <div className="principal">
            {libros.map((libro) => (
                <Libro key={libro.id} libro={libro} titulo={titulo} libros={libros} />
            ))}
        </div>
    );
};

export default Principal;