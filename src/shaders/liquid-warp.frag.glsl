uniform float uTime;
uniform float uScrollProgress;
uniform vec2 uMouse;
uniform vec2 uResolution;
varying vec2 vUv;

#include ./common/noise.glsl

void main() {
  vec2 uv = vUv;
  float n1 = fbm(uv * 3.0 + uTime * 0.15 + uScrollProgress);
  float n2 = fbm(uv * 3.0 - uTime * 0.1 + 10.0);
  vec2 distort = vec2(n1, n2) * 0.08;
  distort += (uMouse - uv) * 0.05;

  vec2 warped = uv + distort;
  float pattern = fbm(warped * 5.0 + uTime * 0.2);

  vec3 col = mix(
    vec3(0.05, 0.1, 0.2),
    vec3(0.9, 0.3, 0.5),
    smoothstep(0.2, 0.8, pattern)
  );
  gl_FragColor = vec4(col, 1.0);
}