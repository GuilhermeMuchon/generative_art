let xArray, yArray;
let randWidthArray, randHeightArray;
let wIncrementArray, hIncrementArray;

function setup() {
    pixelDensity(1);
    createCanvas(windowWidth, windowHeight);
    background(20);

    xArray = [0, windowWidth, windowWidth, 0];
    yArray = [0, 0, windowHeight, windowHeight];

    randWidthArray = [random(0, windowWidth), random(0, windowWidth), random(0, windowWidth), random(0, windowWidth)];
    randHeightArray = [random(0, windowHeight), random(0, windowHeight), random(0, windowHeight), random(0, windowHeight)];

    wIncrementArray = [true, true, true, true];
    hIncrementArray = [true, true, true, true];
    
    stroke(255);
}

function draw() {

    for (let i = 0; i < xArray.length; i++) {
        if (randWidthArray[i] > (windowWidth + (windowWidth / 5)) || randWidthArray[i] < (0 - (windowWidth / 5))) {
            randWidthArray[i] = random(0, windowWidth);
            wIncrementArray[i] = !wIncrementArray[i];
            stroke(random(0, 255), random(0, 255), random(0, 255));
        }
    
        if (randHeightArray[i] > (windowHeight + (windowHeight / 5)) || randHeightArray[i] < (0 - (windowHeight / 5))) {
            randHeightArray[i] = random(0, windowHeight);
            hIncrementArray[i] = !hIncrementArray[i];
            stroke(random(0, 255), random(0, 255), random(0, 255));
        }

        randWidthArray[i] = wIncrementArray[i] ? ++randWidthArray[i] : --randWidthArray[i];
        randHeightArray[i] = hIncrementArray[i] ? ++randHeightArray[i] : --randHeightArray[i];

        xArray[i] = lerp(xArray[i], randWidthArray[i], 0.002);
        yArray[i] = lerp(yArray[i], randHeightArray[i], 0.002);
    
        line(xArray[i], yArray[i], xArray[i], yArray[i]);
    }
}
