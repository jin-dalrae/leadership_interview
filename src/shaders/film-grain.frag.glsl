uniform float uTime;
uniform vec2 uResolution;
varying vec2 vUv;

float random(vec2 st) {
  return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) * 43758.5453);
}

void main() {
  vec2 uv = vUv;
  vec3 base = vec3(0.06, 0.06, 0.08);
  float grain = random(uv * uResolution + uTime) * 0.15;
  vec3 col = base + grain;
  gl_FragColor = vec4(col, 1.0);
}