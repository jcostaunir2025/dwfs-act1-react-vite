import React, {useContext} from "react";
import {GlobalContext} from "../context/GlobalContext.jsx";
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteIcon from '@mui/icons-material/Delete';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

const BookList = ({ libros }) => {
    const { cartItems, setCartItems, booklist } = useContext(GlobalContext);
    const totalPrice = cartItems.reduce((sum, item) => sum + item.precio * item.cantidad, 0);

    const handleRemoveCartItem = (product) => {
        const existingItem = cartItems.find((item) => item.idlibro === product.idlibro);
        if (existingItem && existingItem.cantidad >= 1) {
            setCartItems(
                cartItems.map((item) =>
                    item.idlibro === product.idlibro ? { ...item, cantidad: item.cantidad - 1 } : item
                ));
            libros.find((item) => item.idlibro === product.idlibro).cantidad += 1;
            if (existingItem.cantidad === 1) {
                let newcantidad = booklist.find((item) => item.idlibro === product.idlibro).cantidad;
                libros.find((item) => item.idlibro === product.idlibro).cantidad = newcantidad;
                cartItems.splice(cartItems.indexOf(existingItem), 1);
            }
        }
        if(cartItems.every(element => element.cantidad === 0) || cartItems.length === 0){
            setCartItems([]);
        }
    };

    return (
        <article>
            {cartItems.length === 0 ? (
                <span>Tu carro está vacio :(</span>
            ) : (<TableContainer component={Paper}>
                    <Table sx={{ minWidth: 200 }} aria-label="customized table">
                        <caption>Total: ${totalPrice}</caption>
                        <TableHead>
                            <TableRow>
                                <StyledTableCell>Libro</StyledTableCell>
                                <StyledTableCell align="right">Valor</StyledTableCell>
                                <StyledTableCell align="right">Cantidad</StyledTableCell>
                                <StyledTableCell align="right"> </StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {cartItems.map((item) => (
                                <StyledTableRow key={item.idlibro}>
                                    <StyledTableCell component="th" scope="row">
                                                    {item.titulo}
                                    </StyledTableCell>
                                    <StyledTableCell align="right">{item.precio}</StyledTableCell>
                                    <StyledTableCell align="right">{item.cantidad}</StyledTableCell>
                                    <StyledTableCell align="right">
                                        <DeleteIcon color="red" size="small"
                                                    onClick={() => {handleRemoveCartItem(item)}}>Remover
                                        </DeleteIcon>
                                    </StyledTableCell>
                                </StyledTableRow>
                            ))}
                        </TableBody>
                    </Table>
            </TableContainer>)}
        </article>);
}

export default BookList;