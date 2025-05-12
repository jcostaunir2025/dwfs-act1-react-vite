import React, {useContext} from "react";
import {GlobalContext} from "../context/GlobalContext.jsx";

const ShoppingCart = ({ libros, remove }) => {
    const { cartItems, setCartItems, booklist } = useContext(GlobalContext);
    const totalPrice = cartItems.reduce((sum, item) => sum + item.precio * item.cantidad, 0);

    const handleRemoveCartItem = (product) => {
        const existingItem = cartItems.find((item) => item.id === product.id);
        if (existingItem && existingItem.cantidad >= 1) {
            setCartItems(
                cartItems.map((item) =>
                    item.id === product.id ? { ...item, cantidad: item.cantidad - 1 } : item
                )
            );

            libros.find((item) => item.id === product.id).cantidad += 1;
            if (existingItem.cantidad === 1) {
                let newcantidad = booklist.find((item) => item.id === product.id).cantidad;
                libros.find((item) => item.id === product.id).cantidad = newcantidad;
                cartItems.splice(cartItems.indexOf(existingItem), 1);
            }
        }

        if(cartItems.every(element => element.cantidad === 0) || cartItems.length === 0){
            setCartItems([]);
        }
    };

    return (
        <div>
            <h2>Shopping Cart</h2>
            {cartItems.length === 0 ? (
                <p>Tu carro esta vacio.</p>
            ) : (
                <ul>
                    {cartItems.map((item) => (
                        <li key={item.id}>
                            {item.nombre} - ${item.precio} x {item.cantidad}
                            {remove && (
                                <button onClick={() => {handleRemoveCartItem(item)}}>Remover</button>
                            )}

                        </li>
                    ))}
                </ul>
            )}
            <p>Total: ${totalPrice}</p>
        </div>
    );
}

export default ShoppingCart;