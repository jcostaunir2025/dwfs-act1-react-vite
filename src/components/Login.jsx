import {useEffect} from "react";
import {useNavigate} from "react-router";
import {Grid,Typography} from '@mui/material';

const Login = ({ user }) => {
    const navigate = useNavigate();

    useEffect(() => {
        let timeoutId;

        const handleInactivity = () => {
            timeoutId = setTimeout(() => {
                navigate('/libros/todas');
            }, 5000000);
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

       <Grid container direction="column" spacing={0} alignItems="center" justifyContent="center"
        sx={{minHeight: '100vh',backgroundColor: 'primary.main' ,padding: '4'}}>
            <Grid item className = 'box-shadown'
            xs={3}
            sx={{backgroundColor: 'white', padding: '3',borderRadius:2}}>
            <Typography variant='h5' sx={ {mb:1}}>
                Inicio Sesión
            </Typography>
                <div className="login">
                    <p><strong>Ingrese su usuario:</strong> <input id="usuario" /></p>
                    <p><strong>Ingrese su password:</strong> <input id="passw" /></p>
                </div>

            </Grid>


        </Grid>



    );
};

export default Login;