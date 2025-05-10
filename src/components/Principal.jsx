import React from "react";
import Libro from "./libro.jsx";


const Principal = ({ libros /*, onAddToCart*/ }) => {
    return (
        <div className="principal">
            {libros.map((libro) => (
                <Libro key={libro.id} libro={libro} /*onAddToCart={onAddToCart}*/ />
            ))}
        </div>
    );
};

export default Principal;