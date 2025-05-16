import React from 'react';
import { Container, Grid, Typography, Link, Box, Button } from '@mui/material';
import { Facebook, Twitter, Instagram } from '@mui/icons-material';
import { navItems } from './Header';

const Footer = () => {
    return (
        <Box component="footer" sx={{ bgcolor: '#01579b', color: 'white', py: { xs: 4, sm: 6 } }}>
            <Container maxWidth="lg">
                <Grid container spacing={{ xs: 2, sm: 4 }} justifyContent="space-between" alignItems="flex-start">
                    <Grid item xs={12} sm={4}>
                        <Typography variant="h6" gutterBottom sx={{ fontSize: { xs: '1.1rem', sm: '1.25rem' } }}>
                            Sobre Nosotros
                        </Typography>
                        <Typography variant="body2" sx={{ fontSize: { xs: '0.85rem', sm: '0.875rem' } }}>
                            Somos el GRUPO 9 de Desarrollo Full Stack.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Typography variant="h6" gutterBottom sx={{ fontSize: { xs: '1.1rem', sm: '1.25rem' } }}>
                            Enlaces Rápidos
                        </Typography>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: { xs: 'column', sm: 'row' },
                                gap: { xs: 1, sm: 2 },
                                alignItems: { xs: 'flex-start', sm: 'center' },
                            }}
                        >
                            {navItems.map((item) => (
                                <Button
                                    key={item.text}
                                    color={item.text === 'Iniciar Sesión' ? 'secondary' : 'inherit'}
                                    variant={item.text === 'Iniciar Sesión' ? 'contained' : 'text'}
                                    href={item.href}
                                    startIcon={item.icon}
                                    sx={{
                                        textTransform: 'none',
                                        px: item.text === 'Iniciar Sesión' ? 2 : 1,
                                        fontSize: { xs: '0.85rem', sm: '0.875rem' },
                                        justifyContent: 'flex-start',
                                    }}
                                >
                                    {item.text}
                                </Button>
                            ))}
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Typography variant="h6" gutterBottom sx={{ fontSize: { xs: '1.1rem', sm: '1.25rem' } }}>
                            Contacto
                        </Typography>
                        <Typography variant="body2" sx={{ fontSize: { xs: '0.85rem', sm: '0.875rem' } }}>
                            Email: grupo9@unir.com
                        </Typography>
                        <Typography variant="body2" sx={{ fontSize: { xs: '0.85rem', sm: '0.875rem' } }}>
                            Teléfono: +123 456 7890
                        </Typography>
                        <Box sx={{ mt: 2, display: 'flex', gap: 1 }}>
                            <Link href="#" color="inherit">
                                <Facebook fontSize="small" />
                            </Link>
                            <Link href="#" color="inherit">
                                <Twitter fontSize="small" />
                            </Link>
                            <Link href="#" color="inherit">
                                <Instagram fontSize="small" />
                            </Link>
                        </Box>
                    </Grid>
                </Grid>
                <Box sx={{ mt: { xs: 3, sm: 4 }, textAlign: 'center' }}>
                    <Typography variant="body2" sx={{ fontSize: { xs: '0.75rem', sm: '0.875rem' } }}>
                        © {new Date().getFullYear()} DWFS UNIR PER 11392 Grupo 9. Todos los derechos reservados.
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
};

export default Footer;




