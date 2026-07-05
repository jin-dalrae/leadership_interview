import { useEffect, useRef, type RefObject } from 'react'
import { gsap } from '../../lib/gsap'
import type { WritingScroll, WritingScrollOptions } from './types'

const PRESETS: Record<
  Exclude<WritingScroll, 'none'>,
  WritingScrollOptions
> = {
  tilt: { rotateX: [8, -6], y: [24, -24] },
  rotate: { rotate: [-4, 5] },
  drift: { x: [-18, 18], y: [32, -32] },
  skew: { skew: [-2, 3], x: [-8, 8] },
  rise: { y: [60, -20], rotate: [-1, 2] },
}

export function useWritingScroll(
  scroll: WritingScroll,
  options?: WritingScrollOptions,
  sectionRef?: RefObject<HTMLElement | null>,
) {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = ref.current
    const trigger = sectionRef?.current
    console.log('[useWritingScroll]', { scroll, hasEl: !!el, hasTrigger: !!trigger })
    if (!el || !trigger || scroll === 'none') return
    console.log('[useWritingScroll] tween created for', scroll)

    const preset = PRESETS[scroll]
    const rotate = options?.rotate ?? preset.rotate
    const rotateX = options?.rotateX ?? preset.rotateX
    const y = options?.y ?? preset.y
    const x = options?.x ?? preset.x
    const skew = options?.skew ?? preset.skew

    const fromVars: Record<string, number> = {}
    const toVars: Record<string, number | string> = { ease: 'none' }

    if (rotate) {
      fromVars.rotate = rotate[0]
      toVars.rotate = rotate[1]
    }
    if (rotateX) {
      el.style.transformOrigin = '50% 100%'
      fromVars.rotateX = rotateX[0]
      toVars.rotateX = rotateX[1]
    }
    if (y) {
      fromVars.y = y[0]
      toVars.y = y[1]
    }
    if (x) {
      fromVars.x = x[0]
      toVars.x = x[1]
    }
    if (skew) {
      fromVars.skewY = skew[0]
      toVars.skewY = skew[1]
    }

    const tween = gsap.fromTo(el, fromVars, {
      ...toVars,
      scrollTrigger: {
        trigger,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 0.8,
      },
    })

    return () => {
      tween.kill()
    }
  }, [scroll, options, sectionRef])

  return ref
}