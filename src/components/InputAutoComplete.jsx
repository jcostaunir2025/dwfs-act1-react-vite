import React, {useEffect, useRef, useState} from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Box from '@mui/material/Box';
import useFiltrarLibros from "../hooks/useFiltrarLibros.jsx";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

const InputAutoComplete = () => {
    const [inputValue, setInputValue] = useState('');
    const [change, setChange] = useState(false);
    const [filters, setFilters] = useState({});
    const { libros } = useFiltrarLibros(filters, 0);
    const containerRef = useRef(null);

    const handleInputChange = (event) => {
        const value = event.target.value;
        if(value.length >= 3 && change){
            setFilters({titulo:value});
        }
        setInputValue(value);
        setChange(true);
    };

    const handleSuggestionClick = (suggestion) => {
        setInputValue(suggestion);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (containerRef.current && !containerRef.current.contains(event.target)) {
                setChange(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);


    return (
        <Box id="textAutoComplete" ref={containerRef} sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start",
            height: "10vh"
        }}>
            <Box
                sx={{
                    position: "relative", // CLAVE
                    width: 700,
                }}>
                <Paper
                    component="form"
                    sx={{
                        p: "2px 4px",
                        display: "flex",
                        alignItems: "center",
                        width: "100%",
                    }}>
                    <InputBase
                        onChange={handleInputChange}
                        sx={{ml: 1, flex: 1}}
                        placeholder="Título"
                        inputProps={{"aria-label": "título"}}/>
                    <IconButton type="button" sx={{p: "10px"}} aria-label="search">
                        <SearchIcon/>
                    </IconButton>
                </Paper>
                {change && libros !== null && (
                    <Paper
                        sx={{
                            position: "absolute",
                            top: "100%",    // justo debajo
                            left: 0,
                            right: 0,
                            zIndex: 10,
                            maxHeight: 300,
                            overflowY: "auto",
                        }}>
                        <List dense>
                            {libros.libros.map((libro) => (
                                <ListItem disablePadding key={libro.idlibro}
                                          onClick={() => {
                                              setInputValue(libro.titulo);
                                              setChange(false);}}>
                                    <ListItemButton component="a" href="#simple-list">
                                        <ListItemText primary={libro.titulo}/>
                                    </ListItemButton>
                                </ListItem>
                            ))}
                        </List>
                    </Paper>
                )}
            </Box>
        </Box>
    );

};

export default InputAutoComplete;