import '../styles/FormularioDoctor.css'

export default function FormularioDoctor({ regresar }) {
  return (
    <div className="formulario-doctor-contenedor">
      <h2>Agregar nuevo doctor</h2>
      <form className="formulario-doctor">
        <div className="campo-formulario">
          <label htmlFor="tipo-usuario">Tipo de usuario</label>
          <select id="tipo-usuario">
            <option value="">Seleccionar tipo de usuario</option>
            <option value="doctor">Doctor</option>
            <option value="enfermera">Enfermera</option>
          </select>
        </div>
        <div className="campo-formulario">
          <label htmlFor="nombre">Nombre</label>
          <input type="text" id="nombre" placeholder="Nombre del doctor" />
        </div>
        <div className="campo-formulario">
          <label htmlFor="apellido">Apellido</label>
          <input type="text" id="apellido" placeholder="Apellido del doctor" />
        </div>
        <div className="campo-formulario">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Email del doctor" />
        </div>
        <div className="campo-formulario">
          <label htmlFor="telefono">Teléfono</label>
          <input type="text" id="telefono" placeholder="Teléfono del doctor" />
        </div>
        <div className="campo-formulario">
          <label htmlFor="fecha-nacimiento">Fecha de nacimiento</label>
          <input type="date" id="fecha-nacimiento" />
        </div>
        <button type="submit" className="boton-guardar">Guardar</button>
        <button type="button" className="boton-cancelar" onClick={regresar}>Cancelar</button>
      </form>
    </div>
  )
}
