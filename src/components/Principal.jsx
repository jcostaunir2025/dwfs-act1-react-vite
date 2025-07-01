import React, {useState} from "react";
import Book from "./Book.jsx";
import {Box, CircularProgress, Container, Grid, Pagination, Stack} from '@mui/material';
import useFiltrarLibros from "../hooks/useFiltrarLibros.jsx";
import FilterList from "./FilterList.jsx";
import InputAutoComplete from "./InputAutoComplete.jsx";

const Principal = ({titulo}) => {
    const [pageNumber, setPageNumber ] = useState(0);
    const [filters, setFilters] = useState({});
    const pages = 1000;
    const { libros, loading } = useFiltrarLibros(filters, pageNumber);

    const handlePageChange = (event, value) => {
        setPageNumber(value);
    };

    const handleFilter = (filtros) => {
        setFilters(filtros);
    };

    return (
        <Container sx={{ mt: 4 }} >
            <Box sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",}}>
                <Stack direction="row" spacing={2}>
                    <FilterList onFilter={handleFilter} aggregates={libros !== null ? libros.aggs : {}}/>
                    <InputAutoComplete onFilter={handleFilter} />
                </Stack>
            </Box>
            <Box id="bookList" sx={{
                display: "grid",
                gridTemplateColumns: "repeat(5, 1fr)",
                gap: 2}}>
                {loading && <CircularProgress color="secondary" />}
                {libros !== null && (libros.libros.map((libro) => (
                    <Book key={libro.idlibro} libro={libro} titulo={titulo} libros={libros} />
                )))}
            </Box>
            <Stack spacing={2} sx={{
                mt: 5,
                mb: 5,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",}}>
                <Pagination
                    variant="outlined" shape="rounded"
                    count={pages}
                    page={pageNumber}
                    onChange={handlePageChange}
                    color="primary"
                    sx={{ mt: 2 }}/>
            </Stack>
        </Container>
    );
};

export default Principal;