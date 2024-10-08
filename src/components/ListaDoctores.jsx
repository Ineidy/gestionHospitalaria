import { useState, useEffect } from 'react'
import DoctorItem from './DoctorItem'
import '../styles/ListaDoctores.css'

export default function ListaDoctores() {
  const [doctores, setDoctores] = useState([])

  useEffect(() => {
    setDoctores([
      { id: '87364523', nombre: 'Brooklyn Simmons', email: 'brooklyns@mail.com', telefono: '(603) 555-0123', fechaAgregado: '21/12/2022', estado: 'Aprobado' },
      { id: '93874563', nombre: 'Kristin Watson', email: 'kristinw@mail.com', telefono: '(219) 555-0114', fechaAgregado: '22/12/2022', estado: 'Rechazado' },
    ])
  }, [])

  return (
    <div className="lista-doctores-contenedor">
      <h2 className="titulo-lista">Lista de doctores</h2>
      <button className="boton-agregar-doctor">Agregar nuevo doctor</button>
      <table className="tabla-doctores">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>ID</th>
            <th>Email</th>
            <th>Número de teléfono</th>
            <th>Fecha agregado</th>
            <th>ESTADO</th>
          </tr>
        </thead>
        <tbody>
          {doctores.map(doctor => (
            <DoctorItem key={doctor.id} doctor={doctor} />
          ))}
        </tbody>
      </table>
    </div>
  )
}