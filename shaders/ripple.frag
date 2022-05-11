#version 300 es

precision mediump float;

in vec2 texcoord;

uniform float time;
uniform sampler2D image;

out vec4 FragColor;

void main() {
    vec2 texcoord_new;
    texcoord_new = texcoord*2.0-1.0;
    float radius = length(texcoord_new);

    texcoord_new = texcoord* (sin(radius * 30.0 - time * 5.0) + 0.5) / 60.0;


    texcoord_new = texcoord_new + texcoord;

    FragColor = texture(image, texcoord_new);
}


















/*#version 300 es

precision mediump float;

in vec2 texcoord;

uniform float time;
uniform sampler2D image;

out vec4 FragColor;

void main() {
    vec2 texcoord_new;
    texcoord_new[0] = texcoord[0]*2.0-1.0;
    texcoord_new[1] = texcoord[1]*2.0-1.0;
    float radius = abs(texcoord_new[1] - texcoord_new[0]);

    texcoord_new[0] = texcoord[0]* (sin(radius * 30.0 - time * 5.0) + 0.5) / 60.0;
    texcoord_new[1] = texcoord[1]* (sin(radius * 30.0 - time * 5.0) + 0.5) / 60.0;


    texcoord_new[0] = texcoord_new[0] + texcoord[0];
    texcoord_new[1] = texcoord_new[1] + texcoord[1];

    FragColor = texture(image, texcoord_new);
}
*/