let dice_value = 0;
let roll_time = 0;

function setup() {
  createCanvas(400, 400);
}

function keyPressed() {
  if (keyCode == 32) {
    rolldice()
  }
}
function rolldice() { 
  dice_value = round(random(1,6));
}
function draw() {
  background(220);
  /*Dice*/
  fill(255);
  strokeWeight(2);
  rect(140, 190, 100, 100);

  if (dice_value == 1) {
    fill(0);
    circle(190, 240, 20);
  }
  if (dice_value == 2) {
    fill(0);
    circle(165, 215, 20);
    circle(215, 265, 20);
  }
  if (dice_value == 3) {
    fill(0);
    circle(165, 215, 20);
    circle(190, 240, 20);
    circle(215, 265, 20);
  }
  if (dice_value == 4) {
    fill(0);
    circle(165, 215, 20);
    circle(215, 215, 20);
    circle(165, 265, 20);
    circle(215, 265, 20);
  }
  if (dice_value == 5) {
    fill(0);
    circle(165, 215, 20);
    circle(215, 215, 20);
    circle(190, 240, 20);
    circle(165, 265, 20);
    circle(215, 265, 20);
  }
  if (dice_value == 6) {
    fill(0);
    circle(165, 215, 20);
    circle(165, 240, 20);
    circle(165, 265, 20);  
    circle(215, 215, 20);
    circle(215, 240, 20);
    circle(215, 265, 20);
  }
}