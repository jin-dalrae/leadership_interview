import { gsap } from '../../lib/gsap'
import type { MotionDefinition, MotionOptions, MotionRunner } from '../types'

export function toElements(
  target: HTMLElement | HTMLElement[],
): HTMLElement[] {
  return Array.isArray(target) ? target : [target]
}

export function defineMotion(
  partial: Omit<MotionDefinition, 'run'> & { run: MotionRunner },
): MotionDefinition {
  return partial
}

export function fadeFrom(
  y = 40,
  x = 0,
  opts: { duration?: number; ease?: string } = {},
) {
  return (target: HTMLElement | HTMLElement[], options: MotionOptions = {}) => {
    const els = toElements(target)
    return gsap.from(els, {
      opacity: 0,
      y,
      x,
      duration: options.duration ?? opts.duration ?? 0.8,
      ease: options.ease ?? opts.ease ?? 'power3.out',
      stagger: options.stagger ?? 0.05,
      delay: options.delay,
      scrollTrigger: options.scrollTrigger,
    })
  }
}

const CHARSET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%'

export function scrambleText(
  element: HTMLElement,
  finalText: string,
  duration = 1.2,
): gsap.core.Tween {
  const proxy = { progress: 0 }
  const length = finalText.length

  return gsap.to(proxy, {
    progress: 1,
    duration,
    ease: 'power2.out',
    onUpdate: () => {
      const revealCount = Math.floor(proxy.progress * length)
      const scrambled = [...finalText]
        .map((char, i) => {
          if (char === ' ') return ' '
          if (i < revealCount) return finalText[i]
          return CHARSET[Math.floor(Math.random() * CHARSET.length)]
        })
        .join('')
      element.textContent = scrambled
    },
    onComplete: () => {
      element.textContent = finalText
    },
  })
}