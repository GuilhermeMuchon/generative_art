let increase = true;

// Grow and shrink circles
function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0);

    circle9 = new Circle(800, 255);
    circle8 = new Circle(400, 0);
    circle7 = new Circle(200, 255);
    circle6 = new Circle(100, 0);
    circle5 = new Circle(50, 255);
    circle4 = new Circle(25, 0);
    circle3 = new Circle(12, 255);
    circle2 = new Circle(5, 0);
    circle1 = new Circle(1, 255);
}

function draw() {
    displayCircle(circle9);
    displayCircle(circle8);
    displayCircle(circle7);
    displayCircle(circle6);
    displayCircle(circle5);
    displayCircle(circle4);
    displayCircle(circle3);
    displayCircle(circle2);
    displayCircle(circle1);
}

function displayCircle(circle) {
    circle.display();

    if (circle.diameter >= windowWidth + 300) {
        increase = false;
    }

    if (circle.diameter <= 10) {
        increase = true;
    }

    circle.increaseSize(increase);
}

class Circle {
    constructor(diameter, color) {
        this.x = windowWidth / 2;
        this.y = windowHeight / 2;
        this.diameter = diameter;
        this.speed = 5;
        this.color = color;
    }

    increaseSize(increase) {
        if (increase) {
            this.diameter += this.speed;
        } else {
            this.diameter -= this.speed;
        }
    }

    display() {
        fill(this.color, this.color, this.color);
        ellipse(this.x, this.y, this.diameter);
    }
}