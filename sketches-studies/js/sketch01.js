let x = 0, y = 0;

// Random Y, linear X, balls, random color
function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0);
}

function draw() {
    x = x + 6;
    y = y + random(-10, 10);

    fill(random(100, 150), random(100, 150), random(100, 150));

    if (x > windowWidth) {
        x = random(0, 800);
    }

    if (y > windowHeight || y < 0) {
        y = 0;
    }

    ellipse(x, y, 80, 80);
}