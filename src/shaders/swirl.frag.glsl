uniform float uTime;
uniform vec2 uMouse;
uniform vec2 uResolution;
varying vec2 vUv;

#include ./common/noise.glsl

void main() {
  vec2 uv = vUv - 0.5;
  float angle = atan(uv.y, uv.x);
  float radius = length(uv);

  float swirl = sin(angle * 5.0 + radius * 10.0 - uTime * 2.0 + fbm(uv + uTime * 0.1) * 3.0);
  float pattern = smoothstep(-0.2, 0.5, swirl);

  vec3 col = mix(vec3(0.05, 0.05, 0.1), vec3(0.9, 0.5, 0.2), pattern);
  col += vec3(0.3, 0.6, 1.0) * (1.0 - radius * 2.0) * 0.2;

  gl_FragColor = vec4(col, 1.0);
}