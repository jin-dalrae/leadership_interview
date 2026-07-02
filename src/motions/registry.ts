import { ambientMotions } from './ambient'
import { entranceMotions } from './entrance'
import { interactiveMotions } from './interactive'
import { scrollMotions } from './scroll'
import { shaderMotions } from './shader'
import { staggerMotions } from './stagger'
import { textMotions } from './text'
import type { MotionCategory, MotionDefinition } from './types'

export const motionRegistry: MotionDefinition[] = [
  ...textMotions,
  ...scrollMotions,
  ...entranceMotions,
  ...staggerMotions,
  ...interactiveMotions,
  ...ambientMotions,
  ...shaderMotions,
]

export const motionCount = motionRegistry.length

export function getMotion(id: string): MotionDefinition | undefined {
  return motionRegistry.find((m) => m.id === id)
}

export function getMotionsByCategory(category: MotionCategory): MotionDefinition[] {
  return motionRegistry.filter((m) => m.category === category)
}

export const motionCategories: { id: MotionCategory; label: string; count: number }[] = [
  { id: 'text', label: 'Text', count: textMotions.length },
  { id: 'scroll', label: 'Scroll', count: scrollMotions.length },
  { id: 'entrance', label: 'Entrance', count: entranceMotions.length },
  { id: 'stagger', label: 'Stagger', count: staggerMotions.length },
  { id: 'interactive', label: 'Interactive', count: interactiveMotions.length },
  { id: 'ambient', label: 'Ambient', count: ambientMotions.length },
  { id: 'shader', label: 'Shader', count: shaderMotions.length },
]