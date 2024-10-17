import '../styles/ContactoHospitalItem.css';

export default function ContactoHospitalItem({ contacto, eliminarContacto }) {


  return (
    <tr className="fila-contacto">
      <td className="celda-nombre">
          <img src="data:image/png;base64,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" alt={contacto.hospital_fK} className="avatar-aviso" />
          <span>{contacto.hospital_fK}</span>
      </td>
      <td>{contacto.tipo}</td>
      <td>{contacto.contacto}</td>
    </tr>
  );
}