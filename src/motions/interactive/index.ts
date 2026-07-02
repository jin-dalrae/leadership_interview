import { gsap, motionDuration } from '../../lib/gsap'
import { defineMotion, toElements } from '../utils/helpers'
import type { MotionDefinition } from '../types'

export const interactiveMotions: MotionDefinition[] = [
  defineMotion({
    id: 'magnetic',
    name: 'Magnetic',
    category: 'interactive',
    description: 'Element subtly follows cursor within magnetic field.',
    tags: ['interactive', 'cursor', 'hover'],
    run: (target, options = {}) => {
      const el = toElements(target)[0]
      const strength = (options.strength as number) ?? 0.35

      const onMove = (e: MouseEvent) => {
        const rect = el.getBoundingClientRect()
        const x = e.clientX - (rect.left + rect.width / 2)
        const y = e.clientY - (rect.top + rect.height / 2)
        gsap.to(el, {
          x: x * strength,
          y: y * strength,
          duration: 0.4,
          ease: 'power2.out',
        })
      }
      const onLeave = () => gsap.to(el, { x: 0, y: 0, duration: 0.6, ease: 'elastic.out(1, 0.4)' })

      el.addEventListener('mousemove', onMove)
      el.addEventListener('mouseleave', onLeave)
      return () => {
        el.removeEventListener('mousemove', onMove)
        el.removeEventListener('mouseleave', onLeave)
      }
    },
  }),

  defineMotion({
    id: 'tilt-3d',
    name: 'Tilt 3D',
    category: 'interactive',
    description: 'Perspective tilt based on cursor position.',
    tags: ['interactive', '3d', 'tilt'],
    run: (target, options = {}) => {
      const el = toElements(target)[0]
      el.style.transformStyle = 'preserve-3d'
      const max = (options.maxTilt as number) ?? 12

      const onMove = (e: MouseEvent) => {
        const rect = el.getBoundingClientRect()
        const px = (e.clientX - rect.left) / rect.width - 0.5
        const py = (e.clientY - rect.top) / rect.height - 0.5
        gsap.to(el, {
          rotateY: px * max,
          rotateX: -py * max,
          duration: 0.3,
        })
      }
      const onLeave = () => gsap.to(el, { rotateX: 0, rotateY: 0, duration: 0.5 })

      el.addEventListener('mousemove', onMove)
      el.addEventListener('mouseleave', onLeave)
      return () => {
        el.removeEventListener('mousemove', onMove)
        el.removeEventListener('mouseleave', onLeave)
      }
    },
  }),

  defineMotion({
    id: 'hover-lift',
    name: 'Hover Lift',
    category: 'interactive',
    description: 'Lifts on hover with soft shadow expansion.',
    tags: ['interactive', 'hover', 'lift'],
    run: (target, options = {}) => {
      const el = toElements(target)[0]
      const onEnter = () =>
        gsap.to(el, {
          y: (options.lift as number) ?? -8,
          boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
          duration: motionDuration(0.3),
        })
      const onLeave = () =>
        gsap.to(el, { y: 0, boxShadow: '0 0px 0px rgba(0,0,0,0)', duration: 0.3 })

      el.addEventListener('mouseenter', onEnter)
      el.addEventListener('mouseleave', onLeave)
      return () => {
        el.removeEventListener('mouseenter', onEnter)
        el.removeEventListener('mouseleave', onLeave)
      }
    },
  }),

  defineMotion({
    id: 'hover-glow',
    name: 'Hover Glow',
    category: 'interactive',
    description: 'Accent glow blooms on hover.',
    tags: ['interactive', 'hover', 'glow'],
    run: (target, options = {}) => {
      const el = toElements(target)[0]
      const color = (options.color as string) ?? 'rgba(255, 107, 107, 0.5)'
      const onEnter = () =>
        gsap.to(el, {
          boxShadow: `0 0 30px ${color}`,
          duration: 0.3,
        })
      const onLeave = () => gsap.to(el, { boxShadow: '0 0 0px transparent', duration: 0.4 })

      el.addEventListener('mouseenter', onEnter)
      el.addEventListener('mouseleave', onLeave)
      return () => {
        el.removeEventListener('mouseenter', onEnter)
        el.removeEventListener('mouseleave', onLeave)
      }
    },
  }),

  defineMotion({
    id: 'cursor-follow',
    name: 'Cursor Follow',
    category: 'interactive',
    description: 'Decorative dot trails the cursor with lag.',
    tags: ['interactive', 'cursor', 'trail'],
    run: (target, options = {}) => {
      const dot = toElements(target)[0]
      const lag = (options.lag as number) ?? 0.15
      let cx = 0
      let cy = 0
      let tx = 0
      let ty = 0

      const onMove = (e: MouseEvent) => {
        tx = e.clientX
        ty = e.clientY
      }

      const tick = () => {
        cx += (tx - cx) * lag
        cy += (ty - cy) * lag
        gsap.set(dot, { x: cx, y: cy, xPercent: -50, yPercent: -50 })
        requestAnimationFrame(tick)
      }
      const raf = requestAnimationFrame(tick)

      window.addEventListener('mousemove', onMove)
      return () => {
        window.removeEventListener('mousemove', onMove)
        cancelAnimationFrame(raf)
      }
    },
  }),

  defineMotion({
    id: 'press-scale',
    name: 'Press Scale',
    category: 'interactive',
    description: 'Scales down on mousedown for tactile press feel.',
    tags: ['interactive', 'press', 'button'],
    run: (target, options = {}) => {
      const el = toElements(target)[0]
      const onDown = () => gsap.to(el, { scale: (options.scale as number) ?? 0.95, duration: 0.1 })
      const onUp = () => gsap.to(el, { scale: 1, duration: 0.3, ease: 'elastic.out(1, 0.5)' })

      el.addEventListener('mousedown', onDown)
      el.addEventListener('mouseup', onUp)
      el.addEventListener('mouseleave', onUp)
      return () => {
        el.removeEventListener('mousedown', onDown)
        el.removeEventListener('mouseup', onUp)
        el.removeEventListener('mouseleave', onUp)
      }
    },
  }),

  defineMotion({
    id: 'hover-underline',
    name: 'Hover Underline',
    category: 'interactive',
    description: 'Animated underline grows from center on hover.',
    tags: ['interactive', 'hover', 'link'],
    run: (target, _options = {}) => {
      const el = toElements(target)[0]
      el.style.position = 'relative'
      const line = document.createElement('span')
      line.style.cssText =
        'position:absolute;bottom:0;left:0;right:0;height:2px;background:currentColor;transform:scaleX(0);transform-origin:center'
      el.appendChild(line)

      const onEnter = () => gsap.to(line, { scaleX: 1, duration: 0.3 })
      const onLeave = () => gsap.to(line, { scaleX: 0, duration: 0.3 })

      el.addEventListener('mouseenter', onEnter)
      el.addEventListener('mouseleave', onLeave)
      return () => {
        el.removeEventListener('mouseenter', onEnter)
        el.removeEventListener('mouseleave', onLeave)
        line.remove()
      }
    },
  }),

  defineMotion({
    id: 'parallax-mouse',
    name: 'Parallax Mouse',
    category: 'interactive',
    description: 'Layered elements shift opposite to cursor for depth.',
    tags: ['interactive', 'parallax', 'depth'],
    run: (target, options = {}) => {
      const layers = toElements(target)
      const depth = (options.depth as number) ?? 20

      const onMove = (e: MouseEvent) => {
        const px = (e.clientX / window.innerWidth - 0.5) * 2
        const py = (e.clientY / window.innerHeight - 0.5) * 2
        layers.forEach((layer, i) => {
          const factor = (i + 1) / layers.length
          gsap.to(layer, {
            x: px * depth * factor,
            y: py * depth * factor,
            duration: 0.5,
          })
        })
      }

      window.addEventListener('mousemove', onMove)
      return () => window.removeEventListener('mousemove', onMove)
    },
  }),
]