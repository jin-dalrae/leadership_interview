uniform float uTime;
uniform float uScrollProgress;
uniform vec2 uResolution;
varying vec2 vUv;

#include ./common/noise.glsl

void main() {
  vec2 uv = vUv;
  float t = uTime * 0.15 + uScrollProgress * 2.0;

  vec2 p1 = vec2(0.3 + sin(t) * 0.2, 0.4 + cos(t * 0.7) * 0.2);
  vec2 p2 = vec2(0.7 + cos(t * 0.8) * 0.15, 0.6 + sin(t * 1.1) * 0.15);
  vec2 p3 = vec2(0.5 + sin(t * 1.3) * 0.25, 0.2 + cos(t * 0.5) * 0.2);

  float d1 = 1.0 - smoothstep(0.0, 0.6, distance(uv, p1));
  float d2 = 1.0 - smoothstep(0.0, 0.5, distance(uv, p2));
  float d3 = 1.0 - smoothstep(0.0, 0.7, distance(uv, p3));

  vec3 c1 = vec3(0.9, 0.3, 0.4);
  vec3 c2 = vec3(0.2, 0.5, 0.9);
  vec3 c3 = vec3(0.95, 0.75, 0.3);

  vec3 col = vec3(0.04, 0.04, 0.06);
  col += c1 * d1 * 0.7;
  col += c2 * d2 * 0.6;
  col += c3 * d3 * 0.5;
  col += fbm(uv * 2.0) * 0.03;

  gl_FragColor = vec4(col, 1.0);
}