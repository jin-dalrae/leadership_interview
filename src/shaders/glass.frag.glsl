uniform float uTime;
uniform vec2 uMouse;
uniform vec2 uResolution;
varying vec2 vUv;

#include ./common/noise.glsl

void main() {
  vec2 uv = vUv;
  vec2 refraction = vec2(
    fbm(uv * 4.0 + uTime * 0.1),
    fbm(uv * 4.0 + vec2(5.0) - uTime * 0.08)
  ) * 0.03;

  vec2 refracted = uv + refraction + (uMouse - 0.5) * 0.02;
  float fresnel = pow(1.0 - abs(dot(normalize(vec3(refraction, 1.0)), vec3(0.0, 0.0, 1.0))), 2.0);

  vec3 base = vec3(0.7, 0.8, 0.95) * 0.3;
  vec3 highlight = vec3(1.0) * fresnel * 0.6;
  vec3 col = base + highlight + fbm(refracted * 6.0) * 0.1;

  gl_FragColor = vec4(col, 0.85);
}