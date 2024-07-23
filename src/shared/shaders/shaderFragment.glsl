varying vec3 vNormal;
varying vec3 vPosition;
varying vec2 vUv;

uniform vec4 uResolution;
uniform vec3 uPrimaryColor;
uniform vec3 uSecondaryColor;
uniform vec3 uAccentColor;

#include "./fragment/gavoronoiseFragment.glsl";
#include "./fragment/noiseFragment.glsl";

float lines(vec2 uv, float offset){
    return smoothstep(
        0., 0.5 + offset * 0.5,
        0.5 * abs(sin(uv.x * 30.) + offset * 2.)    
    );
}

mat2 rotate2D(float angle){
    return mat2(
        cos(angle),-sin(angle),
        sin(angle),cos(angle)
    );
}


void main() {
    float g = clamp(gavoronoiseMan(vPosition.xy), -0.5, 0.1);
    float n = noise(vPosition + uTime);
    float bias = (sin(uTime * 0.05) * 0.1) + 0.05;

    vec2 baseUV = rotate2D(n + g) * vPosition.xy * bias;
    float basePattern = lines(baseUV, 0.1);
    float secondPattern = lines(baseUV, 0.5);

    vec3 baseColor = mix(uSecondaryColor, uPrimaryColor, basePattern);
    vec3 secondbaseColor = mix(baseColor, uAccentColor, secondPattern);

    gl_FragColor = vec4(vec3(secondbaseColor), 1.);
} 