let colors = [];
let posS = [];

function setup() {
  createCanvas(800, 600);
  // pushed kleuren en posities naar de arrays voor gebruik
  colors.push([random(255), random(255), random(255)]);
  posS.push([random(0, 800), random(0, 600), 50, 50]);
}

function draw() {
  background(255);

}
