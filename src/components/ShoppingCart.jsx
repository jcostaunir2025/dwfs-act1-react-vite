import React, {useContext, useState} from "react";
import {GlobalContext} from "../context/GlobalContext.jsx";
import {useNavigate} from "react-router";
import {Fab, Drawer, Box, Typography, IconButton, Divider, Button, Badge} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import BookList from "./BookList.jsx";

const fabStyle = {
    position: 'fixed',
    bottom: 16,
    right: 16,
};

const ShoppingCart = ({libros}) => {
    const {cartItems} = useContext(GlobalContext);
    const navigate = useNavigate();
    const totalItems = cartItems.reduce((sum, item) => sum + item.cantidad, 0);

    const goCheckout = () => {
        navigate("/checkout");
    };

    const [open, setOpen] = useState(false);

    const toggleDrawer = (state) => () => {
        setOpen(state);
    };

    return (
        <div>

            <Fab sx={fabStyle} onClick={toggleDrawer(true)} color="warning" aria-label="viewCart">
                <Badge badgeContent={totalItems} color="secondary">
                <ShoppingCartIcon />
                </Badge>
            </Fab>
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