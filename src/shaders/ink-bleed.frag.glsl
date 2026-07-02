uniform float uTime;
uniform float uScrollProgress;
uniform vec2 uMouse;
uniform vec2 uResolution;
varying vec2 vUv;

#include ./common/noise.glsl

void main() {
  vec2 uv = vUv;
  float bleed = smoothstep(0.0, 1.0, uScrollProgress * 1.2 + uTime * 0.1);
  float dist = distance(uv, vec2(0.5, 0.5));
  float edge = fbm(uv * 8.0) * 0.1;
  float mask = smoothstep(bleed + edge, bleed - 0.05, dist);

  vec3 ink = vec3(0.02, 0.02, 0.03);
  vec3 paper = vec3(0.94, 0.92, 0.88);
  vec3 col = mix(paper, ink, 1.0 - mask);

  float splatter = step(0.7, fbm(uv * 20.0 + uTime * 0.05)) * (1.0 - mask) * 0.3;
  col = mix(col, ink, splatter);

  gl_FragColor = vec4(col, 1.0);
}