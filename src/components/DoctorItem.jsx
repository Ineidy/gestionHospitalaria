import '../styles/DoctorItem.css';

export default function DoctorItem({ doctor, onDelete }) {
  const handleDelete = () => {
    // Llamar a la función de eliminación pasándola el ID del doctor
    if (window.confirm(`¿Estás seguro de que quieres eliminar a ${doctor.nombre_completo}?`)) {
      onDelete(doctor.id);
    }
  };

  return (
    <tr className="fila-doctor">
      <td className="celda-nombre">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpvxH_2bycXE-UuNXEY_yXMWEqpUuHCU4CZQ&s" alt={doctor.nombre_completo} className="avatar-doctor" />
        <span>{doctor.nombre_completo}</span>
      </td>
      <td>{doctor.id}</td>
      <td>{doctor.fecha_nacimiento}</td>
      <td>{doctor.genero}</td>
      <td>{doctor.especialidad_fk}</td>
      <td>{doctor.estado}</td>
      <td>
        <img 
          src="https://static.vecteezy.com/system/resources/previews/000/377/441/non_2x/delete-vector-icon.jpg" 
          className="avatar-doctor" 
          onClick={handleDelete} 
          alt="Eliminar doctor" 
          style={{ cursor: 'pointer' }} 
        /> 
      </td>
    </tr>
  );
}
