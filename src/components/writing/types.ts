import type { ReactNode } from 'react'

export type WritingVariant =
  | 'eyebrow'
  | 'title'
  | 'heading'
  | 'lede'
  | 'body'
  | 'quote'
  | 'cite'

export type WritingScroll =
  | 'none'
  | 'tilt'
  | 'rotate'
  | 'drift'
  | 'skew'
  | 'rise'

export type WritingElement =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'p'
  | 'blockquote'
  | 'cite'
  | 'figcaption'
  | 'span'
  | 'div'

export interface WritingScrollOptions {
  rotate?: [number, number]
  rotateX?: [number, number]
  y?: [number, number]
  x?: [number, number]
  skew?: [number, number]
}

export interface WritingProps {
  as?: WritingElement
  variant?: WritingVariant
  motion?: string
  scroll?: WritingScroll
  scrollOptions?: WritingScrollOptions
  float?: boolean
  playOnMount?: boolean
  className?: string
  children: ReactNode
}