let turns = 0
let rectX = 80
let rectY = 80
let rectW = 330
let rectH = 330

function setup() {
  createCanvas(500, 500);

}
function mouseClicked() {
  turns = (turns + 1) % 2;
}
function draw() {
  background(220);
  console.log(turns)
 // speelveld base
  fill(0);
  noStroke();
  rect(80, 80, 330, 330, 15);


// speelvakjes
  fill("rgb(121, 120, 120)")
  rect(100, 100, 90, 90, 10);
  rect(200, 100, 90, 90, 10);
  rect(300, 100, 90, 90, 10);
  rect(100, 200, 90, 90, 10);
  rect(200, 200, 90, 90, 10);
  rect(300, 200, 90, 90, 10);
  rect(100, 300, 90, 90, 10);
  rect(200, 300, 90, 90, 10);
  rect(300, 300, 90, 90, 10);
}
