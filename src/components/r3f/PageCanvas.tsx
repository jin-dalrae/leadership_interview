import { Canvas } from '@react-three/fiber'
import type { ReactNode } from 'react'

interface PageCanvasProps {
  children: ReactNode
  active?: boolean
  className?: string
  cameraZ?: number
}

export function PageCanvas({
  children,
  active = true,
  className,
  cameraZ = 1,
}: PageCanvasProps) {
  return (
    <div className={className ?? 'page-canvas'}>
      <Canvas
        camera={{ position: [0, 0, cameraZ], fov: 75 }}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        dpr={[1, 1.5]}
        frameloop={active ? 'always' : 'demand'}
        style={{ pointerEvents: 'none' }}
      >
        {children}
      </Canvas>
    </div>
  )
}