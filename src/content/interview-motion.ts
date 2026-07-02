import type { WritingScroll } from '../components/writing/types'

export interface ActMotionPreset {
  labelMotion: string
  titleMotion: string
  titleScroll?: WritingScroll
  titleScrollOptions?: { rotate?: [number, number]; rotateX?: [number, number]; y?: [number, number] }
  turnMotion?: string
}

export const ACT_MOTIONS: Record<string, ActMotionPreset> = {
  'warm-up': {
    labelMotion: 'word-stagger',
    titleMotion: 'split-reveal',
    titleScroll: 'tilt',
    titleScrollOptions: { rotateX: [6, -4] },
    turnMotion: 'fade-up',
  },
  'art-school': {
    labelMotion: 'char-stagger',
    titleMotion: 'clip-reveal',
    titleScroll: 'drift',
    turnMotion: 'fade-left',
  },
  'web-era': {
    labelMotion: 'scramble-decode',
    titleMotion: 'rotate-in-chars',
    titleScroll: 'skew',
    turnMotion: 'fade-right',
  },
  career: {
    labelMotion: 'word-stagger',
    titleMotion: 'line-reveal',
    titleScroll: 'rise',
    turnMotion: 'blur-in',
  },
  'big-tech': {
    labelMotion: 'char-stagger',
    titleMotion: 'split-reveal',
    titleScroll: 'tilt',
    turnMotion: 'line-reveal',
  },
  leadership: {
    labelMotion: 'blur-in',
    titleMotion: 'clip-reveal',
    titleScroll: 'rotate',
    titleScrollOptions: { rotate: [-3, 4] },
    turnMotion: 'word-stagger',
  },
  leaders: {
    labelMotion: 'word-stagger',
    titleMotion: 'rotate-in-chars',
    titleScroll: 'drift',
    turnMotion: 'char-stagger',
  },
}

export interface PassageConfig {
  actId: string
  side: 'left' | 'right'
  cell?: { col: number; row: number }
  photo?: 'group' | 'solo'
  shaderId?: string
  shaderOpacity?: number
  darkShader?: boolean
  artRotate?: number
  minHeight?: string | number
}

export const PASSAGES: PassageConfig[] = [
  {
    actId: 'warm-up',
    side: 'right',
    cell: { col: 0, row: 0 },
    shaderId: 'paper-texture',
    shaderOpacity: 0.18,
    artRotate: -2,
  },
  {
    actId: 'art-school',
    side: 'left',
    photo: 'group',
    shaderId: 'ink-bleed',
    shaderOpacity: 0.16,
    artRotate: -1,
  },
  {
    actId: 'web-era',
    side: 'right',
    cell: { col: 1, row: 0 },
    shaderId: 'halftone',
    shaderOpacity: 0.2,
  },
  {
    actId: 'career',
    side: 'left',
    cell: { col: 2, row: 0 },
    shaderId: 'gradient-mesh',
    shaderOpacity: 0.18,
    artRotate: -1.5,
  },
  {
    actId: 'big-tech',
    side: 'right',
    cell: { col: 0, row: 1 },
    shaderId: 'liquid-warp',
    shaderOpacity: 0.17,
    artRotate: 2,
  },
  {
    actId: 'leadership',
    side: 'left',
    cell: { col: 1, row: 1 },
    shaderId: 'film-grain',
    shaderOpacity: 0.19,
    artRotate: -2,
  },
  {
    actId: 'leaders',
    side: 'right',
    cell: { col: 2, row: 1 },
    shaderId: 'swirl-distortion',
    shaderOpacity: 0.15,
    artRotate: 1.5,
  },
]