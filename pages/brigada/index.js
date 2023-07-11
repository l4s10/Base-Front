import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { format } from 'date-fns';

import Usuarios from '../users';

const Asistencia = () => {
    const [asistencias, setAsistencias] = useState([]);
    const [usuarios, setUsuarios] = useState([]);
    const urlAPI = "http://localhost:8000/api/asistencias/";

    useEffect(() => {
        const fetchAsistencias = async () => {
            try {
                const response = await axios.get(urlAPI);
                const attendances = response.data.attendances;

                // Ordenar los datos por fecha en orden descendente
                const sortedAttendances = attendances.sort((a, b) => {
                    return new Date(b.date) - new Date(a.date);
                });

                setAsistencias(sortedAttendances);
                console.log("ASISTENCIAS", sortedAttendances);
            } catch (error) {
                console.log("Error al cargar asistencias.", error);
            }
        };

        const fetchUsuarios = async () => {
            try {
                const response = await axios.get("http://localhost:8000/api/users", {
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

        fetchAsistencias();
        fetchUsuarios();
    }, []);

    // Obtener el nombre del brigadista por ID
    const getBrigadistaName = (brigadistaId) => {
        const brigadista = usuarios.find((usuario) => usuario._id === brigadistaId);
        return brigadista ? brigadista.name : '';
    };

    return (
        <div className="container mt-5">
            <h1 className="mb-4 text-center">Lista de asistencias</h1>
            <a href='/brigada/ingresar' className='btn btn-secondary'>Ingresar nueva asistencia</a>
            {asistencias.map((asistencia) => (
                <div key={asistencia._id} className="card mb-3">
                    <div className="card-body">
                        <h5 className="card-title">Brigadista: {getBrigadistaName(asistencia.brigadista)}</h5>
                        <p className="card-text">Fecha: {format(new Date(asistencia.date), 'dd/MM/yyyy')}</p>
                        <p className="card-text">Tipo de marca: {asistencia.markType}</p>
                    </div>
                </div>
            ))}
            <Usuarios />
        </div>
    );
};

export default Asistencia;
