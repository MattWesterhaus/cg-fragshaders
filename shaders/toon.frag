#version 300 es

precision mediump float;

in vec2 texcoord;

uniform sampler2D image;

out vec4 FragColor;

void main() {
    FragColor = texture(image, texcoord);
    FragColor.r = round(FragColor.r * 4.0)/4.0;
    FragColor.g = round(FragColor.g * 4.0)/4.0;
    FragColor.b = round(FragColor.b * 4.0)/4.0;
}
