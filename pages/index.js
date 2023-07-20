import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Typography, Button, Container, AppBar, Toolbar, Card, CardContent, Dialog, DialogTitle, DialogContent, DialogActions, Box } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../styles/theme';

const Home = () => {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <ThemeProvider theme={theme}>
            <div>
                <Head>
                    <title>Brigadistas Unidos</title>
                    <meta name="description" content="Somos una organización de brigadistas dedicada a ayudar en tiempos de crisis." />
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            Brigadistas Unidos
                        </Typography>
                        <Button color="inherit" onClick={handleClickOpen}>Acerca de</Button>
                    </Toolbar>
                </AppBar>
                <Box sx={{ mt: 4 }}>
                    <Container maxWidth="md">
                        <Typography variant="h2" component="h1" gutterBottom>
                            Bienvenidos a Brigadistas Unidos
                        </Typography>
                        <section>
                            <Card sx={{ mt: 4 }}>
                                <CardContent>
                                  <Typography variant="h5" gutterBottom>
                                      ¿Quienes somos?
                                  </Typography>
                                  <Typography variant="body1" gutterBottom>
                                  Somos una organización de brigadistas, enfocada en brindar ayuda en tiempos de crisis. Nuestro equipo está siempre listo para actuar y proporcionar ayuda cuando más se necesita.
                                  </Typography>
                                  <Typography variant="h5" gutterBottom>
                                      ¿Cómo podemos ayudarte?
                                  </Typography>
                                    <Button variant="contained" color="primary" size="large" sx={{ mr: 2 }}>
                                        Quiero unirme
                                    </Button>
                                    <Button variant="outlined" color="secondary" size="large">
                                        Necesito ayuda
                                    </Button>
                                </CardContent>
                            </Card>
                            <Card sx={{ mt: 4 }}>
                                <CardContent>
                                    <Typography variant="h5" component="div">
                                        Nuestros valores
                                    </Typography>
                                    <Typography variant="body2">
                                        Creemos en la unidad, la solidaridad y la ayuda mutua. Trabajamos duro para asegurar que nadie se quede atrás en tiempos de crisis.
                                    </Typography>
                                </CardContent>
                            </Card>
                            <Link href="/contacto">
                                <Button variant="contained" color="primary" sx={{ mt: 4 }}>
                                    Contáctanos
                                </Button>
                            </Link>
                        </section>
                    </Container>
                </Box>
                <Dialog onClose={handleClose} open={open}>
                    <DialogTitle>Acerca de</DialogTitle>
                    <DialogContent>
                        <Typography gutterBottom>
                            Brigadistas Unidos es una organización de voluntarios comprometidos a ayudar a las personas en tiempos de crisis. Desde desastres naturales hasta emergencias de salud, estamos aquí para ayudar.
                        </Typography>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose}>Cerrar</Button>
                    </DialogActions>
                </Dialog>
            </div>
        </ThemeProvider>
    );
};

export default Home;
