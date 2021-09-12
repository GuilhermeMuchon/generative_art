// Spaceship flight
// Code inpired by this incredible person below:
// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/17WoOqgXsRM

let stars = [];
let speed, img;

function preload() {
    img = loadImage('./assets/cockpit.png');
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    
    for (let i = 0; i < 800; i++) {
        stars[i] = new Star();
    }
}

function draw() {
    background(0);
    
    speed = map(mouseY * 2, 1, height, 1, 50);
    translate(width / 2, height / 2);
    
    for (let i = 0; i < stars.length; i++) {
        stars[i].update();
        stars[i].show();
    }

    image(img, -(width / 2), -(height / 2), windowWidth, windowHeight);
}

function Star() {
    this.x = random(-width, width);
    this.y = random(-height, height);
    this.z = random(width);
    this.pz = this.z;
    this.red = random(0, 255);
    this.green = random(0, 255);
    this.blue = random(0, 255);
    
    this.update = function() {
        this.z = this.z - speed;
        if (this.z < 1) {
            this.z = width;
            this.x = random(-width, width);
            this.y = random(-height, height);
            this.pz = this.z;
        }
    };
    
    this.show = function() {
        fill(this.red, this.green, this.blue);
        noStroke();
        
        var sx = map(this.x / this.z, 0, 1, 0, width);
        var sy = map(this.y / this.z, 0, 1, 0, height);
        
        var r = map(this.z, 0, width, 16, 0);
        ellipse(sx, sy, r, r);
        
        var px = map(this.x / this.pz, 0, 1, 0, width);
        var py = map(this.y / this.pz, 0, 1, 0, height);
        
        this.pz = this.z;
        
        stroke(255);
        line(px, py, sx, sy);
    };
}