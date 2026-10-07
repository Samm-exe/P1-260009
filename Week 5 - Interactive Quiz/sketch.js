let PowerFont;

function setup() {
  createCanvas(800, 600);
  PowerFont = loadFont("Powerful.ttf");
  for (let i = 0; i < 1; i++) {
    let StartButton = createButton("Start de quiz!!");
    StartButton.position(280, 450);
    StartButton.size(260, 90);
    StartButton.style('background', 'rgb(91, 219, 91)');
    StartButton.style('textSize', '300');
  }
}
function questionScreen() {
  strokeWeight(3);
  fill(255);
  //Vraag balk
  rect(20, 20, 760, 300, 50);
  rect(20, 330, 375, 120, 50);
  rect(405, 330, 375, 120, 50);
  rect(20, 460, 375, 120, 50);
  rect(405, 460, 375, 120, 50);
  //antwoord A hover
  if (mouseX >= 20 && mouseX <= 395 && mouseY >= 330 && mouseY <= 450) {
    fill(220);
    rect(20, 330, 375, 120, 50);
  }

  //antwoord B hover
  if (mouseX >= 405 && mouseX <= 780 && mouseY >= 330 && mouseY <= 450) {
    fill(220);
    rect(405, 330, 375, 120, 50);
  }
  // antwoord C hover
  if (mouseX >= 20 && mouseX <= 395 && mouseY >= 460 && mouseY <= 580) {
    fill(220);
    rect(20, 460, 375, 120, 50);
  }

  if (mouseX >= 405 && mouseX <= 780 && mouseY >= 460 && mouseY <= 580) {
    fill(220);
    rect(405, 460, 375, 120, 50);
  }
}
function draw() {
  background("rgb(173, 252, 177)");
  fill(255);
  // Header
  rect(10, 10, 780, 100, 20);
  textFont(PowerFont);
  textSize(18.5);
  fill(0);
  text("WELKOM  BIJ  DE  GROTE  ALGEMEEN  KENNIS  QUIZ", 20, 65);

  // rule block
  fill(255);
  rect(30, 140, 720, 420, 20);
  textSize(14);
  textFont(Arial);
}