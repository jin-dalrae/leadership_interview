uniform float uTime;
uniform float uScrollProgress;
uniform vec2 uResolution;
varying vec2 vUv;

#include ./common/noise.glsl

void main() {
  vec2 uv = vUv;
  float t = uTime * 0.2 + uScrollProgress * 1.5;

  float wave1 = fbm(vec2(uv.x * 2.0 + t, uv.y * 0.5 + t * 0.5));
  float wave2 = fbm(vec2(uv.x * 3.0 - t * 0.7, uv.y * 0.8 + 2.0));
  float aurora = smoothstep(0.3, 0.9, wave1) * smoothstep(0.2, 0.8, wave2);
  aurora *= smoothstep(0.0, 0.4, uv.y) * smoothstep(1.0, 0.5, uv.y);

  vec3 green = vec3(0.2, 0.9, 0.5);
  vec3 purple = vec3(0.5, 0.2, 0.9);
  vec3 col = mix(vec3(0.02, 0.03, 0.08), mix(green, purple, wave2), aurora);

  gl_FragColor = vec4(col, 1.0);
}