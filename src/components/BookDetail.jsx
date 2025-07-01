import React, {useContext, useState} from 'react';
import {GlobalContext} from "../context/GlobalContext.jsx";
import {useNavigate} from "react-router";
import { useParams } from "react-router-dom";
import ShoppingCart from "./ShoppingCart.jsx";
import {
    Alert,
    Box,
    Button,
    Card,
    CardContent,
    CardMedia, CircularProgress,
    createTheme, Snackbar,
    ThemeProvider,
    Tooltip,
    Typography
} from "@mui/material";
import useDetalleLibro from "../hooks/useDetalleLibro.jsx";
import libro3 from "../assets/FrontPageBook.webp";

const theme = createTheme({
    typography: {
        subtitle1: {
            fontSize: 12,
        },
        body1: {
            fontWeight: 500,
        },
    },
});

const BookDetail = () => {
    const { cartItems, setCartItems, titulo } = useContext(GlobalContext);
    const navigate = useNavigate();
    const { lid } = useParams();
    const { libro, loading } = useDetalleLibro(lid);
    const [showSuccessAlert, setShowSuccessAlert] = useState(false);

    console.log("libro id detalle libro", libro);

    const handleRegresarListaLibrosClick = (lid) => {
        navigate(`/libros/${titulo}`, {state:{id: lid}});
    };

    const handleAddToCart = (product) => {
        const existingItem = cartItems.find((item) => item.idlibro === product.idlibro);
        if (product.stock > 0){
            if (existingItem) {
                setCartItems(
                    cartItems.map((item) =>
                        item.idlibro === product.idlibro ? { ...item, cantidad: item.cantidad + 1 } : item
                    )
                );
            } else {
                setCartItems([...cartItems, { ...product, cantidad: 1 }]);
            }
            product.cantidad = product.cantidad - 1;
            setShowSuccessAlert(true);
        }
        else{
            alert("El libro de codigo " + product.idlibro + " no tiene existencia en inventario.");
        }
    };

    if (loading) return <CircularProgress />;

    return (
        <div className="LibroDetalle">
            <ShoppingCart libros={cartItems}/>
            {Object.entries(libro).length > 0 && (
                <Box id="bookDetail" sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "70vh",
                    mt: 5,
                    mb: 5
                }}>
                    <Card key={libro.idlibro} sx={{height: "100%", display: "flex", flexDirection: "column"}}>
                        <CardMedia
                            component="img"
                            sx={{
                                height: 300,
                                objectFit: "contain",
                                backgroundColor: "#f5f5f5"
                            }}
                            image={libro3}
                            alt={libro.autor}/>
                        <CardContent sx={{flexGrow: 1}}>
                            <ThemeProvider theme={theme}>
                                <Tooltip title={libro.titulo}>
                                    <Typography
                                        noWrap
                                        variant="body1"
                                        sx={{overflow: "hidden", textOverflow: "ellipsis"}}>
                                        {libro.titulo}
                                    </Typography>
                                </Tooltip>
                                <Typography variant="subtitle1" color="textSecondary" noWrap>
                                    {libro.autor}
                                </Typography>
                                <Typography variant="body1" color="primary" sx={{mt: 1}}>
                                    ${libro.precio.toFixed(2)}
                                </Typography>
                            </ThemeProvider>
                        </CardContent>
                    </Card>
                    <Box sx={{
                        mt: 2,
                        display: "flex",
                        flexDirection: "column",
                        gap: 1,
                        width: 300
                    }}>
                        <Button
                            id="agregar"
                            variant="contained"
                            sx={{mt: 1}}
                            onClick={() => {
                                handleAddToCart(libro)
                            }}>
                            Agregar al Carrito
                        </Button>
                        <Button
                            id="regresar"
                            variant="contained"
                            sx={{mt: 2}}
                            onClick={() => {
                                handleRegresarListaLibrosClick(libro.idlibro)
                            }}>
                            Regresar a listado
                        </Button>
                    </Box>
                </Box>)}
            <Snackbar
                open={showSuccessAlert}
                autoHideDuration={1000}
                onClose={() => setShowSuccessAlert(false)}
                anchorOrigin={{ vertical: "top", horizontal: "center" }}>
                <Alert
                    onClose={() => setShowSuccessAlert(false)}
                    severity="success"
                    sx={{ width: "100%" }}>
                    El libro: <strong>{libro.titulo}</strong> fue Agregado.
                </Alert>
            </Snackbar>
        </div>
    );

};

export default BookDetail;