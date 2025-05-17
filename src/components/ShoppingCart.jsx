import React, {useContext, useState} from "react";
import {GlobalContext} from "../context/GlobalContext.jsx";
import {useNavigate} from "react-router";
import {Button, Drawer, Box, Typography, IconButton, Divider } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import BookList from "./BookList.jsx";

const ShoppingCart = ({libros}) => {
    const {cartItems} = useContext(GlobalContext);
    const navigate = useNavigate();

    const goCheckout = () => {
        navigate("/checkout");
    };

    const [open, setOpen] = useState(false);

    const toggleDrawer = (state) => () => {
        setOpen(state);
    };

    return (
        <div>
            <Button variant="contained" onClick={toggleDrawer(true)} color="secondary">
                Mostrar Carrito
            </Button>
            <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}
                    slotProps={{ paper: { sx: { width: 500 },}}}>
                <Box sx={{ p: 2, position: 'relative', height: '100%' }}>
                    <IconButton
                        onClick={toggleDrawer(false)}
                        sx={{ position: 'absolute', top: 8, right: 8 }}>
                        <CloseIcon />
                    </IconButton>
                    <Typography variant="h6" gutterBottom>
                        Mi Carrito
                    </Typography>
                    <Divider /><br/><br/>
                    <Typography variant="body2">
                        <BookList libros={libros} ></BookList>
                    </Typography>
                    <br/>
                    {cartItems.length > 0 && (
                        <Button variant="contained" disableElevation onClick={() => goCheckout()}>
                            Continuar con la compra</Button>
                    )}
                </Box>
            </Drawer>
        </div>
    );
}

export default ShoppingCart;