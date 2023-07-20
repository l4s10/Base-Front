import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Typography, Button, Container, List, ListItem, Card, CardContent, Box } from '@mui/material';
import { styled } from '@mui/system';
import CalendarExample from '../../components/Calendar';

const StyledCard = styled(Card)({
  maxWidth: '800px',  // Establece la anchura máxima de la tarjeta
  margin: '0 auto',  // Centra la tarjeta en el contenedor
});

const Contacto = () => {
  return (
    <div>
      <Head>
        <title>Sección contacto</title>
      </Head>
      <Container maxWidth="md">
        <section>
          <Typography variant="h2">Contacto</Typography>
          <Typography variant="body1">Puedes contactarnos a través de:</Typography>
          <List>
            <ListItem>Teléfono: 123-456-7890</ListItem>
            <ListItem>Correo electrónico: info@example.com</ListItem>
            <ListItem>Formulario de contacto</ListItem>
          </List>
          <Link href="/" passHref>
            <Button variant="contained" color="primary">Volver a index</Button>
          </Link>
        </section>
      </Container>
      <StyledCard>
        <CardContent><CalendarExample /></CardContent>
      </StyledCard>
    </div>
  );
};

export default Contacto;
