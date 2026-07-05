uniform float uTime;
uniform sampler2D uTexture;
uniform vec2 uResolution;
varying vec2 vUv;

void main() {
  vec2 uv = vUv;

  vec4 baseColor = texture2D(uTexture, uv);

  // "Redness" test: red channel meaningfully higher than green/blue
  float redness = smoothstep(0.12, 0.35, baseColor.r - max(baseColor.g, baseColor.b));

  // Wobble offset, only meaningfully applied where redness > 0
  float wobbleX = sin(uTime * 1.3 + uv.y * 14.0) * 0.008;
  float wobbleY = cos(uTime * 1.7 + uv.x * 11.0) * 0.008;
  vec2 wobbledUv = uv + vec2(wobbleX, wobbleY) * redness;

  vec4 wobbledColor = texture2D(uTexture, wobbledUv);

  vec3 finalColor = mix(baseColor.rgb, wobbledColor.rgb, redness);

  gl_FragColor = vec4(finalColor, baseColor.a);
}
