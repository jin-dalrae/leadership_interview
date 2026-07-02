import { useEffect, useRef } from 'react'
import { getMotion } from '../motions/registry'
import type { MotionOptions } from '../motions/types'

export function useMotion<T extends HTMLElement = HTMLElement>(
  motionId: string,
  options?: MotionOptions,
  deps: unknown[] = [],
) {
  const ref = useRef<T>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const motion = getMotion(motionId)
    if (!motion) {
      console.warn(`Motion "${motionId}" not found`)
      return
    }

    const result = motion.run(el, options)
    return () => {
      if (typeof result === 'function') result()
      else result?.kill?.()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [motionId, ...deps])

  return ref
}

export function useMotionOnElements(
  motionId: string,
  selector: string,
  containerRef: React.RefObject<HTMLElement | null>,
  options?: MotionOptions,
  deps: unknown[] = [],
) {
  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const motion = getMotion(motionId)
    if (!motion) return

    const elements = [...container.querySelectorAll<HTMLElement>(selector)]
    if (!elements.length) return

    const result = motion.run(elements, options)
    return () => {
      if (typeof result === 'function') result()
      else result?.kill?.()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [motionId, selector, ...deps])
}