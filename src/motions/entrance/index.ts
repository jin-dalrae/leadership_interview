import { gsap, motionEase, motionDuration } from '../../lib/gsap'
import { defineMotion, fadeFrom, toElements } from '../utils/helpers'
import type { MotionDefinition } from '../types'

export const entranceMotions: MotionDefinition[] = [
  defineMotion({
    id: 'fade-up',
    name: 'Fade Up',
    category: 'entrance',
    description: 'Classic fade in with upward drift.',
    tags: ['entrance', 'fade'],
    run: fadeFrom(40, 0),
  }),

  defineMotion({
    id: 'fade-down',
    name: 'Fade Down',
    category: 'entrance',
    description: 'Enters from above with fade.',
    tags: ['entrance', 'fade'],
    run: fadeFrom(-40, 0),
  }),

  defineMotion({
    id: 'fade-left',
    name: 'Fade Left',
    category: 'entrance',
    description: 'Slides in from the left.',
    tags: ['entrance', 'slide'],
    run: fadeFrom(0, -60),
  }),

  defineMotion({
    id: 'fade-right',
    name: 'Fade Right',
    category: 'entrance',
    description: 'Slides in from the right.',
    tags: ['entrance', 'slide'],
    run: fadeFrom(0, 60),
  }),

  defineMotion({
    id: 'scale-up',
    name: 'Scale Up',
    category: 'entrance',
    description: 'Grows from small to full size.',
    tags: ['entrance', 'scale'],
    run: (target, options = {}) =>
      gsap.from(toElements(target), {
        scale: 0.5,
        opacity: 0,
        duration: motionDuration(options.duration ?? 0.7),
        ease: motionEase.smooth,
        scrollTrigger: options.scrollTrigger,
      }),
  }),

  defineMotion({
    id: 'scale-down',
    name: 'Scale Down',
    category: 'entrance',
    description: 'Shrinks from oversized into place.',
    tags: ['entrance', 'scale'],
    run: (target, options = {}) =>
      gsap.from(toElements(target), {
        scale: 1.4,
        opacity: 0,
        duration: motionDuration(options.duration ?? 0.7),
        ease: motionEase.smooth,
        scrollTrigger: options.scrollTrigger,
      }),
  }),

  defineMotion({
    id: 'flip-x',
    name: 'Flip X',
    category: 'entrance',
    description: '3D flip on horizontal axis.',
    tags: ['entrance', '3d', 'flip'],
    run: (target, options = {}) => {
      const els = toElements(target)
      els.forEach((el) => (el.style.perspective = '800px'))
      return gsap.from(els, {
        rotateX: -90,
        opacity: 0,
        duration: motionDuration(0.8),
        ease: motionEase.smooth,
        scrollTrigger: options.scrollTrigger,
      })
    },
  }),

  defineMotion({
    id: 'flip-y',
    name: 'Flip Y',
    category: 'entrance',
    description: '3D flip on vertical axis.',
    tags: ['entrance', '3d', 'flip'],
    run: (target, options = {}) => {
      const els = toElements(target)
      els.forEach((el) => (el.style.perspective = '800px'))
      return gsap.from(els, {
        rotateY: 90,
        opacity: 0,
        duration: motionDuration(0.8),
        ease: motionEase.smooth,
        scrollTrigger: options.scrollTrigger,
      })
    },
  }),

  defineMotion({
    id: 'elastic-in',
    name: 'Elastic In',
    category: 'entrance',
    description: 'Bouncy elastic overshoot entrance.',
    tags: ['entrance', 'elastic'],
    run: (target, options = {}) =>
      gsap.from(toElements(target), {
        y: 60,
        opacity: 0,
        duration: motionDuration(1.2),
        ease: motionEase.elastic,
        scrollTrigger: options.scrollTrigger,
      }),
  }),

  defineMotion({
    id: 'bounce-in',
    name: 'Bounce In',
    category: 'entrance',
    description: 'Back-ease overshoot for playful pop.',
    tags: ['entrance', 'bounce'],
    run: (target, options = {}) =>
      gsap.from(toElements(target), {
        scale: 0,
        opacity: 0,
        duration: motionDuration(0.9),
        ease: motionEase.bounce,
        scrollTrigger: options.scrollTrigger,
      }),
  }),

  defineMotion({
    id: 'clip-circle',
    name: 'Clip Circle',
    category: 'entrance',
    description: 'Circular iris reveal from center.',
    tags: ['entrance', 'clip', 'iris'],
    run: (target, options = {}) => {
      const els = toElements(target)
      gsap.set(els, { clipPath: 'circle(0% at 50% 50%)' })
      return gsap.to(els, {
        clipPath: 'circle(75% at 50% 50%)',
        duration: motionDuration(1),
        ease: motionEase.editorial,
        scrollTrigger: options.scrollTrigger,
      })
    },
  }),

  defineMotion({
    id: 'clip-wipe',
    name: 'Clip Wipe',
    category: 'entrance',
    description: 'Diagonal wipe reveal via clip-path.',
    tags: ['entrance', 'clip', 'wipe'],
    run: (target, options = {}) => {
      const els = toElements(target)
      gsap.set(els, { clipPath: 'polygon(0 0, 0 0, 0 100%, 0 100%)' })
      return gsap.to(els, {
        clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
        duration: motionDuration(0.9),
        ease: motionEase.editorial,
        scrollTrigger: options.scrollTrigger,
      })
    },
  }),
]