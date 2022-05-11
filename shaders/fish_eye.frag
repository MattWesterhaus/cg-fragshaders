#version 300 es

precision mediump float;

in vec2 texcoord;

uniform sampler2D image;

out vec4 FragColor;

void main() {
    vec2 texcoord_new;
    texcoord_new = texcoord*2.0-1.0;
    float theta = atan(texcoord_new.y,texcoord_new.x);
    float radius = pow(length(texcoord_new), 1.5);

    texcoord_new.x = 0.5 * (radius * cos(theta) + 1.0); 
    texcoord_new.y = 0.5 * (radius * sin(theta) + 1.0); 


    FragColor = texture(image, texcoord_new);
}
