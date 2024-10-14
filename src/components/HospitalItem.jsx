import '../styles/HospitalItem.css';

export default function HospitalItem({ hospital, eliminarHospital }) {
  const handleDelete = () => {
    // Llamar a la función de eliminación pasándola el ID del hospital
    if (window.confirm(`¿Estás seguro de que quieres eliminar el hospital ${hospital.nit}?`)) {
      eliminarHospital(hospital.nit);
    }
  };

  return (
    <tr className="fila-hospital">
      <td>{hospital.nit}</td>
      <td>{hospital.nombre}</td>
      <td>{hospital.direccion}</td>
      <td>
        <img
          src="https://static.vecteezy.com/system/resources/previews/000/377/441/non_2x/delete-vector-icon.jpg"
          className="avatar-hospital"
          onClick={handleDelete}
          alt="Eliminar hospital"
          style={{ cursor: 'pointer' }}
        />
      </td>
    </tr>
  );
}
