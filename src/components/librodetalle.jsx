import React, {useContext} from 'react';
import {GlobalContext} from "../context/GlobalContext.jsx";
import {useLocation, useNavigate} from "react-router";
import ShoppingCart from "./ShoppingCart.jsx";

const LibroDetalle = () => {
    const { cartItems, setCartItems, titulo/*categoria*/ } = useContext(GlobalContext);
    const navigate = useNavigate();
    const location  = useLocation();
    const dataLibro = location.state.datalibro;
    const dataLibros = location.state.libros;

    const handleRegresarListaLibrosClick = (lid) => {
        navigate(`/libros/${titulo}`, {state:{id: lid}});
    };

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
        <div className="LibroDetalle">
            <ShoppingCart libros={dataLibros} remove={false} /*cartItems={cartItems} onRemoveCartItem={handleRemoveCartItem}*/ />
            <h2>{dataLibro.nombre}</h2>
            <p><strong>Codigo:</strong> {dataLibro.id}</p>
            <p><strong>Autor:</strong> {dataLibro.autor}</p>
            <p><strong>Categoría:</strong> {dataLibro.categoria}</p>
            <p><strong>Disponibles:</strong> {dataLibro.cantidad}</p>
            <div className="disponibles">
                <button onClick={() => handleAddToCart(dataLibro)}>Agregar al Carrito</button>
                <button onClick={() => handleRegresarListaLibrosClick(dataLibro.id)}>Regresar a listado</button>
            </div>
        </div>
    );
};

export default LibroDetalle;