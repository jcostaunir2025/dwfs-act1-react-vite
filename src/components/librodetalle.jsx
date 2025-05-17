import React, {useContext} from 'react';
import {GlobalContext} from "../context/GlobalContext.jsx";
import {useLocation, useNavigate} from "react-router";
import ShoppingCart from "./ShoppingCart.jsx";
import {Button, Card, CardContent, CardMedia, Grid, Typography} from "@mui/material";

const LibroDetalle = () => {
    const { cartItems, setCartItems, titulo/*categoria*/ } = useContext(GlobalContext);
    const navigate = useNavigate();
    const location  = useLocation();
    const dataLibro = location.state.datalibro;
    const dataLibros = location.state.libros;

    const handleRegresarListaLibrosClick = (lid) => {
        navigate(`/libros/${titulo}`, {state:{id: lid}});
    };

    const handleAddToCart = (product) => {
        const existingItem = cartItems.find((item) => item.id === product.id);
        if (product.cantidad > 0){
            if (existingItem) {
                setCartItems(
                    cartItems.map((item) =>
                        item.id === product.id ? { ...item, cantidad: item.cantidad + 1 } : item
                    )
                );
            } else {
                setCartItems([...cartItems, { ...product, cantidad: 1 }]);
            }
            product.cantidad = product.cantidad - 1;
        }
        else{
            alert("El libro de codigo " + product.id + " no tiene existencia en inventario.");
        }
    };

    /*return (
        <div className="LibroDetalle">
            <ShoppingCart libros={dataLibros} remove={false}  />
            <h2>{dataLibro.nombre}</h2>
            <p><strong>Codigo:</strong> {dataLibro.id}</p>
            <p><strong>Autor:</strong> {dataLibro.autor}</p>
            <p><strong>Categoría:</strong> {dataLibro.categoria}</p>
            <p><strong>Disponibles:</strong> {dataLibro.cantidad}</p>
            <div className="disponibles">
                <button onClick={() => handleAddToCart(dataLibro)}>Agregar al Carrito</button>
                <button onClick={() => handleRegresarListaLibrosClick(dataLibro.id)}>Regresar a listado</button>
            </div>
        </div>
    );*/

    return (
        <div className="LibroDetalle">

        <ShoppingCart libros={dataLibros} remove={false}  />
            <Grid item className = 'box-shadown'
                  xs={1}
                  sx={{backgroundColor: 'white', padding: 5,borderRadius:2}}>
        <Grid item xs={6} sm={6} md={2} key={dataLibro.id}>
            <Card>
                <Typography variant="h4">Nombre: {dataLibro.autor}</Typography>
                <CardMedia
                    component="img"
                    image={dataLibro.image}
                    sx={{
                        maxWidth: 300,
                        margin: "0 auto",
                        padding: "1 em",
                    }}
                    alt={dataLibro.autor}
                />
                <CardContent>
                    <p><strong>Cantidad:</strong> {dataLibro.cantidad}</p>
                    <Typography variant="body1" color="primary" sx={{mt: 1}}>
                        ${dataLibro.precio.toFixed(2)}
                    </Typography>
                    <Button
                        id="agregar"
                        fullWidth
                        variant="contained"
                        sx={{mt: 1}}
                        onClick={() => {
                            handleAddToCart(dataLibro)
                        }}
                    >
                        Agregar al Carrito
                    </Button>
                    <Button
                        id="regresar"
                        fullWidth
                        variant="contained"
                        sx={{mt: 2}}
                        onClick={() => {
                            handleRegresarListaLibrosClick(dataLibro.id)
                        }}
                    >
                        Regresar a listado
                    </Button>
                </CardContent>
            </Card>
        </Grid>
            </Grid>
        </div>
    );

};

export default LibroDetalle;