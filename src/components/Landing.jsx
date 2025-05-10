import React, {useState, useContext} from 'react';
import {GlobalContext} from "../context/GlobalContext.jsx";
import Principal from "./Principal.jsx";
import useLibros from "../hooks/useLibros.jsx";
import CategoriaSelector from "./CategoriaSelector.jsx";
import ShoppingCart from "./ShoppingCart.jsx";

const Landing = () => {
    const { categoria, booklist } = useContext(GlobalContext);
    const { libros, loading } = useLibros(categoria);

    //const [cartItems, setCartItems] = useState([]);

    /*const handleRemoveCartItem = (product) => {
        const existingItem = cartItems.find((item) => item.id === product.id);
            if (existingItem && existingItem.cantidad >= 1) {
                setCartItems(
                    cartItems.map((item) =>
                        item.id === product.id ? { ...item, cantidad: item.cantidad - 1 } : item
                    )
                );
                libros.find((item) => item.id === product.id).cantidad += 1;
            }
            if (existingItem && existingItem.cantidad === 0) {
                let newcantidad = booklist.find((item) => item.id === product.id).cantidad;
                libros.find((item) => item.id === product.id).cantidad = newcantidad;
                    cartItems.splice(cartItems.indexOf(existingItem), 1);
            }

        if(cartItems.length === 0){
            setCartItems([]);
        }
    };*/

    /*const handleAddToCart = (product) => {
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
    };*/

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
            <ShoppingCart libros={libros} /*cartItems={cartItems} onRemoveCartItem={handleRemoveCartItem}*/ />
            <CategoriaSelector />
            <Principal libros={libros} /*onAddToCart={handleAddToCart}*/ />
        </main>
    );
};

export default Landing;