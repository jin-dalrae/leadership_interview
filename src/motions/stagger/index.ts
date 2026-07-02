import { gsap, motionEase, motionDuration } from '../../lib/gsap'
import { defineMotion, toElements } from '../utils/helpers'
import type { MotionDefinition } from '../types'

export const staggerMotions: MotionDefinition[] = [
  defineMotion({
    id: 'cascade-fade',
    name: 'Cascade Fade',
    category: 'stagger',
    description: 'Children fade up in sequential cascade.',
    tags: ['stagger', 'fade', 'list'],
    run: (target, options = {}) =>
      gsap.from(toElements(target)[0].children, {
        opacity: 0,
        y: 30,
        duration: motionDuration(0.6),
        stagger: options.stagger ?? 0.1,
        ease: motionEase.smooth,
        scrollTrigger: options.scrollTrigger,
      }),
  }),

  defineMotion({
    id: 'grid-stagger',
    name: 'Grid Stagger',
    category: 'stagger',
    description: 'Grid items animate from center outward.',
    tags: ['stagger', 'grid'],
    run: (target, options = {}) => {
      const children = [...toElements(target)[0].children] as HTMLElement[]
      return gsap.from(children, {
        opacity: 0,
        scale: 0.8,
        duration: motionDuration(0.5),
        stagger: {
          each: options.stagger ?? 0.06,
          from: 'center',
        },
        ease: motionEase.smooth,
        scrollTrigger: options.scrollTrigger,
      })
    },
  }),

  defineMotion({
    id: 'masonry-reveal',
    name: 'Masonry Reveal',
    category: 'stagger',
    description: 'Alternating Y offsets for masonry-style reveal.',
    tags: ['stagger', 'masonry'],
    run: (target, options = {}) =>
      gsap.from(toElements(target)[0].children, {
        opacity: 0,
        y: (i) => (i % 2 === 0 ? 50 : 20),
        duration: motionDuration(0.7),
        stagger: options.stagger ?? 0.08,
        ease: motionEase.editorial,
        scrollTrigger: options.scrollTrigger,
      }),
  }),

  defineMotion({
    id: 'domino',
    name: 'Domino',
    category: 'stagger',
    description: 'Sequential tilt-and-drop domino effect.',
    tags: ['stagger', 'domino', 'playful'],
    run: (target, options = {}) =>
      gsap.from(toElements(target)[0].children, {
        rotateZ: -15,
        opacity: 0,
        transformOrigin: 'bottom left',
        duration: motionDuration(0.4),
        stagger: options.stagger ?? 0.05,
        ease: 'back.out(2)',
        scrollTrigger: options.scrollTrigger,
      }),
  }),

  defineMotion({
    id: 'ripple-stagger',
    name: 'Ripple Stagger',
    category: 'stagger',
    description: 'Scale ripple emanating from first child.',
    tags: ['stagger', 'ripple'],
    run: (target, options = {}) =>
      gsap.from(toElements(target)[0].children, {
        scale: 0,
        opacity: 0,
        duration: motionDuration(0.5),
        stagger: { each: options.stagger ?? 0.07, from: 'start' },
        ease: motionEase.bounce,
        scrollTrigger: options.scrollTrigger,
      }),
  }),

  defineMotion({
    id: 'random-stagger',
    name: 'Random Stagger',
    category: 'stagger',
    description: 'Randomized delay and direction per child.',
    tags: ['stagger', 'random', 'organic'],
    run: (target, options = {}) =>
      gsap.from(toElements(target)[0].children, {
        opacity: 0,
        x: () => gsap.utils.random(-40, 40),
        y: () => gsap.utils.random(20, 60),
        duration: motionDuration(0.6),
        stagger: { each: options.stagger ?? 0.05, from: 'random' },
        ease: motionEase.smooth,
        scrollTrigger: options.scrollTrigger,
      }),
  }),

  defineMotion({
    id: 'alternate-sides',
    name: 'Alternate Sides',
    category: 'stagger',
    description: 'Children enter from alternating left/right.',
    tags: ['stagger', 'alternate'],
    run: (target, options = {}) =>
      gsap.from(toElements(target)[0].children, {
        opacity: 0,
        x: (i) => (i % 2 === 0 ? -50 : 50),
        duration: motionDuration(0.6),
        stagger: options.stagger ?? 0.1,
        ease: motionEase.smooth,
        scrollTrigger: options.scrollTrigger,
      }),
  }),

  defineMotion({
    id: 'center-out',
    name: 'Center Out',
    category: 'stagger',
    description: 'Animation radiates from center child outward.',
    tags: ['stagger', 'center'],
    run: (target, options = {}) =>
      gsap.from(toElements(target)[0].children, {
        opacity: 0,
        scale: 0.5,
        duration: motionDuration(0.5),
        stagger: { each: options.stagger ?? 0.08, from: 'center' },
        ease: motionEase.smooth,
        scrollTrigger: options.scrollTrigger,
      }),
  }),

  defineMotion({
    id: 'edges-in',
    name: 'Edges In',
    category: 'stagger',
    description: 'First and last children enter first, meeting in middle.',
    tags: ['stagger', 'edges'],
    run: (target, options = {}) =>
      gsap.from(toElements(target)[0].children, {
        opacity: 0,
        y: 40,
        duration: motionDuration(0.6),
        stagger: { each: options.stagger ?? 0.1, from: 'edges' },
        ease: motionEase.smooth,
        scrollTrigger: options.scrollTrigger,
      }),
  }),

  defineMotion({
    id: 'fold-unfold',
    name: 'Fold Unfold',
    category: 'stagger',
    description: 'Children unfold from collapsed rotateX state.',
    tags: ['stagger', 'fold', '3d'],
    run: (target, options = {}) => {
      const container = toElements(target)[0]
      container.style.perspective = '800px'
      return gsap.from(container.children, {
        rotateX: -90,
        opacity: 0,
        transformOrigin: 'top center',
        duration: motionDuration(0.6),
        stagger: options.stagger ?? 0.08,
        ease: motionEase.editorial,
        scrollTrigger: options.scrollTrigger,
      })
    },
  }),
]