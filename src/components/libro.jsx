import {GlobalContext} from "../context/GlobalContext.jsx";
import {useLocation, useNavigate} from "react-router";
import React, {useContext, useEffect, useState} from "react";
import {Button, Card, CardContent, CardMedia, Grid, Typography} from "@mui/material";


const Libro = ({ libro, titulo, libros }) => {
    const navigate = useNavigate();
    const {cartItems, booklist} = useContext(GlobalContext);
    let libroid = -1;
    const location = useLocation();
    const [newlibros, setnewlibros] = useState([libros]);

    if (location.state !== undefined && location.state !== null) {
        libroid = parseInt(location.state.id);
    }

    useEffect(() => {
        const syncLibros = async () => {

            try {
                if (cartItems.length > 0) {
                    libros.forEach((product) => {
                        let existingItem = cartItems.find((item) => item.id === product.id);

                        if (existingItem && existingItem.id === libroid) {
                            product.cantidad = booklist.find((b) => b.id === product.id).cantidad - existingItem.cantidad;
                        }
                    })
                    const newlibros = [...libros];
                    setnewlibros(newlibros);
                }

            } catch (error) {
                console.log(error);
            }
        };

        syncLibros().then(r => setTimeout(() => r, 2000));
    }, [libros]);

    const handleDetalleLibroClick = (id) => {
        navigate(`/libros/${titulo}/detalle/${id}`, {state: {datalibro: libro, libros: libros}});
    };


    /* <div className="Libro">
         <h2>{libro.nombre}</h2>
         <p><strong>Codigo:</strong> {libro.id}</p>
         <p><strong>Cantidad:</strong> {libro.cantidad}</p>
         <div className="disponibles">
             <button onClick={() => {handleDetalleLibroClick(libro.id)}}>Ver Detalle Libro</button>
         </div>
     </div>*/

    return (

        <Grid item xs={12} sm={6} md={4} key={libro.id}>
            <Card>
                <CardMedia
                    component="img"
                    height="250"
                    image={libro.image}
                    alt={libro.autor}
                />
                <CardContent>
                    <Typography variant="h6">{libro.id}</Typography>
                    <Typography variant="body2" color="text.secondary">
                        {libro.autor}
                    </Typography>
                    <p><strong>Cantidad:</strong> {libro.cantidad}</p>
                    <Typography variant="body1" color="primary" sx={{mt: 1}}>
                        ${libro.precio.toFixed(2)}
                    </Typography>
                    <Button
                        id="disponibles"
                        fullWidth
                        variant="contained"
                        sx={{mt: 2}}
                        onClick={() => {
                            handleDetalleLibroClick(libro.id)
                        }}
                    >
                        Ver Detalle Libro
                    </Button>
                </CardContent>
            </Card>
        </Grid>
    );
};

export default Libro;