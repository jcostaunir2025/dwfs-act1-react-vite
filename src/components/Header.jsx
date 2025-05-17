import React from 'react';
import logo from '../assets/image/libro1.png';
import { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Box, IconButton, Drawer, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import ContactsIcon from '@mui/icons-material/Contacts';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
export const navItems = [
        { text: 'Inicio', href: '/', icon: <HomeIcon /> },
        { text: 'Acerca de Nosotros', href: '/about', icon: <InfoIcon /> },
        { text: 'Contactanos', href: '/contact', icon: <ContactsIcon /> },
    ];

const Header = ({ user }) => {
    const [mobileOpen, setMobileOpen] = useState(false);

    // const navItems = [
    //     { text: 'Inicio', href: '/', icon: <HomeIcon /> },
    //     { text: 'Acerca de Nosotros', href: '/about', icon: <InfoIcon /> },
    //     { text: 'Contactanos', href: '/contact', icon: <ContactsIcon /> },
    //     { text: 'Carrito', href: '/carrito', icon: <ShoppingCartIcon /> , },
    // ];


    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };


    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography variant="h6" sx={{ my: 2, fontWeight: 'bold' }}>
                Relatos de Papel
            </Typography>
            <List>
                {navItems.map((item) => (
                    <ListItem key={item.text} component="a" href={item.href}>
                        <ListItemIcon>{item.icon}</ListItemIcon>
                        <ListItemText primary={item.text} />
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    const upperUser = user.toUpperCase();
    return (
        <AppBar position="static" sx={{ bgcolor: '#01579b', boxShadow: 3 }}>
            <Toolbar sx={{ justifyContent: 'space-between' }}>
                {/* Logo y título */}
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <img
                        src={logo} // Cambia esto por la ruta de tu logo
                        alt="Logo"
                        style={{ height: '40px', objectFit: 'contain' }}
                    />
                    <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#fff' }}>
                        Bienvenido a Relatos de Papel - {upperUser}
                    </Typography>
                </Box>

                {/* Botones de navegación para pantallas grandes */}
                <Box sx={{ display: { xs: 'none', sm: 'flex' }, gap: 2 }}>
                    {navItems.map((item) => (
                        <Button
                            key={item.text}
                            color={item.text === 'Iniciar Sesión' ? 'secondary' : 'inherit'}
                            variant={item.text === 'Iniciar Sesión' ? 'contained' : 'text'}
                            href={item.href}
                            startIcon={item.icon}
                            sx={{ textTransform: 'none', px: item.text === 'Iniciar Sesión' ? 2 : 1 }}
                        >
                            {item.text}
                        </Button>
                    ))}
                </Box>

                {/* Botón hamburguesa para pantallas pequeñas */}
                <IconButton
                    color="inherit"
                    edge="end"
                    onClick={handleDrawerToggle}
                    sx={{ display: { xs: 'block', sm: 'none' } }}
                >
                    <MenuIcon />
                </IconButton>
            </Toolbar>

            {/* Drawer para menú móvil */}
            <Drawer
                anchor="right"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                sx={{ display: { xs: 'block', sm: 'none' } }}
            >
                {drawer}
            </Drawer>
        </AppBar>
    
    );
    // <header>
    //     <h1>Bienvenido a Relatos de Papel - {upperUser}</h1>
    // </header>

};

export default Header;
