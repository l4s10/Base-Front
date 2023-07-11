import React from 'react';
import TituloGracioso from '../../components/Titulo';

const Contacto = () => {
  return (
    <div>
      <title>Seccion contacto</title>
        <section>
          <TituloGracioso></TituloGracioso>
            <h2>Contacto</h2>
            <p>Puedes contactarnos a través de:</p>
            <ul>
            <li>Teléfono: 123-456-7890</li>
            <li>Correo electrónico: info@example.com</li>
            <li>Formulario de contacto</li>
            </ul>
            <a href='/' className='btn btn-primary'>Volver a index</a>
        </section>
    </div>
  );
};

export default Contacto;
