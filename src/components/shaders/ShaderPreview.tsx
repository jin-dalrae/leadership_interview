import { Canvas } from '@react-three/fiber'
import { getShader } from '../../shaders/registry'
import { ShaderPlane } from './ShaderPlane'

interface ShaderPreviewProps {
  shaderId: string
  className?: string
}

export function ShaderPreview({ shaderId, className }: ShaderPreviewProps) {
  const shader = getShader(shaderId)
  if (!shader) return null

  return (
    <div className={className ?? 'shader-preview'}>
      <Canvas
        camera={{ position: [0, 0, 1] }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 2]}
      >
        <ShaderPlane shader={shader} />
      </Canvas>
    </div>
  )
}