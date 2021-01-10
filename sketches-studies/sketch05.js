let x = 0, y =0;

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0);
}

function draw() {
    background(0);
  
    x = lerp(x, mouseX, 0.05);
    y = lerp(y, mouseY, 0.05);
  
    fill(255);
    stroke(255);
    ellipse(x, y, 66, 66);
  }
  