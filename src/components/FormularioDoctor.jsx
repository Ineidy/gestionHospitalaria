import React, { useState } from 'react';
import '../styles/FormularioDoctor.css';

export default function FormularioDoctor({ regresar }) {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [telefono, setTelefono] = useState('');
  const [genero, setGenero] = useState('');
  const [especialidad, setEspecialidad] = useState('');
  const [fechaNacimiento, setFechaNacimiento] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const doctorData = {
      nombre_completo: nombre,
      genero,
      especialidad_fk: especialidad,
      fecha_nacimiento: fechaNacimiento,
    };

    const contactoData = [
      { tipo: 'email', contacto: email },
      { tipo: 'telefono', contacto: telefono },
    ].filter((c) => c.contacto); // Filtra contactos vacíos

    try {
      // Enviar datos del doctor al servidor
      const response = await fetch('/api/doctores', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ doctorData, contactoData }),
      });

      const result = await response.json();

      if (result.status === 200) {
        // Doctor agregado correctamente
        console.log('Doctor agregado', result.data);
        regresar(); // Regresar a la vista anterior
      } else {
        console.error('Error al agregar el doctor', result.message);
      }
    } catch (error) {
      console.error('Error de red', error);
    }
  };

  return (
    <div className="formulario-doctor-contenedor">
      <h2>Agregar nuevo doctor</h2>
      <form className="formulario-doctor" onSubmit={handleSubmit}>
        <div className="campo-formulario">
          <label htmlFor="nombre">Nombre Completo</label>
          <input
            type="text"
            id="nombre"
            placeholder="Nombre del doctor"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />
        </div>
        <div className="campo-formulario">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Email del doctor (opcional)"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="campo-formulario">
          <label htmlFor="telefono">Teléfono</label>
          <input
            type="text"
            id="telefono"
            placeholder="Teléfono del doctor (opcional)"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
          />
        </div>        
        <div className="campo-formulario">
          <label htmlFor="genero">Género</label>
          <input
            type="text"
            id="genero"
            placeholder="femenino/masculino"
            value={genero}
            onChange={(e) => setGenero(e.target.value)}
            required
          />
        </div>
        <div className="campo-formulario">
          <label htmlFor="especialidad">Especialidad</label>
          <select
            id="especialidad"
            value={especialidad}
            onChange={(e) => setEspecialidad(e.target.value)}
            required
          >
            <option value="">Seleccionar id de la especialidad</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
        </div>
        <div className="campo-formulario">
          <label htmlFor="fecha-nacimiento">Fecha de nacimiento</label>
          <input
            type="text"
            id="fecha-nacimiento"
            placeholder='ej: 2001-05-14'
            value={fechaNacimiento}
            onChange={(e) => setFechaNacimiento(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="boton-guardar">Guardar</button>
        <button type="button" className="boton-cancelar" onClick={regresar}>Cancelar</button>
      </form>
    </div>
  );
}
