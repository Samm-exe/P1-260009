let backgroundimg;
let samStand;

function setup() {
  createCanvas(1200, 675);
}
function preload() {
backgroundimg = loadImage("boe.jpg");
samStand = loadImage("samStand.png");
}
function draw() {
  background(backgroundimg);

  image(samStand, 300, 100, 550, 700);
}


