vec4 displacement(vec4 color, float amount) {
    float bias = 0.0 + amount;
    vec2 dis = vec2(vUv.x, vUv.y);
    vec4 displace = texture2D(uDisplacement, dis.xy);
    color.r = texture2D(uTexture, displace.xy + vec2(0.,0.0098) * bias).r;
    color.g = texture2D(uTexture, displace.xy + vec2(0.,0.0098) * bias).g;
    color.b = texture2D(uTexture, displace.xy + vec2(0.,0.0098) * bias).b;
    return color;
}
