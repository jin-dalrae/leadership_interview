import { useFrame, useThree } from '@react-three/fiber'
import { useMemo, useRef } from 'react'
import * as THREE from 'three'
import { getShader } from '../../shaders/registry'

interface ShaderBackgroundProps {
  shaderId: string
  scrollProgress?: number
  opacity?: number
  paused?: boolean
}

export function ShaderBackground({
  shaderId,
  scrollProgress = 0,
  opacity = 1,
  paused = false,
}: ShaderBackgroundProps) {
  const meshRef = useRef<THREE.Mesh>(null)
  const { size, pointer } = useThree()
  const mouse = useRef(new THREE.Vector2(0.5, 0.5))
  const shader = getShader(shaderId)

  const material = useMemo(() => {
    if (!shader) return null

    const uniforms: Record<string, THREE.IUniform> = {
      uTime: { value: 0 },
      uMouse: { value: new THREE.Vector2(0.5, 0.5) },
      uResolution: { value: new THREE.Vector2(size.width, size.height) },
      uScrollProgress: { value: 0 },
    }

    return new THREE.ShaderMaterial({
      vertexShader: shader.vertex ?? '',
      fragmentShader: shader.fragment,
      uniforms,
      transparent: shader.id === 'glass-refraction' || opacity < 1,
      depthWrite: false,
    })
  }, [shader, size.width, size.height, opacity])

  useFrame((state) => {
    if (!material || paused) return

    material.uniforms.uTime.value = state.clock.elapsedTime
    material.uniforms.uScrollProgress.value = scrollProgress
    mouse.current.x += (pointer.x * 0.5 + 0.5 - mouse.current.x) * 0.08
    mouse.current.y += (-pointer.y * 0.5 + 0.5 - mouse.current.y) * 0.08
    material.uniforms.uMouse.value.copy(mouse.current)
    material.uniforms.uResolution.value.set(size.width, size.height)
    material.opacity = opacity
  })

  if (!material) return null

  return (
    <mesh ref={meshRef} position={[0, 0, 0]}>
      <planeGeometry args={[2, 2]} />
      <primitive object={material} attach="material" />
    </mesh>
  )
}