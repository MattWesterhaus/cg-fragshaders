#version 300 es

precision mediump float;

in vec2 texcoord;

uniform float width;
uniform float height;
uniform sampler2D image;
uniform float time;

out vec4 FragColor;

void main() {
    /*FragColor = texture(image, texcoord);
    float L = 0.299 * FragColor[0] + 0.587 * FragColor[1] + 0.114 * FragColor[2];
    float t = time*L
    FragColor[0] = L*time;
    FragColor[1] = L;
    FragColor[2] = L;
    */
    FragColor = texture(image, texcoord);
    float L = 0.299 * FragColor[0] + 0.587 * FragColor[1] + 0.114 * FragColor[2];
    float t = time*L
    FragColor[0] = mod(t,1.0);
    FragColor[1] = mod(t,1.0);
    FragColor[2] = mod(t,1.0);
    
}
