import { useState, useEffect } from 'react';
import ContactoHospitalItem from './ContactoHospitalItem.jsx';
import '../styles/ListaContactosHospital.css';

export default function ListaContactosHospital() {
  const [contactos, setContactos] = useState([]);
  const [agregandoContacto, setAgregandoContacto] = useState(false);

  useEffect(() => {
    const obtenerContactos = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/contactos');
        const data = await response.json();
        if (data.status === 200) {
          setContactos(data.data);
        }
      } catch (error) {
        console.error('Error al obtener los contactos:', error);
      }
    };

    obtenerContactos();
  }, []);

  const eliminarContacto = async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/api/contactos_hospital/${id}`, { method: 'DELETE' });
      const result = await response.json();
      if (response.ok) {
        setContactos(contactos.filter(contacto => contacto.id !== id));
      } else {
        console.error('Error al eliminar el contacto:', result.message);
      }
    } catch (error) {
      console.error('Error en la solicitud de eliminación:', error);
    }
  };

  if (agregandoContacto) {
    return <FormularioContactoHospital regresar={() => setAgregandoContacto(false)} />;
  }

  return (
    <div className="lista-contactos-contenedor">
      <h2 className="titulo-lista">Lista de Contactos de Hospitales</h2>
      <button className="boton-agregar-contacto" onClick={() => setAgregandoContacto(true)}>
        Agregar nuevo contacto
      </button>
      <table className="tabla-contactos">
        <thead>
          <tr>
            <th>Nit Hospital</th>
            <th>Tipo</th>
            <th>Contacto</th>
          </tr>
        </thead>
        <tbody>
          {contactos.map(contacto => (
            <ContactoHospitalItem key={contacto.id} contacto={contacto} eliminarContacto={eliminarContacto} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
