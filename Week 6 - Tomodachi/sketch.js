let backgroundimg;
let eatarrowright;
let eatarrowleft;
let sleeparrowright;
let sleeparrowleft;
let sitarrowright;
let sitarrowleft;
let washarrowright;
let washarrowleft

function setup() {
  createCanvas(1200, 675);
}
function preload() {
backgroundimg = loadImage("assets/boe.jpg");
eatarrowright = loadImage("assets/eat_arrow_right.png");
eatarrowleft = loadImage("assets/eat_arrow_left.png");
sitarrowright = loadImage("assets/sit_arrow_right.png");
sitarrowleft = loadImage("assets/sit_arrow_left.png");
sleeparrowright = loadImage("assets/sleep_arrow_right.png");
sleeparrowleft = loadImage("assets/sleep_arrow_left.png");
washarrowright = loadImage("assets/wash_arrow_right.png");
washarrowleft = loadImage("assets/wash_arrow_left.png");
}
function draw() {
  background(backgroundimg);
}


