import React, {useContext} from 'react';
import {GlobalContext} from "../context/GlobalContext.jsx";
import Principal from "./Principal.jsx";
import ShoppingCart from "./ShoppingCart.jsx";

const Landing = () => {
    const { titulo } = useContext(GlobalContext);
    return (
        <main className="landing">
            <ShoppingCart/>
            <Principal titulo={titulo} />
        </main>
    );
};

export default Landing;