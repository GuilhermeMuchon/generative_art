let x = 10, y = 10;
let num1 = random(0, 255), num2 = random(0, 255), num3 = random(0, 255);
let decrease1 = false, decrease2 = false, decrease3 = false;
let increaseRate1 = 1, increaseRate2 = 1, increaseRate3 = 1;

// Recursive balls, dynamic color
function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0);
}

function draw() {
    drawCircle(width / 2, 280, 6);
    verifyAndIncrease();
}

function drawCircle(x, radius, level) {
    const tt = (num3 * level) / 4.0;
    fill(tt, num1, num2);
    ellipse(x, height / 2, radius * 2, radius * 2);
    if (level > 1) {
        level = level - 1;
        drawCircle(x - radius / 2, radius / 2, level);
        drawCircle(x + radius / 2, radius / 2, level);
    }
}

function verifyAndIncrease() {
    if (num1 < 255 && !decrease1) {
        num1 += increaseRate1;
    } else {
        num1 -= increaseRate1;
    }

    if (num1 > 255) {
        decrease1 = true;
        increaseRate1 = random(1, 10);
    } else if (num1 < 0) {
        decrease1 = false;
        increaseRate1 = random(1, 10);
    }

    if (num2 < 255 && !decrease2) {
        num2 += increaseRate2;
    } else {
        num2 -= increaseRate2;
    }

    if (num2 > 255) {
        decrease2 = true;
        increaseRate2 = random(1, 10);
    } else if (num2 < 0) {
        decrease2 = false;
        increaseRate2 = random(1, 10);
    }

    if (num3 < 255 && !decrease3) {
        num3 += increaseRate3;
    } else {
        num3 -= increaseRate3;
    }

    if (num3 > 255) {
        decrease3 = true;
        increaseRate3 = random(1, 10);
    } else if (num3 < 0) {
        decrease3 = false;
        increaseRate3 = random(1, 10);
    }
}