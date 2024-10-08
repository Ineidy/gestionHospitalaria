import { useState } from 'react'
import Header from './components/Header'
import ListaDoctores from './components/ListaDoctores'
import './App.css'

export default function App() {
  const [seccionActual, setSeccionActual] = useState('Users')

  return (
    <div className="app-contenedor">
      <Header seccionActual={seccionActual} cambiarSeccion={setSeccionActual} />
      <main className="contenido-principal">
        <ListaDoctores />
      </main>
    </div>
  )
}