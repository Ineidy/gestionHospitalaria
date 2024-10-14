import '../styles/ContactoHospitalItem.css';

export default function ContactoHospitalItem({ contacto, eliminarContacto }) {


  return (
    <tr className="fila-contacto">
      <td>{contacto.hospital_fK}</td>
      <td>{contacto.tipo}</td>
      <td>{contacto.contacto}</td>
    </tr>
  );
}
