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
                Token: process.env.NEXT_PUBLIC_TOKEN,
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
