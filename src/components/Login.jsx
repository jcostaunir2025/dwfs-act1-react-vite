import {useContext, useEffect} from "react";
import {useNavigate} from "react-router";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import {GlobalContext} from "../context/GlobalContext.jsx";

const Login = ({ user }) => {
    const navigate = useNavigate();

    useEffect(()=>{
        setTimeout((user)=> navigate('/libros/todas'),3000);
    },[])

    return (
        <div className="login">
            <p><strong>Ingrese su usuario:</strong> <input id="usuario" /></p>
            <p><strong>Ingrese su password:</strong> <input id="passw" /></p>
        </div>
    );
};

export default Login;