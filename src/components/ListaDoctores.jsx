import { useState, useEffect } from 'react';
import DoctorItem from './DoctorItem';
import FormularioDoctor from './FormularioDoctor.jsx';
import '../styles/ListaDoctores.css';

export default function ListaDoctores() {
  const [doctores, setDoctores] = useState([]);
  const [agregandoDoctor, setAgregandoDoctor] = useState(false);

  useEffect(() => {
    const obtenerDoctores = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/doctores');
        const data = await response.json();
        console.log(data); 
        if (data.status === 200) {
          setDoctores(data.data);
        }
      } catch (error) {
        console.error('Error al obtener los doctores:', error);
      }
    };

    obtenerDoctores(); 
  }, []); 


  const eliminarDoctor = async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/api/doctor/${id}`, { method: 'DELETE' });
      if (response.ok) {
        setDoctores(doctores.filter(doctor => doctor.id !== id));
      } else {
        console.error('Error al eliminar el doctor:', response.status);
      }
    } catch (error) {
      console.error('Error en la solicitud de eliminación:', error);
    }
  };

  if (agregandoDoctor) {
    return <FormularioDoctor regresar={() => setAgregandoDoctor(false)} />;
  }

  return (
    <div className="lista-doctores-contenedor">
      <h2 className="titulo-lista">Lista de doctores</h2>
      <button className="boton-agregar-doctor" onClick={() => setAgregandoDoctor(true)}>
        Agregar nuevo doctor
      </button>
      <table className="tabla-doctores">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>ID</th>
            <th>Fecha Nacimiento</th>
            <th>Género</th>
            <th>Especialidad</th>
            <th>Estado</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {doctores.map(doctor => (
            <DoctorItem key={doctor.id} doctor={doctor} onDelete={eliminarDoctor} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
