let Sun = 80;
let angle = 0;
let traffic_colors = 0;
let cloudspeed = 1;
let cloudspeed2 = 0.8;
let cloud1 = 0;
let cloud2 = 140;
let cloud3 = 340;
let car1 = 0
let carspeed1 = 3
let car2 = 0
let carspeed2 = 5

function TurnSun() {
  push()
  translate (400, 450);
  if (angle < 360) {
    rotate(angle)
    angle = angle + 0.3;
  }
  if (angle >= 360) {
    angle = 0
  }
  /*Sun*/
  noStroke();
  fill(251,225,0);
  circle(Sun, 400, 70);
  pop()
}
function keyPressed() {
    if (keyCode === 13) {
      traffic_colors = (traffic_colors + 1) % 3;
      console.log(traffic_colors)
    }
}
function DrawTrafficLight() {
  if (traffic_colors == 0) {
    fill(255, 0, 0)
    circle(680, 395, 25)
  }
  else if (traffic_colors == 1) {
    fill(0, 255, 0)
    circle(680, 455, 25)
  }
   else if (traffic_colors == 2) {
    fill(255, 174, 0)
    circle(680, 425, 25);
  }
}

function DrawLeaves(LeafOrigin) {
  let xPos = Math.sin(frameCount * 0.02) * 8 + LeafOrigin
  let xPos2 = Math.sin(frameCount * -0.02) * 8 + LeafOrigin
  let xPos3 = Math.sin(frameCount * 0.01) * 8 + LeafOrigin
  fill(0, 133, 0);
  circle(xPos, 395, 70);
  fill(0, 89, 0);
  circle(xPos3, 405, 70);
  fill(91, 148, 5);
  circle(xPos2, 400, 70);
}

function setup() {
  createCanvas(800, 600);
  angleMode(DEGREES);
}

function draw() {
  background(117, 217, 247);

  TurnSun()

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
  fill(0, 150, 0);
  circle(680, 455, 25);

  DrawTrafficLight()

  /*Trees*/
  noStroke()
  fill(153, 79, 0);
  rect(80, 430, 20, 60);
  rect(240, 400, 20, 90);
  rect(430, 430, 20, 60);
  DrawLeaves(95);
  DrawLeaves(245);
  DrawLeaves(445);


  if (traffic_colors == 0 && car1 == 300) {
    carspeed1 = 0
  }
  if (traffic_colors == 0 && car2 == 320) {
    carspeed2 = 0
  } 
  if (traffic_colors == 2) {
    carspeed1 = 1.5
  }
  if (traffic_colors == 2) {
    carspeed2 = 2
  } 
  if (traffic_colors == 1) {
    carspeed1 = 3
  }
  if (traffic_colors == 1) {
    carspeed2 = 5
  }

  /*Car 1*/
  noStroke()
  fill(141, 0, 181);
  rect(car1 + 140, 450, 110, 70);
  rect(car1 + 240, 485, 55, 35);
  fill(163, 163, 255);
  rect(car1 + 225, 450, 25, 35);
  fill(0);
  circle(car1 + 160, 520, 35);
  circle(car1 + 280, 520, 35);

  car1 = car1 + carspeed1
  if (car1 >= 900) {
    car1 = -500
  }
  
  /*Car 2*/
  noStroke()
  fill(227, 0, 0);
  rect(car2 + 240, 510, 110, 70);
  rect(car2 + 340, 545, 55, 35);
  fill(163, 163, 255);
  rect(car2 + 325, 510, 25, 35);
  fill(0);
  circle(car2 + 260, 580, 35);
  circle(car2 + 380, 580, 35);

  car2 = car2 + carspeed2
  if (car2 >= 900) {
    car2 = -400
  }

  /*Clouds*/
  noStroke();
  fill(189, 189, 189);
  ellipse(cloud1 + 240, 90, 90, 50);
  ellipse(cloud1 + 300, 90, 90, 40);
  ellipse(cloud1 + 280, 70, 50, 30);
  fill(255, 255, 255);
  ellipse(cloud1 + 240, 100, 90, 50);
  ellipse(cloud1 + 300, 100, 90, 40);
  ellipse(cloud1 + 280, 80, 50, 30);

  cloud1 = cloud1 - cloudspeed
    if (cloud1 <= -350) {
      cloud1 = 700
    }
  noStroke();
  fill(189, 189, 189);
  ellipse(cloud2 + 500, 120, 100, 40);
  ellipse(cloud2 + 550, 110, 90, 50);
  ellipse(cloud2 +520, 90, 90, 50);
  fill(255, 255, 255);
  ellipse(cloud2 + 500, 130, 100, 40);
  ellipse(cloud2 + 550, 120, 90, 50);
  ellipse(cloud2 + 520, 100, 90, 50);

  cloud2 = cloud2 - cloudspeed2
    if (cloud2 <= -550) {
      cloud2 = 700
    }
  noStroke();
  fill(189, 189, 189);
  ellipse(cloud3 + 500, 150, 100, 40);
  ellipse(cloud3 + 550, 140, 90, 50);
  ellipse(cloud3 +520, 120, 90, 50);
  fill(255, 255, 255);
  ellipse(cloud3 + 500, 160, 100, 40);
  ellipse(cloud3 + 550, 150, 90, 50);
  ellipse(cloud3 + 520, 130, 90, 50);

  cloud3 = cloud3 - cloudspeed
    if (cloud3 <= -600) { 
      cloud3 = 700
    }  
}
