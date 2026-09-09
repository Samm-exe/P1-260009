function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(117, 217, 247);

  /*Mountains*/
  stroke(0);
  strokeWeight(2);
  fill(100);
  triangle(250, 480, 550, 480, 360, 200);
  fill(150);
  triangle(30, 480, 370, 480, 200, 250);
  triangle(450, 480, 750, 480, 585, 150);

  /*Road*/
  noStroke()
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

  /*Traffic light*/
  stroke(0)
  strokeWeight(1);
  fill(175);
  rect(655, 380, 50, 90);
  rect(670, 470, 20, 30);

  noStroke()
  fill(166, 0, 0);
  circle(680, 395, 25);
  fill(214, 111, 0);
  circle(680, 425, 25);
  fill(0, 255, 0);
  circle(680, 455, 25);

  /*Trees*/
  noStroke()
  fill(153, 79, 0);
  rect(80, 430, 20, 60);
  rect(240, 400, 20, 90);
  rect(430, 430, 20, 60);

  fill(91, 148, 5);
  circle(90, 400, 70);
  circle(250, 370, 70);
  circle(440, 400, 70);

  /*Sun*/
  noStroke();
  fill(251,225,0);
  circle(80, 80, 70);

  /*Clouds*/
  noStroke();
  fill(255, 255, 255);
  ellipse(240, 100, 90, 50);
  ellipse(300, 100, 90, 40);
  ellipse(280, 80, 50, 30);
  ellipse(500, 130, 100, 40);
  ellipse(550, 120, 90, 50);
  ellipse(520, 100, 90, 50)
}

