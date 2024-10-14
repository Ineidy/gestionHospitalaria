import { useState, useEffect } from 'react';
import AvisoItem from './AvisoItem.jsx';
import '../styles/ListaAvisos.css';

export default function ListaAvisos() {
  const [avisos, setAvisos] = useState([]);
  const [agregandoAviso, setAgregandoAviso] = useState(false);

  useEffect(() => {
    const obtenerAvisos = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/avisos');
        const data = await response.json();
        if (data.status === 200) {
          setAvisos(data.data);
        }
      } catch (error) {
        console.error('Error al obtener los avisos:', error);
      }
    };

    obtenerAvisos();
  }, []);

  const eliminarAviso = async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/api/avisos/${id}`, { method: 'DELETE' });
      const result = await response.json();
      if (response.ok) {
        setAvisos(avisos.filter(aviso => aviso.id !== id));
      } else {
        console.error('Error al eliminar el aviso:', result.message);
      }
    } catch (error) {
      console.error('Error en la solicitud de eliminación:', error);
    }
  };

  if (agregandoAviso) {
    return <FormularioAviso regresar={() => setAgregandoAviso(false)} />;
  }

  return (
    <div className="lista-avisos-contenedor">
      <h2 className="titulo-lista">Lista de Avisos</h2>
      <button className="boton-agregar-aviso" onClick={() => setAgregandoAviso(true)}>
        Agregar nuevo aviso
      </button>
      <table className="tabla-avisos">
        <thead>
          <tr>
            <th>Nit Hospital</th>
            <th>Título</th>
            <th>Contenido</th>
            <th>Fecha</th>
          </tr>
        </thead>
        <tbody>
          {avisos.map(aviso => (
            <AvisoItem key={aviso.id} aviso={aviso} eliminarAviso={eliminarAviso} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
