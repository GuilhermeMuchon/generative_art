let x = 10, y = 10;

// Random lines
function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0);
}

function draw() {
    x = x + random(-10, 10);
    y = y + random(-15, 15);

    if (x > windowWidth || x < -5) {
        x = 0;
    }

    if (y > windowHeight || y < -5) {
        y = 0;
    }

    stroke('#fae');
    strokeWeight(1);
    line(x + 1, y + 1, x + random(-100, 100), y + random(-100, 100));
}