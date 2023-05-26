import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { theme } from '../../theme';
import { ThemeProvider } from 'styled-components';

const pages = [
    { label: 'Crear Carta', ref: '/createCard' }, 
    { label: 'Crear Planeta', ref: '/createPlanet' }, 
    { label: 'Crear Baraja', ref: '/createDeck' },
];

const NavBar = () => {

    return (
        <ThemeProvider theme={theme}>
            <AppBar position="static" style={{ background: theme.colors.primary }}>
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href="/play"
                            sx={{
                                mr: 2,
                                display: { xs: 'none', md: 'flex' },
                                fontFamily: theme.typography.fontFamily,
                                fontWeight: 800,
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            Jugar
                        </Typography>

                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                            {pages.map((page) => (
                                <Button
                                    href={page.ref}
                                    key={page.label}
                                    sx={{ my: 2, color: 'white', display: 'block', fontFamily: theme.typography.fontFamily }}
                                >
                                    {page.label}
                                </Button>
                            ))}
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>   
        </ThemeProvider>

    );
};
export default NavBar;
