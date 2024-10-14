import { useState } from 'react';
import Header from './components/Header';
import ListaDoctores from './components/ListaDoctores';
import ListaPacientes from './components/ListaPacientes';
import './App.css'
import ListaHospitales from './components/ListaHospitales';
import ListaAvisos from './components/ListaAvisos';

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
      {seccionActual === 'Hospitals' && <ListaHospitales />}
      {seccionActual === 'Notice' && <ListaAvisos />}
    </div>
  );
}
