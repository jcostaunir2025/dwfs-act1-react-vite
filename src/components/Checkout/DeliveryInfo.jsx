import {useContext} from "react";
import {GlobalContext} from "../../context/GlobalContext.jsx";
import './BookSummary.css'

const DeliveryInfo = ({ setStep }) => {
    const { deliveryInfo, setDeliveryInfo } = useContext(GlobalContext);
    const sendStep = () => {
        setStep(3);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        sendStep();
    };

    return (
        <section className="mainContainer">
            <h2 className="">Datos de Envío</h2>
            <form onSubmit={handleSubmit} id="formDelivery" className="formDeliveryInfo">
                <div className="formDeliveryInfo__colum">
                    <div className="formDeliveryInfo__group">
                        <label>Nombre completo:</label>
                        <input type="text" name="name" placeholder="Ej: Adrian Pulido" value={deliveryInfo.nombre} required
                               onChange={(e) => setDeliveryInfo({ ...deliveryInfo, nombre: e.target.value })}/>
                    </div>
                    <div className="formDeliveryInfo__group">
                        <label>Ciudad:</label>
                        <input type="text" name="city" placeholder="Ej: Bogotá" value={deliveryInfo.ciudad} required
                               onChange={(e) => setDeliveryInfo({ ...deliveryInfo, ciudad: e.target.value })}/>
                    </div>
                </div>
                <div className="formDeliveryInfo__colum">
                    <div className="formDeliveryInfo__group">
                        <label>Dirección:</label>
                        <input type="text" name="adress" placeholder="Calle 32 # 43 - 12" value={deliveryInfo.direccion} required
                               onChange={(e) => setDeliveryInfo({ ...deliveryInfo, direccion: e.target.value })}/>
                    </div>
                    <div className="formDeliveryInfo__group">
                        <label>Teléfono:</label>
                        <input type="tel" name="phone" placeholder="Ej: 3812934768" value={deliveryInfo.telefono} required
                               onChange={(e) => setDeliveryInfo({ ...deliveryInfo, telefono: e.target.value })}/>
                    </div>
                </div>
                <button type="submit" className="checkoutButton checkoutButton-deliveryInfo">
                    Confirmar envío</button>
            </form>
        </section>
    );
};
export default DeliveryInfo;