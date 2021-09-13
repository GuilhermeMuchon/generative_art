document.body.onload = listSketches;

var sketchesList = [
    { id: "01", src: "https://i.redd.it/cosm6mk0jg941.jpg", title: 'foo', description: 'bar' },
    { id: "02", src: "https://i.redd.it/cosm6mk0jg941.jpg", title: 'foo', description: 'bar' },
    { id: "03", src: "https://i.redd.it/cosm6mk0jg941.jpg", title: 'foo', description: 'bar' },
    { id: "04", src: "https://i.redd.it/cosm6mk0jg941.jpg", title: 'foo', description: 'bar' },
    { id: "05", src: "https://i.redd.it/cosm6mk0jg941.jpg", title: 'foo', description: 'bar' },
    { id: "06", src: "https://i.redd.it/cosm6mk0jg941.jpg", title: 'foo', description: 'bar' }
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
        image.description = sketchesList[index].description;

        anchor.appendChild(image);
        divSketch.appendChild(anchor);

        var divSketches = document.getElementById("Sketches");
        divSketches.appendChild(divSketch);
    }
}