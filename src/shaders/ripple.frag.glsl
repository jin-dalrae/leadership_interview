uniform float uTime;
uniform vec2 uMouse;
uniform vec2 uResolution;
varying vec2 vUv;

#include ./common/noise.glsl

void main() {
  vec2 uv = vUv;
  vec2 center = uMouse;
  float dist = distance(uv, center);
  float ripple = sin(dist * 40.0 - uTime * 3.0) * exp(-dist * 4.0);
  vec2 offset = normalize(uv - center) * ripple * 0.02;
  vec2 warped = uv + offset;

  vec3 col = vec3(0.08, 0.09, 0.14);
  col += vec3(0.2, 0.4, 0.9) * ripple * 0.5;
  col += fbm(warped * 4.0 + uTime * 0.1) * 0.05;

  gl_FragColor = vec4(col, 1.0);
}