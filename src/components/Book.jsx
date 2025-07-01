import {GlobalContext} from "../context/GlobalContext.jsx";
import {useLocation, useNavigate} from "react-router";
import React, {useContext, useEffect} from "react";
import {
    Button,
    Card,
    CardContent,
    CardMedia,
    createTheme,
    ThemeProvider,
    Tooltip,
    Typography
} from "@mui/material";
import libro3 from '../assets/FrontPageBook.webp';

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

const Book = ({ libro, titulo, libros }) => {
    const navigate = useNavigate();
    const {cartItems, booklist} = useContext(GlobalContext);
    let libroid = -1;
    const location = useLocation();

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
                            product.stock = booklist.find((b) => b.id === product.idlibro).stock - existingItem.cantidad;
                        }
                    })
                    // setnewlibros([...libros]);
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

    return (
        <Card
            key={libro.idlibro}
            sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column"
            }}>
            <CardMedia
                component="img"
                sx={{
                    height: 150,
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
                    <Button
                        fullWidth
                        variant="contained"
                        size="small"
                        sx={{mt: 2}}
                        onClick={() => handleDetalleLibroClick(libro.idlibro)}>
                        Ver Detalle
                    </Button>
                </ThemeProvider>
            </CardContent>
        </Card>
    );
};

export default Book;