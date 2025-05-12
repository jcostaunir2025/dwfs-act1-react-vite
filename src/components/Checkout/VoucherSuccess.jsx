import {useContext} from "react";
import {GlobalContext} from "../../context/GlobalContext.jsx";

const VoucherSuccess = () => {
    const {deliveryInfo} = useContext(GlobalContext);
    return (
        <section className="mainContainer">
                <h2>✅ ¡Gracias por tu compra!</h2>
                <p><strong>Nombre:</strong> {deliveryInfo.nombre}</p>
                <p><strong>Dirección:</strong> {deliveryInfo.direccion}</p>
                <p><strong>Ciudad:</strong> {deliveryInfo.ciudad}</p>
                <p><strong>Teléfono:</strong> {deliveryInfo.telefono}</p>
                <p><strong>Método de pago:</strong> {deliveryInfo.metodoPago}</p>
        </section>);
};
export default VoucherSuccess;