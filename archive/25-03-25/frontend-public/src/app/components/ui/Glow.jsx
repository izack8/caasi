import { useEffect, useRef } from 'react';

export default function Glow() {
  const ref = useRef(null)

  useEffect(() => {
    const onMouseMove = (e) => {
      const x = e.clientX
      const y = e.clientY
      if (ref.current) {
        ref.current.style.background = `radial-gradient(400px at ${x}px ${y}px, rgba(244, 236, 236, 0.9), transparent 50%)`
      }
    }

    if (ref.current) {
      window.addEventListener('mousemove', onMouseMove)
    }
    return () => {
      window.removeEventListener('mousemove', onMouseMove)
    }
  }, [])

  return (
    <div
      className="pointer-events-none fixed inset-0 -z-1 transition duration-300 glow"
      ref={ref}
    />
  )
}