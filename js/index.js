document.body.onload = listSketches;

var sketchesList = [
    { id: "01", src: "https://raw.githubusercontent.com/GuilhermeMuchon/generative_art/master/img/sketch02.png", title: 'Sketch 01', alt: 'Sketch 01' },
    { id: "02", src: "https://raw.githubusercontent.com/GuilhermeMuchon/generative_art/master/img/sketch04.png", title: 'Sketch 02', alt: 'Sketch 02' },
    { id: "03", src: "https://i.redd.it/cosm6mk0jg941.jpg", title: 'Sketch 03', alt: 'Sketch 03' },
    { id: "04", src: "https://raw.githubusercontent.com/GuilhermeMuchon/generative_art/master/img/sketch05.png", title: 'Sketch 04', alt: 'Sketch 04' },
    { id: "05", src: "https://raw.githubusercontent.com/GuilhermeMuchon/generative_art/master/img/sketch01.png", title: 'Sketch 05', alt: 'Sketch 05' },
    { id: "06", src: "https://raw.githubusercontent.com/GuilhermeMuchon/generative_art/master/img/sketch06.png", title: 'Sketch 06', alt: 'Sketch 06' }
];

function listSketches() {
    for (let index = 0; index < sketchesList.length; index++) {
        var divSketch = document.createElement("div");
        divSketch.className = "SketchHolder";

        var anchor = document.createElement("a");
        anchor.href = window.location.href + "/sketches-studies/sketch.html?sketchNumber=" + sketchesList[index].id;

        var image = document.createElement("img");
        image.src = sketchesList[index].src;
        image.title = sketchesList[index].title;
        image.alt = sketchesList[index].alt;

        anchor.appendChild(image);
        divSketch.appendChild(anchor);

        var divSketches = document.getElementById("Sketches");
        divSketches.appendChild(divSketch);
    }
}