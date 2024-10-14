import { useState, useEffect } from 'react';
import PacienteItem from './PacienteItem.jsx';
import '../styles/ListaPacientes.css';

export default function ListaPacientes() {
  const [pacientes, setPacientes] = useState([]);
  const [agregandoPaciente, setAgregandoPaciente] = useState(false);

  useEffect(() => {
    const obtenerPacientes = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/pacientes');
        const data = await response.json();
        if (data.status === 200) {
          setPacientes(data.data);
        }
      } catch (error) {
        console.error('Error al obtener los pacientes:', error);
      }
    };

    obtenerPacientes();
  }, []);

  const eliminarPaciente = async (cedula) => {
    try {
      const response = await fetch(`http://localhost:3000/api/paciente/${cedula}`, { method: 'DELETE' });
      const result = await response.json();
      if (response.ok) {
        setPacientes(pacientes.filter(paciente => paciente.cedula !== cedula));
      } else {
        console.error('Error al eliminar el paciente:', result.message);
      }
    } catch (error) {
      console.error('Error en la solicitud de eliminación:', error);
    }
  };

  if (agregandoPaciente) {
    return <FormularioPaciente regresar={() => setAgregandoPaciente(false)} />;
  }

  return (
    <div className="lista-pacientes-contenedor">
      <h2 className="titulo-lista">Lista de Pacientes</h2>
      <button className="boton-agregar-paciente" onClick={() => setAgregandoPaciente(true)}>
        Agregar nuevo paciente
      </button>
      <table className="tabla-pacientes">
        <thead>
          <tr>
            <th>Cedula</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Genero</th>
            <th>Fecha Nacimiento</th>
            <th>Edad</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {pacientes.map(paciente => (
            <PacienteItem key={paciente.cedula} paciente={paciente} eliminarPaciente={eliminarPaciente} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
