import { useState, useEffect } from 'react';
import HospitalItem from './HospitalItem.jsx';
import '../styles/ListaHospitales.css';

export default function ListaHospitales() {
  const [hospitales, setHospitales] = useState([]);
  const [agregandoHospital, setAgregandoHospital] = useState(false);

  useEffect(() => {
    const obtenerHospitales = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/hospitales');
        const data = await response.json();
        if (data.status === 200) {
          setHospitales(data.data);
        }
      } catch (error) {
        console.error('Error al obtener los hospitales:', error);
      }
    };

    obtenerHospitales();
  }, []);

  const eliminarHospital = async (nit) => {
    try {
      const response = await fetch(`http://localhost:3000/api/hospital/${nit}`, { method: 'DELETE' });
      const result = await response.json();
      if (response.ok) {
        setHospitales(hospitales.filter(hospital => hospital.nit !== nit));
      } else {
        console.error('Error al eliminar el hospital:', result.message);
      }
    } catch (error) {
      console.error('Error en la solicitud de eliminación:', error);
    }
  };

  if (agregandoHospital) {
    return <FormularioHospital regresar={() => setAgregandoHospital(false)} />;
  }

  return (
    <div className="lista-hospitales-contenedor">
      <h2 className="titulo-lista">Lista de Hospitales</h2>
      <button className="boton-agregar-hospital" onClick={() => setAgregandoHospital(true)}>
        Agregar nuevo hospital
      </button>
      <table className="tabla-hospitales">
        <thead>
          <tr>
            <th>Nit</th>
            <th>Nombre</th>
            <th>Ubicación</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {hospitales.map(hospital => (
            <HospitalItem key={hospital.nit} hospital={hospital} eliminarHospital={eliminarHospital} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
