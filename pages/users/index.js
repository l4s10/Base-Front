import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Usuarios = () => {
    const [usuarios, setUsuarios] = useState([]);
    const urlAPIUsuarios = 'http://localhost:8000/api/users';

    useEffect(() => {
        const fetchUsuarios = async () => {
        try {
            const response = await axios.get(urlAPIUsuarios, {
            headers: {
                Token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0M2RkOWM4NTliM2I5MTYyZGViZWZmZSIsImlhdCI6MTY4OTA0ODY4MiwiZXhwIjoxNjg5MTM1MDgyfQ.Qomm7ZNG_DogZ6PCx41Mn6uLjZMnY5jkMpBOxHtT2fM",
            },
            });
            setUsuarios(response.data.data);
            console.log('Usuarios:', response.data.data);
        } catch (error) {
            console.log('Error al cargar los usuarios.', error);
        }
        };

        fetchUsuarios();
    }, []);

    return (
        <div className="container mt-5">
        <h1 className="mb-4 text-center">Lista de Usuarios</h1>
        <ul className="list-group">
            {usuarios.map((usuario) => (
            <li key={usuario._id} className="list-group-item">
                <strong>Nombre:</strong> {usuario.name}
                <br />
                <strong>Email:</strong> {usuario.email}
            </li>
            ))}
        </ul>
        </div>
    );
};

export default Usuarios;
