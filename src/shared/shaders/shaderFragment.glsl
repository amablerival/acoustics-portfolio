varying vec3 vNormal;
varying vec3 vPosition;
varying vec2 vUv;

uniform vec4 uResolution;

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
    // PRIMARY 90, 158, 113
    float primaryR = 90./255.;
    float primaryG = 158./255.;
    float primaryB = 113./255.;

    // SECONDARY 188, 129, 77
    float secondaryR = 188./255.;
    float secondaryG = 129./255.;
    float secondaryB = 77./255.;

    // ACCENT
    float accentColor = 0.05;

    vec3 baseFirst = vec3(primaryR, primaryG, primaryB);
    vec3 accent = vec3(accentColor, accentColor, accentColor);
    vec3 baseSecond = vec3(secondaryR, secondaryG, secondaryB);

    float g = clamp(gavoronoiseMan(vPosition.xy), -0.5, 0.1);
    float n = noise(vPosition + uTime);
    float bias = (sin(uTime * 0.05) * 0.1) + 0.2;

    vec2 baseUV = rotate2D(n + g) * vPosition.xy * bias;
    float basePattern = lines(baseUV, 0.1);
    float secondPattern = lines(baseUV, 0.5);

    vec3 baseColor = mix(baseSecond, baseFirst, basePattern);
    vec3 secondbaseColor = mix(baseColor, accent, secondPattern);

    gl_FragColor = vec4(vec3(secondbaseColor), 1.);
} 