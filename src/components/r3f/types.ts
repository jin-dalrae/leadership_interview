import type { ReactNode } from 'react'

export type ShaderPageMode = 'layered' | 'immersive'

export interface ShaderPageProps {
  shaderId: string
  children: ReactNode
  mode?: ShaderPageMode
  height?: string | number
  minHeight?: string | number
  className?: string
  contentClassName?: string
  align?: 'center' | 'start' | 'end'
  motionId?: string
  shaderOpacity?: number
  darkShader?: boolean
  id?: string
}

export interface PageSectionConfig {
  id: string
  shaderId: string
  mode?: ShaderPageMode
  height?: string | number
}