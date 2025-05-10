import React, {useContext} from 'react';
import {GlobalContext} from "../context/GlobalContext.jsx";

const Libro = ({ libro /*, onAddToCart*/ }) => {

    const { cartItems, setCartItems } = useContext(GlobalContext);

    const handleAddToCart = (product) => {
        const existingItem = cartItems.find((item) => item.id === product.id);
        if (product.cantidad > 0){
            if (existingItem) {
                setCartItems(
                    cartItems.map((item) =>
                        item.id === product.id ? { ...item, cantidad: item.cantidad + 1 } : item
                    )
                );
            } else {
                setCartItems([...cartItems, { ...product, cantidad: 1 }]);
            }
            product.cantidad = product.cantidad - 1;
        }
        else{
            alert("El libro de codigo " + product.id + " no tiene existencia en inventario.");
        }
    };

    return (
        <div className="libro">
            <h2>{libro.nombre}</h2>
            <p><strong>Codigo:</strong> {libro.id}</p>
            <p><strong>Autor:</strong> {libro.autor}</p>
            <p><strong>Categoría:</strong> {libro.categoria}</p>
            <p><strong>Disponibles:</strong> {libro.cantidad}</p>
            <div className="disponibles">
                <button onClick={() => handleAddToCart(libro)/*() => handleAddToCart(libro)*/}>Agregar al Carrito</button>
            </div>
        </div>
    );
};

export default Libro;