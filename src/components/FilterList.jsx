import React, { useState } from "react";
import {TextField, Button, Box, Typography, Drawer, Fab, Divider} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import TuneIcon from '@mui/icons-material/Tune';
import ButtonFilters from "./ButtonFilters.jsx";

const FilterList = ({ onFilter, aggregates}) => {
    const [dateFrom, setDateFrom] = useState(undefined);
    const [dateTo, setDateTo] = useState(undefined);
    const [minPrice, setMinPrice] = useState("");
    const [maxPrice, setMaxPrice] = useState("");

    const handleSubmit = () => {
        onFilter({
            dateFrom: dateFrom,
            dateTo:dateTo,
            minPrice,
            maxPrice
        });
    };

    const handleReset = () => {
        setDateFrom(undefined);
        setDateTo(undefined);
        setMinPrice("");
        setMaxPrice("");
        onFilter({
            dateFrom: undefined,
            dateTo:undefined,
            minPrice: "",
            maxPrice: "",
            availability: "",
        });
    };

    const [open, setOpen] = useState(false);

    const toggleDrawer = (state) => () => {
        setOpen(state);
    };

    return (
        <div id="filters">
            <Fab color="secondary" variant="extended" onClick={toggleDrawer(true)}>
                <TuneIcon />
            </Fab>
            <Drawer
                anchor="left"
                open={open}
                onClose={toggleDrawer(false)}>
                <Box
                    sx={{width: 300, p: 2}}
                    role="presentation">
                    <Typography variant="h6">Filtros</Typography>
                    <Divider />
                    <Box sx={{mt: 2}}>
                        <Typography variant="subtitle2">Rango de precios</Typography>
                        <TextField
                            sx={{ mt: 1.5}}
                            size="small"
                            label="Precio mínimo"
                            type="number"
                            value={minPrice}
                            onChange={(e) => setMinPrice(e.target.value)}/>
                        <TextField
                            sx={{ mt: 1.5 }}
                            size="small"
                            label="Precio máximo"
                            type="number"
                            value={maxPrice}
                            onChange={(e) => setMaxPrice(e.target.value)}/>
                    </Box>
                    <Box sx={{mt: 2}}>
                        <Typography variant="subtitle2">Fecha de publicación</Typography>
                        <DatePicker
                            sx={{ mt: 1.5}}
                            slotProps={{
                                textField: { size: 'small', fullWidth: true }
                            }}
                            label="Desde"
                            value={dateFrom}
                            onChange={(newValue) => setDateFrom(newValue)}/>
                        <DatePicker
                            sx={{ mt: 1.5}}
                            slotProps={{
                                textField: { size: 'small', fullWidth: true }
                            }}
                            label="Hasta"
                            value={dateTo}
                            onChange={(newValue) => setDateTo(newValue)}/>
                    </Box>
                    <Button
                        variant="contained"
                        color="primary"
                        sx={{mt: 2}}
                        onClick={() => {
                            handleSubmit();
                            toggleDrawer(false)();
                        }}>
                        Aplicar
                    </Button>
                    <Button
                        variant="outlined"
                        sx={{mt: 2}}
                        onClick={handleReset}>
                        Limpiar
                    </Button>
                </Box>
                <ButtonFilters onFilterChange={onFilter} opciones={aggregates}/>
            </Drawer>
        </div>
    );
};

export default FilterList;
