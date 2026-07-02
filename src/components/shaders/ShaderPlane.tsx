import type { ShaderDefinition } from '../../motions/types'
import { ShaderBackground } from '../r3f/ShaderBackground'

interface ShaderPlaneProps {
  shader: ShaderDefinition
}

export function ShaderPlane({ shader }: ShaderPlaneProps) {
  return <ShaderBackground shaderId={shader.id} />
}