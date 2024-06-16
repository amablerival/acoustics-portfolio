varying float vPattern;
#include "../fragment/gavoronoiseFragment.glsl";
vec3 displacement() {
    float r = gavoronoiseMan(uv);
    vec3 newPosition = position + normal * clamp(r,-0.3, 0.6);
    vPattern = r;
    return newPosition;
}