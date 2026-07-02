import { defineMotion } from '../utils/helpers'
import type { MotionDefinition } from '../types'
import { shaderRegistry } from '../../shaders/registry'

export const shaderMotions: MotionDefinition[] = shaderRegistry.map((shader) =>
  defineMotion({
    id: shader.id,
    name: shader.name,
    category: 'shader',
    description: shader.description,
    tags: shader.tags,
    run: (target) => {
      const el = Array.isArray(target) ? target[0] : target
      el.dataset.shader = shader.id
      el.dataset.shaderActive = 'true'
      return () => {
        delete el.dataset.shader
        delete el.dataset.shaderActive
      }
    },
  }),
)