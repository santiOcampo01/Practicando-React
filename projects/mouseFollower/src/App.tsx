import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [enabled, setEnabled] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    console.log('enabled', { enabled })

    const handleMove = (evento: MouseEvent) => {
      const { clientX, clientY } = evento
      console.log('e', { clientX, clientY })
      setPosition({ x: clientX, y: clientY })
    }

    if (enabled) {
      window.addEventListener('mousemove', handleMove)
    }

    return () => {
      window.removeEventListener('mousemove', handleMove)
    }
  }, [enabled])

  return (
    <main>
      <div
        style={{
          position: 'absolute',
          backgroundColor: '#09f',
          borderRadius: '50%',
          opacity: 0.8,
          pointerEvents: 'none',
          left: -20,
          top: -20,
          width: 40,
          height: 40,
          transform: `translate(${position.x}px, ${position.y}px)`,
        }}
      />
      <h3>Proyecto 3</h3>
      <button
        onClick={() => {
          setEnabled(!enabled)
        }}
      >
        {enabled ? 'Desactivar' : 'Activar'}
        seguir Boton
      </button>
    </main>
  )
}

export default App
