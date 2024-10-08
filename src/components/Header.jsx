import { useState, useEffect } from 'react'
import '../styles/Header.css'

export default function Header({ seccionActual, cambiarSeccion }) {
  const [animando, setAnimando] = useState(false)

  useEffect(() => {
    setAnimando(true)
    const timer = setTimeout(() => setAnimando(false), 500)
    return () => clearTimeout(timer)
  }, [seccionActual])

  return (
    <header className="cabecera">
      <nav className="navegacion">
        {['Users', 'Patients', 'Hospitals', 'Notice', 'Help Center'].map((seccion) => (
          <button
            key={seccion}
            className={`boton-nav ${seccionActual === seccion ? 'activo' : ''} ${animando ? 'animando' : ''}`}
            onClick={() => cambiarSeccion(seccion)}
          >
            {seccion}
          </button>
        ))}
      </nav>
    </header>
  )
}