import '../styles/PacienteItem.css';

export default function PacienteItem({ paciente, eliminarPaciente }) {
    const handleDelete = () => {
        // Llamar a la función de eliminación pasándola el ID del doctor
        if (window.confirm(`¿Estás seguro de que quieres eliminar a ${paciente.cedula}?`)) {
            eliminarPaciente(paciente.cedula);
        }
      };

  return (
    <tr className="fila-paciente">
      <td>{paciente.cedula}</td>
      <td > {paciente.nombre}</td>
      <td > {paciente.apellido}</td>
      <td>{paciente.genero}</td>
      <td>{paciente.fecha_nacimiento}</td>
      <td>{paciente.edad}</td>
      <td>
        <img
          src="https://static.vecteezy.com/system/resources/previews/000/377/441/non_2x/delete-vector-icon.jpg"
          className="avatar-paciente" 
          onClick={handleDelete} 
          alt="Eliminar paciente" 
          style={{ cursor: 'pointer' }} 
        />
      </td>
    </tr>
  );
}
