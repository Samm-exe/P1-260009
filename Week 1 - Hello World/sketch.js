function setup() {
  createCanvas(400, 400);
}

function draw() {
  valW = "rgb(255, 255, 255)"
  background(valW);
  
  /*Dutch flag*/
    fill(255, 0, 0);
      rect(25, 45, 60, 15);
  
    fill(valW);
      rect(25, 60, 60, 15);
  
    fill(0, 0, 255);
      rect(25, 75, 60, 15);

  /*Checkerboard*/
    fill(valW);
      rect(25, 115, 60, 60);
    fill(0);
      rect(25, 115, 20, 20);
      rect(65, 115, 20, 20);
      rect(45, 135, 20, 20);
      rect(25, 155, 20, 20);
      rect(65, 155, 20, 20);

  /*House*/
    fill(valW);
      rect(25, 300, 70, 60);
      triangle(25, 300, 95, 300, 60, 250);
  

  /*Traffic light*/
    fill(225);
      rect(140, 50, 40, 90);
      rect(155, 140, 10, 20);

  /*Teksts*/
  fill(0);
  text("1. Sam Sneekes", 10, 20);
  text("2.", 10, 45);
  text("3.", 10, 115);
  text("4.", 10, 250);




}
