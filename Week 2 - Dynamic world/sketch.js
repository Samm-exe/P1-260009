function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(117, 217, 247);
  noStroke();

  /*Mountains*/
  fill(100);
  triangle(250, 480, 550, 480, 360, 200);
  fill(150);
  triangle(30, 480, 370, 480, 200, 250);
  triangle(450, 480, 750, 480, 585, 150);

  /*Road*/
  fill(47, 156, 47);
  rect(0, 480, 800, 490);
  fill(62, 191, 62);
  rect(0, 490, 800, 500);


  fill(150);
  rect(0, 500, 800, 600);
  stroke(255);
  strokeWeight(7);
  strokeCap(ROUND);
  line(0, 550, 90, 550);
  line(130, 550, 220, 550);
  line(250, 550, 340, 550);
  line(370, 550, 460, 550);
  line(490, 550, 580, 550);
  line(610, 550, 700, 550);
  line(730, 550, 820, 550);

}
