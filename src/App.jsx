import { useState } from 'react';
import Header from './components/Header';
import ListaDoctores from './components/ListaDoctores';
import ListaPacientes from './components/ListaPacientes';
import './App.css'

export default function App() {
  const [seccionActual, setSeccionActual] = useState('Doctors');

  const cambiarSeccion = (seccion) => {
    setSeccionActual(seccion);
  };

  return (
    <div  className="app-contenedor">
      <Header seccionActual={seccionActual} cambiarSeccion={cambiarSeccion} />
      {seccionActual === 'Doctors' && <ListaDoctores />}
      {seccionActual === 'Patients' && <ListaPacientes />}
      {/* Puedes agregar más secciones aquí */}
    </div>
  );
}
