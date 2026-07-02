uniform float uTime;
uniform vec2 uResolution;
varying vec2 vUv;

void main() {
  vec2 uv = vUv;
  float scale = 80.0;
  vec2 grid = fract(uv * scale) - 0.5;
  float lum = 0.5 + 0.5 * sin(uv.x * 6.0 + uTime) * cos(uv.y * 4.0);
  float radius = (1.0 - lum) * 0.4;
  float dot = smoothstep(radius, radius - 0.05, length(grid));

  vec3 col = mix(vec3(0.95, 0.93, 0.9), vec3(0.1, 0.1, 0.12), dot);
  gl_FragColor = vec4(col, 1.0);
}