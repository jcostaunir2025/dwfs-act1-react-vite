import React from 'react';
import {
    Typography,
    Container,
    Grid,
    Card,
    CardContent,
    CardMedia,
    Button
} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import libro1 from '../assets/image/libro1.png';
import libro2 from '../assets/image/libro2.png';
import libro3 from '../assets/image/libro3.png';
const libros = [
    {
        titulo: 'Cien años de soledad',
        autor: 'Gabriel García Márquez',
        imagen: libro1,
        precio: 15.99,
    },
    {
        titulo: 'El Quijote',
        autor: 'Miguel de Cervantes',
        imagen: libro2,
        precio: 18.5,
    },
    {
        titulo: '1984',
        autor: 'George Orwell',
        imagen: libro3,
        precio: 12.75,
    },
];

export const RegisterPage = () => {
    const [carrito, setCarrito] = React.useState([]);

    const agregarAlCarrito = (libro) => {
        setCarrito([...carrito, libro]);
    };

    return (
        <Container sx={{ mt: 4 }}>
            <Grid container spacing={4}>
                {libros.map((libro, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Card>
                            <CardMedia
                                component="img"
                                height="250"
                                image={libro.imagen}
                                alt={libro.titulo}
                            />
                            <CardContent>
                                <Typography variant="h6">{libro.titulo}</Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {libro.autor}
                                </Typography>
                                <Typography variant="body1" color="primary" sx={{ mt: 1 }}>
                                    ${libro.precio.toFixed(2)}
                                </Typography>
                                <Button
                                    fullWidth
                                    variant="contained"
                                    sx={{ mt: 2 }}
                                    onClick={() => agregarAlCarrito(libro)}
                                >
                                    Añadir al carrito
                                </Button>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};
