import {useState} from 'react';
import PurchaseSummary from "./PurchaseSummary.jsx";
import DeliveryInfo from "./DeliveryInfo.jsx";
import PaymentMethod from "./PaymentMethod.jsx";

function Checkout (){

    const [paso, setPaso] = useState(1);

    return (
        <section className="checkout__container">
            {paso === 1 && (
                <PurchaseSummary setStep={setPaso} />
            )}
            {paso === 2 && (
                <DeliveryInfo setStep={setPaso} />
            )}
            {paso === 3 && (
                <PaymentMethod setStep={setPaso} />
            )}
        </section>
    );
}

export default Checkout;