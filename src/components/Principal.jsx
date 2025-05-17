import React from "react";
import Book from "./Book.jsx";
import {
    Container,
    Grid,
} from '@mui/material';
const Principal = ({ libros, titulo }) => {
        let filtrados = !libros.every(element => element.isFiltered === false);
    return (
        <Container sx={{ mt: 4 }}>
            <Grid container spacing={4}>

            { filtrados ? libros.filter(item => item.isFiltered === true).map((libro) => (
                <Book key={libro.id} libro={libro} titulo={titulo} libros={libros} />
            )) : libros.map((libro) => (
                <Book key={libro.id} libro={libro} titulo={titulo} libros={libros} />
            ))}

            </Grid>
        </Container>
    );
};

export default Principal;