export type MotionCategory =
  | 'text'
  | 'scroll'
  | 'entrance'
  | 'stagger'
  | 'interactive'
  | 'ambient'
  | 'shader'

export interface MotionOptions {
  duration?: number
  delay?: number
  ease?: string
  stagger?: number
  scrollTrigger?: object
  [key: string]: unknown
}

export type MotionRunner = (
  target: HTMLElement | HTMLElement[],
  options?: MotionOptions,
) => { kill?: () => void } | (() => void)

export interface MotionDefinition {
  id: string
  name: string
  category: MotionCategory
  description: string
  tags: string[]
  run: MotionRunner
}

export interface ShaderDefinition {
  id: string
  name: string
  description: string
  tags: string[]
  fragment: string
  vertex?: string
  uniforms?: Record<string, { value: unknown }>
}