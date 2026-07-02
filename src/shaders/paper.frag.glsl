uniform float uTime;
uniform vec2 uResolution;
varying vec2 vUv;

#include ./common/noise.glsl

float random(vec2 st) {
  return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) * 43758.5453);
}

void main() {
  vec2 uv = vUv;
  vec3 paper = vec3(0.93, 0.91, 0.87);
  float fiber = fbm(uv * 50.0) * 0.04;
  float speck = step(0.98, random(uv * 200.0)) * 0.15;
  float vignette = 1.0 - distance(uv, vec2(0.5)) * 0.5;

  vec3 col = paper - fiber + speck;
  col *= vignette;

  gl_FragColor = vec4(col, 1.0);
}