import {useEffect} from "react";
import {useNavigate} from "react-router";

const Login = () => {
    const navigate = useNavigate();

    useEffect(() => {
        let timeoutId;

        const handleInactivity = () => {
            timeoutId = setTimeout(() => {
                navigate('/libros/todos');
            }, 5000);
        };

        const handleActivity = () => {
            clearTimeout(timeoutId);
            handleInactivity();
        };

        handleInactivity();

        window.addEventListener('mousemove', handleActivity);
        window.addEventListener('keypress', handleActivity);

        return () => {
            clearTimeout(timeoutId);
            window.removeEventListener('mousemove', handleActivity);
            window.removeEventListener('keypress', handleActivity);
        };
    }, [navigate]);

    return (
        <div className="login">
            <p><strong>Ingrese su usuario:</strong> <input id="usuario" /></p>
            <p><strong>Ingrese su password:</strong> <input id="passw" /></p>
        </div>
    );
};

export default Login;