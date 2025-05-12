import {useEffect} from "react";
import {useNavigate} from "react-router";
import {Grid,Typography,TextField,Button} from '@mui/material';

const Login = ({ user }) => {
    const navigate = useNavigate();

    useEffect(() => {
        let timeoutId;

        const handleInactivity = () => {
            timeoutId = setTimeout(() => {
                navigate('/libros/todos');
            }, 10000);
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


    const handleButtonClick = () => {
        navigate('/libros/todos');
    };
    return (
        <Grid container direction="column" spacing={0} alignItems="center" justifyContent="center"
              sx={{minHeight: '100vh',backgroundColor: 'primary.main' ,padding: '4'}}>
            <Grid item className = 'box-shadown'
                  xs={3}
                  sx={{backgroundColor: 'white', padding: '3',borderRadius:2}}>
                <Typography variant='h5' sx={ {mb:1}}>
                    Inicio Sesión
                </Typography>
                <form>
                    <Grid container >
                        <Grid item xs={12} sx={{mt: 2}}>
                            <TextField label="Correo" type="email"
                                       placeholder='Correo@example.com'
                                       fullWidth={true}/>
                        </Grid>

                    </Grid>

                    <Grid container >
                        <Grid   xs={12} sx={{mt: 2}}>
                            <TextField label="Contraseña" type="pss"
                                       placeholder='Contraseña'
                                       fullWidth={true}/>
                        </Grid>
                    </Grid>
                    <Grid container spacing={2} sx={{mb: 2}}>
                        <Grid  xs={12} sx={{mt: 2}} sm={12}>
                            <Button variant='contained' fullWidth  onClick={handleButtonClick}>
                                Inicio
                            </Button>
                        </Grid>
                    </Grid>
                </form>

            </Grid>
        </Grid>
    );
};

export default Login;