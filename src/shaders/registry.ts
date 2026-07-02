import type { ShaderDefinition } from '../motions/types'
import vertexShader from './vertex.vert.glsl'
import rippleFrag from './ripple.frag.glsl'
import chromaticFrag from './chromatic.frag.glsl'
import filmGrainFrag from './film-grain.frag.glsl'
import liquidWarpFrag from './liquid-warp.frag.glsl'
import gradientMeshFrag from './gradient-mesh.frag.glsl'
import inkBleedFrag from './ink-bleed.frag.glsl'
import halftoneFrag from './halftone.frag.glsl'
import glassFrag from './glass.frag.glsl'
import auroraFrag from './aurora.frag.glsl'
import displacementFrag from './displacement.frag.glsl'
import swirlFrag from './swirl.frag.glsl'
import paperFrag from './paper.frag.glsl'

const defaultUniforms = {
  uTime: { value: 0 },
  uMouse: { value: [0.5, 0.5] },
  uResolution: { value: [1, 1] },
}

export const shaderRegistry: ShaderDefinition[] = [
  {
    id: 'ripple-distortion',
    name: 'Ripple Distortion',
    description: 'Mouse-reactive water ripples with noise texture.',
    tags: ['shader', 'ripple', 'interactive'],
    fragment: rippleFrag,
    vertex: vertexShader,
    uniforms: { ...defaultUniforms },
  },
  {
    id: 'chromatic-aberration',
    name: 'Chromatic Aberration',
    description: 'RGB channel split with animated aberration strength.',
    tags: ['shader', 'glitch', 'rgb'],
    fragment: chromaticFrag,
    vertex: vertexShader,
    uniforms: { ...defaultUniforms, uTexture: { value: null } },
  },
  {
    id: 'film-grain',
    name: 'Film Grain',
    description: 'Animated analog grain overlay on dark base.',
    tags: ['shader', 'grain', 'cinematic'],
    fragment: filmGrainFrag,
    vertex: vertexShader,
    uniforms: { ...defaultUniforms },
  },
  {
    id: 'liquid-warp',
    name: 'Liquid Warp',
    description: 'Flowing liquid distortion with gradient color mix.',
    tags: ['shader', 'liquid', 'warp'],
    fragment: liquidWarpFrag,
    vertex: vertexShader,
    uniforms: { ...defaultUniforms },
  },
  {
    id: 'gradient-mesh',
    name: 'Gradient Mesh',
    description: 'Soft multi-point mesh gradient with organic drift.',
    tags: ['shader', 'gradient', 'mesh'],
    fragment: gradientMeshFrag,
    vertex: vertexShader,
    uniforms: { ...defaultUniforms },
  },
  {
    id: 'ink-bleed',
    name: 'Ink Bleed',
    description: 'Editorial ink spreading on paper texture.',
    tags: ['shader', 'ink', 'editorial'],
    fragment: inkBleedFrag,
    vertex: vertexShader,
    uniforms: { ...defaultUniforms },
  },
  {
    id: 'halftone',
    name: 'Halftone',
    description: 'Print-style halftone dot pattern with animated luminance.',
    tags: ['shader', 'halftone', 'print'],
    fragment: halftoneFrag,
    vertex: vertexShader,
    uniforms: { ...defaultUniforms },
  },
  {
    id: 'glass-refraction',
    name: 'Glass Refraction',
    description: 'Frosted glass with fresnel highlights and refraction.',
    tags: ['shader', 'glass', 'fresnel'],
    fragment: glassFrag,
    vertex: vertexShader,
    uniforms: { ...defaultUniforms },
  },
  {
    id: 'aurora',
    name: 'Aurora',
    description: 'Northern lights bands with flowing noise.',
    tags: ['shader', 'aurora', 'ambient'],
    fragment: auroraFrag,
    vertex: vertexShader,
    uniforms: { ...defaultUniforms },
  },
  {
    id: 'noise-displacement',
    name: 'Noise Displacement',
    description: 'FBM displacement with color banding.',
    tags: ['shader', 'noise', 'displacement'],
    fragment: displacementFrag,
    vertex: vertexShader,
    uniforms: { ...defaultUniforms },
  },
  {
    id: 'swirl-distortion',
    name: 'Swirl Distortion',
    description: 'Polar swirl pattern with warm accent tones.',
    tags: ['shader', 'swirl', 'distortion'],
    fragment: swirlFrag,
    vertex: vertexShader,
    uniforms: { ...defaultUniforms },
  },
  {
    id: 'paper-texture',
    name: 'Paper Texture',
    description: 'Subtle paper fiber grain with vignette.',
    tags: ['shader', 'paper', 'texture'],
    fragment: paperFrag,
    vertex: vertexShader,
    uniforms: { ...defaultUniforms },
  },
]

export function getShader(id: string): ShaderDefinition | undefined {
  return shaderRegistry.find((s) => s.id === id)
}