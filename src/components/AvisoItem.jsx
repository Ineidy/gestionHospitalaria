import '../styles/AvisoItem.css';

export default function AvisoItem({ aviso }) {


  return (
    <tr className="fila-aviso">
      <td>{aviso.hospital_fk}</td>
      <td>{aviso.nombre}</td>
      <td>{aviso.descripcion}</td>
      <td>{aviso.fecha}</td>
      
    </tr>
  );
}
