let score = 0
let traffic_colors = 0
let Xball = 420
let Yball = 90

function setup() {
  createCanvas(800, 400);

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
    circle(180, 265, 25)
  }
  else if (traffic_colors == 1) {
    fill(0, 255, 0)
    circle(180, 325, 25)
  }
   else if (traffic_colors == 2) {
    fill(255, 174, 0)
    circle(180, 295, 25);
  }
}

function draw() {
  background(220);
  fill(0);
  textSize(15);
  strokeWeight(1);
  text('1. Houd B in om een blokje te laten verschijnen.', 20,20);
  text('2. Druk op spatie om het getal op 0 te zetten.', 20, 120);
  text('3. Druk op enter om van rood -> groen -> oranje te gaan.', 20, 240);
  text('4. Beweeg de eightball met WASD of de pijltjestoetsen', 360, 20);

  if (keyIsDown(66)) {
    fill(255);
    rect(40, 40, 60, 60);
  }
  score = score + 1;
  fill(0);
  text(score, 70, 140);
  if (keyIsDown(32)) {
    score = 0
  }
  if (score >= 500) {
    score = 0
  }
  
  /*Traffic light*/
  stroke(0)
  strokeWeight(1);
  fill(175);
  rect(155, 250, 50, 90);
  rect(170, 340, 20, 30);

  noStroke()
  fill(166, 0, 0);
  circle(180, 265, 25);
  fill(214, 111, 0);
  circle(180, 295, 25);
  fill(0, 150, 0);
  circle(180, 325, 25);

  DrawTrafficLight()

  /*Eightball*/
  textSize(50);
  fill(0);
  circle(Xball, Yball, 120);
  fill(255);
  circle(Xball, Yball -5, 90);
  fill(0);
  text('8', Xball - 13, Yball + 5);

  if (keyIsDown(UP_ARROW) ||  keyIsDown(87)){
    Yball = Yball - 1
  }
  if (keyIsDown(DOWN_ARROW) ||  keyIsDown(83)){
    Yball = Yball + 1
  }
  if (keyIsDown(LEFT_ARROW) ||  keyIsDown(65)){
    Xball = Xball - 1
  }
  if (keyIsDown(RIGHT_ARROW) || keyIsDown(68)){
    Xball = Xball + 1
  }
  if (Xball >= 850) {
    Xball = -50
  }
  if (Xball <= -50) {
    Xball = 850
  }
  if (Yball >= 470) {
    Yball = -50
  }
  if (Yball <= -50) {
    Yball = 470
  }

}
