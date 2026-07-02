import { gsap, motionDuration } from '../../lib/gsap'
import { defineMotion, toElements } from '../utils/helpers'
import type { MotionDefinition } from '../types'

export const ambientMotions: MotionDefinition[] = [
  defineMotion({
    id: 'grain-overlay',
    name: 'Grain Overlay',
    category: 'ambient',
    description: 'Animated film grain canvas overlay.',
    tags: ['ambient', 'grain', 'texture'],
    run: (target, options = {}) => {
      const canvas = toElements(target)[0] as HTMLCanvasElement
      const ctx = canvas.getContext('2d')!
      let frame = 0

      const resize = () => {
        canvas.width = canvas.offsetWidth
        canvas.height = canvas.offsetHeight
      }
      resize()
      window.addEventListener('resize', resize)

      const draw = () => {
        const imageData = ctx.createImageData(canvas.width, canvas.height)
        const data = imageData.data
        for (let i = 0; i < data.length; i += 4) {
          const v = Math.random() * 255
          data[i] = data[i + 1] = data[i + 2] = v
          data[i + 3] = (options.opacity as number) ?? 25
        }
        ctx.putImageData(imageData, 0, 0)
        frame = requestAnimationFrame(draw)
      }
      draw()

      return () => {
        cancelAnimationFrame(frame)
        window.removeEventListener('resize', resize)
      }
    },
  }),

  defineMotion({
    id: 'mesh-gradient',
    name: 'Mesh Gradient',
    category: 'ambient',
    description: 'Slowly morphing multi-point gradient background.',
    tags: ['ambient', 'gradient', 'background'],
    run: (target, options = {}) => {
      const el = toElements(target)[0]
      const colors = (options.colors as string[]) ?? [
        '#1a1a2e',
        '#16213e',
        '#0f3460',
        '#e94560',
      ]
      el.style.background = `radial-gradient(circle at 20% 30%, ${colors[0]}, transparent 50%),
        radial-gradient(circle at 80% 70%, ${colors[1]}, transparent 50%),
        radial-gradient(circle at 50% 50%, ${colors[2]}, transparent 60%)`

      return gsap.to(el, {
        backgroundPosition: '100% 100%, 0% 0%, 50% 50%',
        duration: motionDuration((options.duration as number) ?? 8),
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
      })
    },
  }),

  defineMotion({
    id: 'floating-orbs',
    name: 'Floating Orbs',
    category: 'ambient',
    description: 'Soft orbs drift with independent sine motion.',
    tags: ['ambient', 'orbs', 'float'],
    run: (target, _options = {}) => {
      const orbs = toElements(target)
      const tweens = orbs.map((orb, i) =>
        gsap.to(orb, {
          x: `random(-30, 30)`,
          y: `random(-40, 40)`,
          duration: motionDuration(2 + i * 0.5),
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
        }),
      )
      return () => tweens.forEach((t) => t.kill())
    },
  }),

  defineMotion({
    id: 'line-draw',
    name: 'Line Draw',
    category: 'ambient',
    description: 'SVG stroke draws itself via dashoffset.',
    tags: ['ambient', 'svg', 'draw'],
    run: (target, options = {}) => {
      const paths = toElements(target)[0].querySelectorAll('path, line, circle, rect')
      const tweens = [...paths].map((path) => {
        const el = path as SVGGeometryElement
        const length = el.getTotalLength?.() ?? 200
        gsap.set(el, { strokeDasharray: length, strokeDashoffset: length })
        return gsap.to(el, {
          strokeDashoffset: 0,
          duration: motionDuration((options.duration as number) ?? 2),
          ease: 'power2.inOut',
          scrollTrigger: options.scrollTrigger,
        })
      })
      return () => tweens.forEach((t) => t.kill())
    },
  }),

  defineMotion({
    id: 'morph-blob',
    name: 'Morph Blob',
    category: 'ambient',
    description: 'SVG blob morphs between organic shapes.',
    tags: ['ambient', 'blob', 'morph'],
    run: (target, options = {}) => {
      const path = toElements(target)[0] as unknown as SVGPathElement
      const shapes = (options.shapes as string[]) ?? [
        'M50,20 Q80,0 100,50 Q120,100 50,100 Q-20,100 0,50 Q-20,0 50,20',
        'M50,10 Q90,20 110,60 Q100,110 50,90 Q0,110 -10,60 Q10,20 50,10',
        'M50,15 Q70,-10 100,40 Q130,80 60,105 Q-10,90 5,45 Q20,0 50,15',
      ]
      let i = 0
      const tween = gsap.to(path, {
        duration: motionDuration(2),
        repeat: -1,
        ease: 'sine.inOut',
        onRepeat: () => {
          i = (i + 1) % shapes.length
          path.setAttribute('d', shapes[i])
        },
      })
      return tween
    },
  }),

  defineMotion({
    id: 'noise-field',
    name: 'Noise Field',
    category: 'ambient',
    description: 'Perlin-like noise particles on canvas.',
    tags: ['ambient', 'noise', 'particles'],
    run: (target, options = {}) => {
      const canvas = toElements(target)[0] as HTMLCanvasElement
      const ctx = canvas.getContext('2d')!
      const particles = Array.from({ length: (options.count as number) ?? 80 }, () => ({
        x: Math.random(),
        y: Math.random(),
        r: Math.random() * 2 + 0.5,
        vx: (Math.random() - 0.5) * 0.002,
        vy: (Math.random() - 0.5) * 0.002,
      }))

      const resize = () => {
        canvas.width = canvas.offsetWidth
        canvas.height = canvas.offsetHeight
      }
      resize()
      window.addEventListener('resize', resize)

      let frame = 0
      const draw = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        particles.forEach((p) => {
          p.x = (p.x + p.vx + 1) % 1
          p.y = (p.y + p.vy + 1) % 1
          ctx.beginPath()
          ctx.arc(p.x * canvas.width, p.y * canvas.height, p.r, 0, Math.PI * 2)
          ctx.fillStyle = 'rgba(28, 28, 34, 0.15)'
          ctx.fill()
        })
        frame = requestAnimationFrame(draw)
      }
      draw()

      return () => {
        cancelAnimationFrame(frame)
        window.removeEventListener('resize', resize)
      }
    },
  }),

  defineMotion({
    id: 'pulse-glow',
    name: 'Pulse Glow',
    category: 'ambient',
    description: 'Rhythmic opacity pulse for ambient glow elements.',
    tags: ['ambient', 'pulse', 'glow'],
    run: (target, options = {}) =>
      gsap.to(toElements(target), {
        opacity: (options.minOpacity as number) ?? 0.4,
        duration: motionDuration((options.duration as number) ?? 2),
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      }),
  }),

  defineMotion({
    id: 'spotlight-follow',
    name: 'Spotlight Follow',
    category: 'ambient',
    description: 'Radial spotlight tracks cursor across section.',
    tags: ['ambient', 'spotlight', 'cursor'],
    run: (target, _options = {}) => {
      const el = toElements(target)[0]
      const onMove = (e: MouseEvent) => {
        const rect = el.getBoundingClientRect()
        const x = ((e.clientX - rect.left) / rect.width) * 100
        const y = ((e.clientY - rect.top) / rect.height) * 100
        el.style.background = `radial-gradient(circle at ${x}% ${y}%, rgba(255,255,255,0.08) 0%, transparent 50%)`
      }
      el.addEventListener('mousemove', onMove)
      return () => el.removeEventListener('mousemove', onMove)
    },
  }),
]