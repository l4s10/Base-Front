import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Perros = () => {
    const [dogImage, setDogImage] = useState('');

    useEffect(() => {
        //Definimos la funcion
        const fetchRandomDogImage = async () => {
        try {
            //CONSUMISMO
            const response = await axios.get('https://dog.ceo/api/breeds/image/random');
            //Obtencion de datos
            const imageUrl = response.data.message;
            setDogImage(imageUrl);
            //Debug-> ver si la foto se llamo correctamente
            console.log(imageUrl);
        } catch (error) {
            console.error('Error al obtener la imagen del perro:', error);
        }
        };
        //Llamamos a la funcion.
        fetchRandomDogImage();
    }, []);

    return (
        <div>
            <h1>Imágenes de perros</h1>
            <img src={dogImage} alt="Imagen de Perro procastinada" />
        </div>
    );
};

export default Perros;
