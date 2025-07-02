import {useContext, useState} from 'react';
import {GlobalContext} from "../../context/GlobalContext.jsx";
import Alert from "./Alert.jsx";
import VoucherSuccess from "./VoucherSuccess.jsx";
import {useNavigate} from "react-router";
import createOrder from "../../api/services/CreateOrdersService.js";

function PaymentMethod (){
    const { deliveryInfo, setDeliveryInfo, cartItems } = useContext(GlobalContext);
    const { setCartItems } = useContext(GlobalContext);
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [rsCreateOrder, setRsCreateOrder] = useState({});

    async function makePayment() {
        setLoading(false);
        try {
            const data = await createOrder(Object.values(cartItems).map(p => p.idlibro));
            setRsCreateOrder(data);
        } catch (e) {
            console.error("Error crear la orden", e);
        } finally {
            setLoading(true);
        }
    }

    const goHome = () => {
        setCartItems([]);
        navigate("/libros/:titulo");
    };

    const voucher = <VoucherSuccess id={rsCreateOrder.id}/>;

    return (
        <section className="mainContainer">
            <h2 className="">Método de pago</h2>
            <article className="paymentMethod">
                <div className="paymentMethod__card" data-metodo="tarjeta">
                    <input type="radio" name="metodoPago" value="Tarjeta de Crédito" id="pagoTarjeta" hidden required
                    onChange={(e) => setDeliveryInfo({ ...deliveryInfo, metodoPago: e.target.value })}/>
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
            <button className="checkoutButton" onClick={makePayment}>Realizar pago</button>
            {loading && (<Alert content={voucher} onClose={goHome} />)}
        </section>
    );
}

export default PaymentMethod;