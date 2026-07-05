import { useFrame, useLoader } from '@react-three/fiber'
import { useRef } from 'react'
import * as THREE from 'three'
import { PageCanvas } from '../r3f/PageCanvas'
import artworkSrc from '../../assets/interview/closing-red-alive.png'
import fragmentShader from '../../shaders/closing-red-alive.frag.glsl'
import vertexShader from '../../shaders/vertex.vert.glsl'

function RedAliveMesh() {
  const materialRef = useRef<THREE.ShaderMaterial>(null)
  const texture = useLoader(THREE.TextureLoader, artworkSrc)

  useFrame((state) => {
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value = state.clock.elapsedTime
    }
  })

  return (
    <mesh>
      <planeGeometry args={[2, 2]} />
      <shaderMaterial
        ref={materialRef}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={{
          uTime: { value: 0 },
          uTexture: { value: texture },
          uResolution: { value: new THREE.Vector2(1, 1) },
        }}
      />
    </mesh>
  )
}

export function ClosingArtBackground() {
  return (
    <PageCanvas className="closing-art-bg">
      <RedAliveMesh />
    </PageCanvas>
  )
}
