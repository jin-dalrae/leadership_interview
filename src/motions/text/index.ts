import { gsap, motionEase, motionDuration } from '../../lib/gsap'
import { defineMotion, scrambleText, toElements } from '../utils/helpers'
import { splitText } from '../utils/splitText'
import type { MotionDefinition } from '../types'

export const textMotions: MotionDefinition[] = [
  defineMotion({
    id: 'split-reveal',
    name: 'Split Reveal',
    category: 'text',
    description: 'Splits text into characters and reveals upward with stagger.',
    tags: ['typography', 'reveal', 'chars'],
    run: (target, options = {}) => {
      const el = toElements(target)[0]
      const chars = splitText(el, 'chars')
      return gsap.from(chars, {
        y: 80,
        opacity: 0,
        rotateX: -40,
        duration: motionDuration(options.duration ?? 0.9),
        stagger: options.stagger ?? 0.03,
        ease: options.ease ?? motionEase.smooth,
        scrollTrigger: options.scrollTrigger,
      })
    },
  }),

  defineMotion({
    id: 'char-stagger',
    name: 'Char Stagger',
    category: 'text',
    description: 'Character opacity cascade with micro scale pop.',
    tags: ['typography', 'stagger'],
    run: (target, options = {}) => {
      const chars = splitText(toElements(target)[0], 'chars')
      return gsap.from(chars, {
        opacity: 0,
        scale: 0.6,
        duration: motionDuration(0.6),
        stagger: options.stagger ?? 0.02,
        ease: 'power2.out',
        scrollTrigger: options.scrollTrigger,
      })
    },
  }),

  defineMotion({
    id: 'word-stagger',
    name: 'Word Stagger',
    category: 'text',
    description: 'Words slide in from alternating sides.',
    tags: ['typography', 'words'],
    run: (target, options = {}) => {
      const words = splitText(toElements(target)[0], 'words').filter((w) =>
        w.classList.contains('motion-word'),
      )
      return gsap.from(words, {
        x: (i) => (i % 2 === 0 ? -30 : 30),
        opacity: 0,
        duration: motionDuration(0.7),
        stagger: options.stagger ?? 0.08,
        ease: motionEase.editorial,
        scrollTrigger: options.scrollTrigger,
      })
    },
  }),

  defineMotion({
    id: 'line-reveal',
    name: 'Line Reveal',
    category: 'text',
    description: 'Each line reveals via vertical clip-path wipe.',
    tags: ['typography', 'lines', 'clip'],
    run: (target, options = {}) => {
      const lines = splitText(toElements(target)[0], 'lines')
      gsap.set(lines, { clipPath: 'inset(100% 0 0 0)' })
      return gsap.to(lines, {
        clipPath: 'inset(0% 0 0 0)',
        duration: motionDuration(0.8),
        stagger: options.stagger ?? 0.15,
        ease: motionEase.editorial,
        scrollTrigger: options.scrollTrigger,
      })
    },
  }),

  defineMotion({
    id: 'scramble-decode',
    name: 'Scramble Decode',
    category: 'text',
    description: 'Random characters resolve into final copy.',
    tags: ['typography', 'decode', 'glitch'],
    run: (target, options = {}) => {
      const el = toElements(target)[0]
      const finalText = el.textContent ?? ''
      return scrambleText(el, finalText, motionDuration(options.duration ?? 1.4))
    },
  }),

  defineMotion({
    id: 'typewriter',
    name: 'Typewriter',
    category: 'text',
    description: 'Classic typewriter width reveal with blinking cursor.',
    tags: ['typography', 'typewriter'],
    run: (target, options = {}) => {
      const el = toElements(target)[0]
      const text = el.textContent ?? ''
      el.textContent = ''
      el.style.overflow = 'hidden'
      el.style.whiteSpace = 'nowrap'
      el.style.borderRight = '2px solid currentColor'

      const proxy = { i: 0 }
      const tween = gsap.to(proxy, {
        i: text.length,
        duration: motionDuration(options.duration ?? 2),
        ease: 'steps(' + text.length + ')',
        onUpdate: () => {
          el.textContent = text.slice(0, Math.round(proxy.i))
        },
        onComplete: () => {
          gsap.to(el, {
            borderRightColor: 'transparent',
            duration: 0.3,
            repeat: 3,
            yoyo: true,
          })
        },
        scrollTrigger: options.scrollTrigger,
      })
      return tween
    },
  }),

  defineMotion({
    id: 'blur-in',
    name: 'Blur In',
    category: 'text',
    description: 'Text de-blurs from heavy gaussian to crisp.',
    tags: ['typography', 'blur', 'focus'],
    run: (target, options = {}) => {
      return gsap.from(toElements(target), {
        filter: 'blur(16px)',
        opacity: 0,
        duration: motionDuration(options.duration ?? 1),
        ease: motionEase.smooth,
        scrollTrigger: options.scrollTrigger,
      })
    },
  }),

  defineMotion({
    id: 'clip-reveal',
    name: 'Clip Reveal',
    category: 'text',
    description: 'Horizontal clip-path sweep reveals text.',
    tags: ['typography', 'clip', 'wipe'],
    run: (target, options = {}) => {
      const els = toElements(target)
      gsap.set(els, { clipPath: 'inset(0 100% 0 0)' })
      return gsap.to(els, {
        clipPath: 'inset(0 0% 0 0)',
        duration: motionDuration(options.duration ?? 1),
        ease: motionEase.editorial,
        scrollTrigger: options.scrollTrigger,
      })
    },
  }),

  defineMotion({
    id: 'rotate-in-chars',
    name: 'Rotate In Chars',
    category: 'text',
    description: 'Characters rotate on Y-axis into place.',
    tags: ['typography', '3d', 'rotate'],
    run: (target, options = {}) => {
      const el = toElements(target)[0]
      el.style.perspective = '600px'
      const chars = splitText(el, 'chars')
      return gsap.from(chars, {
        rotateY: 90,
        opacity: 0,
        transformOrigin: '50% 50%',
        duration: motionDuration(0.7),
        stagger: options.stagger ?? 0.04,
        ease: motionEase.smooth,
        scrollTrigger: options.scrollTrigger,
      })
    },
  }),

  defineMotion({
    id: 'wave-text',
    name: 'Wave Text',
    category: 'text',
    description: 'Continuous sine-wave bob on characters.',
    tags: ['typography', 'loop', 'wave'],
    run: (target, options = {}) => {
      const chars = splitText(toElements(target)[0], 'chars')
      return gsap.to(chars, {
        y: -12,
        duration: 0.4,
        stagger: { each: 0.05, yoyo: true, repeat: -1 },
        ease: 'sine.inOut',
        scrollTrigger: options.scrollTrigger,
      })
    },
  }),

  defineMotion({
    id: 'gradient-shift',
    name: 'Gradient Shift',
    category: 'text',
    description: 'Animated gradient background clipped to text.',
    tags: ['typography', 'gradient', 'color'],
    run: (target, options = {}) => {
      const els = toElements(target)
      els.forEach((el) => {
        el.style.backgroundImage =
          'linear-gradient(90deg, #ff6b6b, #feca57, #48dbfb, #ff9ff3)'
        el.style.backgroundSize = '300% 100%'
        el.style.webkitBackgroundClip = 'text'
        el.style.backgroundClip = 'text'
        el.style.color = 'transparent'
      })
      return gsap.to(els, {
        backgroundPosition: '200% center',
        duration: motionDuration(options.duration ?? 3),
        ease: 'none',
        repeat: -1,
        scrollTrigger: options.scrollTrigger,
      })
    },
  }),

  defineMotion({
    id: 'highlight-sweep',
    name: 'Highlight Sweep',
    category: 'text',
    description: 'Marker highlight sweeps behind key phrase.',
    tags: ['typography', 'highlight', 'editorial'],
    run: (target, options = {}) => {
      const el = toElements(target)[0]
      el.style.position = 'relative'
      el.style.display = 'inline-block'
      const mark = document.createElement('span')
      mark.style.cssText =
        'position:absolute;inset:0;background:#d4b896;z-index:-1;transform-origin:left;transform:scaleX(0)'
      el.prepend(mark)
      return gsap.to(mark, {
        scaleX: 1,
        duration: motionDuration(options.duration ?? 0.8),
        ease: motionEase.editorial,
        scrollTrigger: options.scrollTrigger,
      })
    },
  }),
]