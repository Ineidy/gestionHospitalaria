import React, { useState } from 'react';
import '../styles/FormularioDoctor.css';

export default function FormularioDoctor({ regresar }) {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [telefono, setTelefono] = useState('');
  const [genero, setGenero] = useState('');
  const [especialidad, setEspecialidad] = useState('');
  const [fechaNacimiento, setFechaNacimiento] = useState('');

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!nombre) newErrors.nombre = 'El nombre es obligatorio';
    
    if (email && !/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'El email no es válido';
    }
    if (telefono && !/^\d{7,14}$/.test(telefono)) {
      newErrors.telefono = 'El teléfono debe contener entre 7 y 14 dígitos';
    }
    if (!genero || (genero !== 'femenino' && genero !== 'masculino')) {
      newErrors.genero = 'El género debe ser femenino o masculino';
    }
    if (!especialidad) {
      newErrors.especialidad = 'La especialidad es obligatoria';
    }
    if (!fechaNacimiento || !/^\d{4}-\d{2}-\d{2}$/.test(fechaNacimiento)) {
      newErrors.fechaNacimiento = 'La fecha de nacimiento debe ser en formato AAAA-MM-DD';
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    const doctorData = {
      nombre_completo: nombre,
      genero,
      especialidad_fk: especialidad,
      fecha_nacimiento: fechaNacimiento,
    };

    const contactoData = [
      { tipo: 'email', contacto: email },
      { tipo: 'telefono', contacto: telefono },
    ].filter((c) => c.contacto);

    try {
      const response = await fetch('http://localhost:3000/api/doctor', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ doctorData, contactoData }),
      });

      const result = await response.json();

      if (result.status === 200) {
        console.log('Doctor agregado', result.data);
        regresar();
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
          {errors.nombre && <p className="error">{errors.nombre}</p>}
        </div>
        <div className="campo-formulario">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            placeholder="Email del doctor (opcional)"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <p className="error">{errors.email}</p>}
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
          {errors.telefono && <p className="error">{errors.telefono}</p>}
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
          {errors.genero && <p className="error">{errors.genero}</p>}
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
          {errors.especialidad && <p className="error">{errors.especialidad}</p>}
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
          {errors.fechaNacimiento && <p className="error">{errors.fechaNacimiento}</p>}
        </div>
        <button type="submit" className="boton-guardar">Guardar</button>
        <button type="button" className="boton-cancelar" onClick={regresar}>Cancelar</button>
      </form>
    </div>
  );
}
