let score = 0

function setup() {
  createCanvas(800, 400);

}


function draw() {
  background(220);
  fill(0);
  text('1. Houd B in om een blokje te laten verschijnen.', 20,20);
  text('2. Druk op spatie om het getal op 0 te zetten.', 20, 120);
  text('3. Druk op enter om van rood -> groen -> oranje te gaan.', 20, 240);
  text('4. Beweeg de eightball met WASD of de pijltjestoetsen', 360, 20);

  if (keyIsDown(66)) {
    fill(255);
    rect(40, 40, 60, 60);
  }
  score = score + 1;
  text(score, 70, 140);
  if (keyIsDown(32)) {
    score = 0
  }
  if (score >= 500) {
    score = 0
  }
}
