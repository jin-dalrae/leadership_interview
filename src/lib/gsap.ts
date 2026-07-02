import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export { gsap, ScrollTrigger }

export const motionEase = {
  smooth: 'power3.out',
  snap: 'power4.inOut',
  elastic: 'elastic.out(1, 0.5)',
  bounce: 'back.out(1.7)',
  editorial: 'power2.inOut',
} as const

export function prefersReducedMotion(): boolean {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

export function motionDuration(base: number): number {
  return prefersReducedMotion() ? 0.01 : base
}