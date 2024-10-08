import '../styles/DoctorItem.css'

export default function DoctorItem({ doctor }) {
  return (
    <tr className="fila-doctor">
      <td className="celda-nombre">
        <img src="/placeholder.svg" alt={doctor.nombre} className="avatar-doctor" />
        <span>{doctor.nombre}</span>
      </td>
      <td>{doctor.id}</td>
      <td>{doctor.email}</td>
      <td>{doctor.telefono}</td>
      <td>{doctor.fechaAgregado}</td>
      <td>
        <span className={`estado-doctor ${doctor.estado.toLowerCase()}`}>
          {doctor.estado}
        </span>
      </td>
    </tr>
  )
}