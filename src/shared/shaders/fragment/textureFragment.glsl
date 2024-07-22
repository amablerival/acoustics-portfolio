// varying vec2 vUv;
uniform sampler2D uTexture;
// uniform sampler2D uDisplacement;
// uniform sampler2D uNormal;
// uniform sampler2D uRoughness;
uniform float uTime;
#include "./lightingFragment.glsl";
// #include "./pbrFragment.glsl
vec4 colorTexture() {
    vec4 texColor, texDisplacement, texNormal, texRoughness;

    texColor = texture2D(uTexture, vUv)*vec4(lighting(), 1.0);
    // texDisplacement = texture2D(uDisplacement, vUv)*vec4(lighting(), 1.0);
    // texNormal = texture2D(uNormal, vUv);
    // texRoughness = texture2D(uRoughness, vUv);

    // vec4 color = mix(texColor, 1.0, 1.0);

    return texColor;
}