import './App.css'
import { useLayoutEffect, useRef } from 'react'
import Core from '@mowa/core'

function App() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  useLayoutEffect(() => {
    const canvas = canvasRef.current
    if (canvas) {
      new Core(canvas)
    }
  })
  return (
    <>
      <canvas ref={canvasRef} className="w-svw h-svh" />
    </>
  )
}

export default App
