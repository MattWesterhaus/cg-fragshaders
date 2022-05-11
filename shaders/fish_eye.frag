#version 300 es

precision mediump float;

in vec2 texcoord;

uniform sampler2D image;

out vec4 FragColor;

void main() {
    vec2 texcoord_new;
    texcoord_new[0] = texcoord[0]*2.0-1.0;
    texcoord_new[1] = texcoord[1]*2.0-1.0;
    float theta = atan(texcoord_new.y, texcoord_new.x);
    float radius = pow(abs(texcoord_new[1] - texcoord_new[0]), 1.5);

    vec2 fish;
    fish[0] = (radius * cos(theta),  radius * sin(theta));
    fish[1] = (radius * cos(theta),  radius * sin(theta));

    texcoord_new[0] = 0.5 * (fish[0] + 1.0);
    texcoord_new[1] = 0.5 * (fish[1] + 1.0);    

    FragColor = texture(image, texcoord_new);
}
