#version 300 es

precision mediump float;

in vec2 texcoord;

uniform float width;
uniform float height;
uniform sampler2D image;
uniform float time;

out vec4 FragColor;

void main() {
    float i;
    float t = modf(time, i);
    if(mod(i, 2.0) != 0.0) {
        t= 1.0-t;
    }
    t = 3.0 * t + 0.5;
    FragColor = texture(image, texcoord);
    float L = 0.299 * FragColor.r + 0.587 * FragColor.g + 0.114 * FragColor.b;
    FragColor.r += mod((L * t), 0.5);
    FragColor.g += mod((L * t), 0.75);
    FragColor.b += mod((L * t), 1.0);
   
}