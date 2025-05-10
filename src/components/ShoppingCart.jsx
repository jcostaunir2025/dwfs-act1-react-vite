import React from "react";

const ShoppingCart = ({ cartItems, onRemoveCartItem }) => {
    const totalPrice = cartItems.reduce((sum, item) => sum + item.precio * item.cantidad, 0);

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
                            <button onClick={() => onRemoveCartItem(item)}>Remover</button>
                        </li>
                    ))}
                </ul>
            )}
            <p>Total: ${totalPrice}</p>
        </div>
    );
}

export default ShoppingCart;