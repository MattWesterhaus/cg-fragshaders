#version 300 es

precision mediump float;

in vec2 texcoord;

uniform float width;
uniform float height;
uniform sampler2D image;
uniform float time;

out vec4 FragColor;

void main() {
    FragColor = texture(image, texcoord);
    float L = 0.299 * FragColor[0] + 0.587 * FragColor[1] + 0.114 * FragColor[2];
    FragColor[0] += mod(mod(L , 1.0), 0.5);
    FragColor[1] += mod(mod(L * time, 2.0), .75);
    FragColor[2] += mod(mod(L * time, 3.0), 1.0);
    

    
}
