import {useContext, useState} from 'react';
import {GlobalContext} from "../../context/GlobalContext.jsx";
import Alert from "./Alert.jsx";
import VoucherSuccess from "./VoucherSuccess.jsx";
import {useNavigate} from "react-router";

function PaymentMethod (){
    const { deliveryInfo, setDeliveryInfo } = useContext(GlobalContext);
    const [showAlert, setShowAlert] = useState(false);
    const { setCartItems } = useContext(GlobalContext);
    const navigate = useNavigate();

    const goHome = () => {
        setCartItems([]);
        setShowAlert(false);
        navigate("/libros/:titulo");
    };

    const voucher = <VoucherSuccess/>;

    return (
        <section className="mainContainer">
            <h2 className="">Método de pago</h2>
            <article className="paymentMethod">
                <div className="paymentMethod__card" data-metodo="tarjeta">
                    <input type="radio" name="metodoPago" value="Tarjeta de Crédito" id="pagoTarjeta" hidden required/>
                    <label htmlFor="pagoTarjeta">
                        💳 Tarjeta de Crédito
                    </label>
                </div>
                <article className="paymentMethod__card" data-metodo="paypal">
                    <input type="radio" name="metodoPago" value="Paypal" id="pagoPaypal" hidden required
                           onChange={(e) => setDeliveryInfo({ ...deliveryInfo, metodoPago: e.target.value })}/>
                    <label htmlFor="pagoPaypal">
                        🅿️ PayPal
                    </label>
                </article>
            </article>
            <button className="checkoutButton" onClick={() => setShowAlert(true)}>Realizar pago</button>
            {showAlert && (<Alert content={voucher} onClose={goHome} />)}
        </section>
    );
}

export default PaymentMethod;