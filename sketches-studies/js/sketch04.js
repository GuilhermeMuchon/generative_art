let MAX = 10;

function setup() {
    pixelDensity(1);
    createCanvas(windowWidth, windowHeight);
    background(0);
}

function draw() {
    stroke(150, 20, 40, 60);
    for (let i = 0; i < MAX; i++) {
        line(0, 0, random(0, windowWidth), random(0, windowWidth));
        line(0, 0, random(0, windowWidth), random(0, windowWidth));
        line(0, 0, random(0, windowWidth), random(0, windowWidth));   
    }

    stroke(50, 20, 255, 20);
    for (let i = 0; i < MAX; i++) {
        line(windowWidth, windowHeight, random(0, windowWidth), random(0, windowWidth));
        line(windowWidth, windowHeight, random(0, windowWidth), random(0, windowWidth));
        line(windowWidth, windowHeight, random(0, windowWidth), random(0, windowWidth));
    }

    stroke(255, 100, 40, 40);
    for (let i = 0; i < MAX; i++) {
        line(0, windowHeight, random(0, windowWidth), random(0, windowWidth));
        line(0, windowHeight, random(0, windowWidth), random(0, windowWidth));
        line(0, windowHeight, random(0, windowWidth), random(0, windowWidth));
    }

    stroke(255, 255, 40, 20);
    for (let i = 0; i < MAX; i++) {
        line(windowWidth, 0, random(0, windowWidth), random(0, windowWidth));
        line(windowWidth, 0, random(0, windowWidth), random(0, windowWidth));
        line(windowWidth, 0, random(0, windowWidth), random(0, windowWidth));
    }
}