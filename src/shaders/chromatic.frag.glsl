uniform float uTime;
uniform vec2 uResolution;
uniform sampler2D uTexture;
varying vec2 vUv;

void main() {
  vec2 uv = vUv;
  float aberration = 0.003 + sin(uTime * 0.5) * 0.002;
  float r = texture2D(uTexture, uv + vec2(aberration, 0.0)).r;
  float g = texture2D(uTexture, uv).g;
  float b = texture2D(uTexture, uv - vec2(aberration, 0.0)).b;
  gl_FragColor = vec4(r, g, b, 1.0);
}