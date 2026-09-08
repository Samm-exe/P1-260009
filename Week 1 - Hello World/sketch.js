function setup() {
  createCanvas(700, 400);
}

function draw() {
  valW = "rgb(255, 255, 255)"
  background(valW);
  
  /*Dutch flag*/
    strokeWeight(1);
    fill(255, 0, 0);
      rect(25, 45, 60, 15);
  
    fill(valW);
      rect(25, 60, 60, 15);
  
    fill(0, 0, 255);
      rect(25, 75, 60, 15);

  /*Checkerboard*/
    strokeWeight(1);
    fill(valW);
      rect(25, 115, 60, 60);
    fill(0);
      rect(25, 115, 20, 20);
      rect(65, 115, 20, 20);
      rect(45, 135, 20, 20);
      rect(25, 155, 20, 20);
      rect(65, 155, 20, 20);

  /*House*/
    strokeWeight(1);
    fill(valW);
      rect(25, 300, 70, 60);
      triangle(25, 300, 95, 300, 60, 250);
  

  /*Traffic light*/
      strokeWeight(1);
    fill(225);
      rect(140, 50, 40, 100);
      rect(155, 150, 10, 20);
    fill(255, 0, 0);
      circle(160, 65, 25);
    fill(251, 255, 0)
      circle(160, 100, 25);
    fill(0, 255, 0);
      circle(160, 135, 25);

  /*Dice*/
    fill(valW);
      strokeWeight(2);
      rect(140, 190, 100, 100);
    fill(0);
      circle(165, 215, 20);
      circle(215, 215, 20);
      circle(165, 265, 20);
      circle(215, 265, 20);


  /*Pixelart mario*/
  strokeWeight(1);
  /*Red*/
  fill(255,0,0);
  rect(300, 60, 15, 15);
  rect(315, 60, 15, 15);
  rect(330, 60, 15, 15);
  rect(345, 60, 15, 15);
  rect(360, 60, 15, 15);
  rect(375, 60, 15, 15);
  rect(285, 75, 15, 15);
  rect(300, 75, 15, 15);
  rect(315, 75, 15, 15);
  rect(330, 75, 15, 15);
  rect(345, 75, 15, 15);
  rect(360, 75, 15, 15);
  rect(375, 75, 15, 15);
  rect(390, 75, 15, 15);
  rect(405, 75, 15, 15);
  rect(420, 75, 15, 15);
  /*Brown*/
  fill(176, 139, 82);
  rect(285, 90, 15, 15);
  rect(300, 90, 15, 15);
  rect(315, 90, 15, 15);
  rect(300, 105, 15, 15);
  rect(300, 120, 15, 15);
  rect(315, 120, 15, 15);
  rect(270, 105, 15, 15);
  rect(270, 120, 15, 15);
  rect(270, 135, 15, 15);
  rect(285, 135, 15, 15);
  /*Beige*/
  fill(245, 204, 178)
  rect(330, 90, 15, 15);
  rect(345, 90, 15, 15);
  rect(360, 90, 15, 15);
  rect(285, 105, 15, 15);
  rect(285, 120, 15, 15);
  rect(315, 105, 15, 15);
  rect(330, 105, 15, 15);
  rect(345, 105, 15, 15);
  rect(360, 105, 15, 15);

  /*Teksts*/
  fill(0);
  strokeWeight(1);
  text("1. Sam Sneekes", 10, 20);
  text("2.", 10, 45);
  text("3.", 10, 115);
  text("4.", 10, 250);
  text("5.", 120, 50);
  text("6.", 120, 190);

}