uniform float uTime;
uniform vec2 uResolution;
varying vec2 vUv;

#include ./common/noise.glsl

void main() {
  vec2 uv = vUv;
  float disp = fbm(uv * 4.0 + uTime * 0.3);
  vec2 displaced = uv + vec2(disp * 0.1, disp * 0.05);

  float bands = sin(displaced.y * 30.0 + disp * 10.0 + uTime) * 0.5 + 0.5;
  vec3 col = mix(vec3(0.1, 0.15, 0.25), vec3(0.6, 0.8, 1.0), bands);
  col *= 0.8 + disp * 0.4;

  gl_FragColor = vec4(col, 1.0);
}