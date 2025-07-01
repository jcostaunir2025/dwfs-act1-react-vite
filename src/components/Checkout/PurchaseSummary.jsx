import {useContext} from "react";
import {GlobalContext} from "../../context/GlobalContext.jsx";
import BookSummary from "./BookSummary.jsx";

const PurchaseSummary = ({ setStep }) => {
    const { cartItems } = useContext(GlobalContext);
    const total = cartItems.reduce((sum, book) => sum + book.precio * book.cantidad, 0);
    const sendStep = () => {
        setStep(2);
    };

    return (
        <section className="mainContainer">
            <article>
                <h2>Resumen de la compra</h2>
                {cartItems.map(item => (
                    <BookSummary key={item.idlibro} bookInfo={item}></BookSummary>
                ))}
                <div className="summary">
                    <span><strong>Total:</strong></span>
                    <span>${total}</span>
                </div>
                <button className="checkoutButton" onClick={sendStep}>Proceder al pago</button>
            </article>
        </section>
            );
};
export default PurchaseSummary;