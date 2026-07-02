import { gsap, ScrollTrigger, motionDuration } from '../../lib/gsap'
import { defineMotion, toElements } from '../utils/helpers'
import type { MotionDefinition } from '../types'

export const scrollMotions: MotionDefinition[] = [
  defineMotion({
    id: 'parallax-y',
    name: 'Parallax Y',
    category: 'scroll',
    description: 'Vertical parallax offset tied to scroll progress.',
    tags: ['scroll', 'parallax'],
    run: (target, options = {}) => {
      const els = toElements(target)
      return gsap.to(els, {
        y: (options.distance as number) ?? -120,
        ease: 'none',
        scrollTrigger: {
          trigger: els[0],
          start: 'top bottom',
          end: 'bottom top',
          scrub: (options.scrub as number) ?? 1,
          ...options.scrollTrigger,
        },
      })
    },
  }),

  defineMotion({
    id: 'parallax-x',
    name: 'Parallax X',
    category: 'scroll',
    description: 'Horizontal drift on scroll for layered depth.',
    tags: ['scroll', 'parallax', 'horizontal'],
    run: (target, options = {}) => {
      return gsap.to(toElements(target), {
        x: (options.distance as number) ?? 80,
        ease: 'none',
        scrollTrigger: {
          trigger: toElements(target)[0],
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
          ...options.scrollTrigger,
        },
      })
    },
  }),

  defineMotion({
    id: 'scale-on-scroll',
    name: 'Scale On Scroll',
    category: 'scroll',
    description: 'Element scales up or down as it crosses viewport.',
    tags: ['scroll', 'scale'],
    run: (target, options = {}) => {
      return gsap.fromTo(
        toElements(target),
        { scale: (options.from as number) ?? 0.8 },
        {
          scale: (options.to as number) ?? 1,
          ease: 'none',
          scrollTrigger: {
            trigger: toElements(target)[0],
            start: 'top 80%',
            end: 'top 20%',
            scrub: true,
            ...options.scrollTrigger,
          },
        },
      )
    },
  }),

  defineMotion({
    id: 'rotate-on-scroll',
    name: 'Rotate On Scroll',
    category: 'scroll',
    description: 'Subtle rotation scrubbed to scroll position.',
    tags: ['scroll', 'rotate'],
    run: (target, options = {}) => {
      return gsap.to(toElements(target), {
        rotate: (options.rotate as number) ?? 8,
        ease: 'none',
        scrollTrigger: {
          trigger: toElements(target)[0],
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
          ...options.scrollTrigger,
        },
      })
    },
  }),

  defineMotion({
    id: 'opacity-on-scroll',
    name: 'Opacity On Scroll',
    category: 'scroll',
    description: 'Fade in and out based on scroll range.',
    tags: ['scroll', 'fade'],
    run: (target, options = {}) => {
      return gsap.fromTo(
        toElements(target),
        { opacity: (options.from as number) ?? 0 },
        {
          opacity: (options.to as number) ?? 1,
          ease: 'none',
          scrollTrigger: {
            trigger: toElements(target)[0],
            start: 'top 85%',
            end: 'top 35%',
            scrub: true,
            ...options.scrollTrigger,
          },
        },
      )
    },
  }),

  defineMotion({
    id: 'blur-on-scroll',
    name: 'Blur On Scroll',
    category: 'scroll',
    description: 'Focus pull — blur decreases as section enters.',
    tags: ['scroll', 'blur', 'focus'],
    run: (target, options = {}) => {
      return gsap.fromTo(
        toElements(target),
        { filter: `blur(${(options.from as number) ?? 12}px)` },
        {
          filter: 'blur(0px)',
          ease: 'none',
          scrollTrigger: {
            trigger: toElements(target)[0],
            start: 'top 90%',
            end: 'top 40%',
            scrub: true,
            ...options.scrollTrigger,
          },
        },
      )
    },
  }),

  defineMotion({
    id: 'pin-section',
    name: 'Pin Section',
    category: 'scroll',
    description: 'Pins a section while inner content animates.',
    tags: ['scroll', 'pin', 'storytelling'],
    run: (target, options = {}) => {
      const el = toElements(target)[0]
      ScrollTrigger.create({
        trigger: el,
        start: 'top top',
        end: () => `+=${(options.pinDistance as number) ?? window.innerHeight}`,
        pin: true,
        pinSpacing: true,
        ...options.scrollTrigger,
      })
      return gsap.timeline()
    },
  }),

  defineMotion({
    id: 'horizontal-scroll',
    name: 'Horizontal Scroll',
    category: 'scroll',
    description: 'Converts vertical scroll into horizontal panel movement.',
    tags: ['scroll', 'horizontal', 'gallery'],
    run: (target, options = {}) => {
      const container = toElements(target)[0]
      const panels = container.children
      return gsap.to(panels, {
        xPercent: -100 * (panels.length - 1),
        ease: 'none',
        scrollTrigger: {
          trigger: container,
          pin: true,
          scrub: 1,
          end: () => `+=${container.scrollWidth}`,
          ...options.scrollTrigger,
        },
      })
    },
  }),

  defineMotion({
    id: 'progress-bar',
    name: 'Progress Bar',
    category: 'scroll',
    description: 'Scroll progress indicator fills left to right.',
    tags: ['scroll', 'progress', 'ui'],
    run: (target, options = {}) => {
      const bar = toElements(target)[0]
      gsap.set(bar, { scaleX: 0, transformOrigin: 'left center' })
      return gsap.to(bar, {
        scaleX: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: document.body,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 0.3,
          ...options.scrollTrigger,
        },
      })
    },
  }),

  defineMotion({
    id: 'snap-section',
    name: 'Snap Section',
    category: 'scroll',
    description: 'Snaps scroll to nearest section boundary.',
    tags: ['scroll', 'snap'],
    run: (target, options = {}) => {
      const els = toElements(target)
      els.forEach((el) => {
        ScrollTrigger.create({
          trigger: el,
          start: 'top top',
          end: 'bottom top',
          snap: {
            snapTo: 1,
            duration: motionDuration(0.4),
            ease: 'power1.inOut',
          },
          ...options.scrollTrigger,
        })
      })
      return gsap.timeline()
    },
  }),

  defineMotion({
    id: 'velocity-skew',
    name: 'Velocity Skew',
    category: 'scroll',
    description: 'Skew element based on scroll velocity for speed feel.',
    tags: ['scroll', 'skew', 'velocity'],
    run: (target, options = {}) => {
      const el = toElements(target)[0]
      let skew = 0
      ScrollTrigger.create({
        trigger: el,
        start: 'top bottom',
        end: 'bottom top',
        onUpdate: (self) => {
          const velocity = self.getVelocity()
          skew = gsap.utils.clamp(-8, 8, velocity / 300)
          gsap.to(el, { skewY: skew, duration: 0.3, overwrite: true })
        },
        ...options.scrollTrigger,
      })
      return gsap.timeline()
    },
  }),

  defineMotion({
    id: 'scroll-progress-map',
    name: 'Scroll Progress Map',
    category: 'scroll',
    description: 'Maps scroll progress 0–1 to any custom callback.',
    tags: ['scroll', 'progress', 'callback'],
    run: (target, options = {}) => {
      const el = toElements(target)[0]
      const onProgress = options.onProgress as ((p: number) => void) | undefined
      ScrollTrigger.create({
        trigger: el,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
        onUpdate: (self) => onProgress?.(self.progress),
        ...options.scrollTrigger,
      })
      return gsap.timeline()
    },
  }),
]