let PowerFont;
let CoinyFont;
let StartButton;
let ShowquestionScreen = 0;

function setup() {
  createCanvas(800, 600);
  PowerFont = loadFont("Powerful.ttf");
  CoinyFont = loadFont("Coiny-Cyrillic.ttf");
  StartButton = createButton("Start de quiz!!");
  StartButton.position(280, 450);
  StartButton.size(260, 90);
  StartButton.style('background', 'rgb(91, 219, 91)');
  StartButton.style('font-size', '30px');
  StartButton.mousePressed(showquestions);
  startScreen();
}
function showquestions () {
  ShowquestionScreen += 1;
}
function startScreen() {
  background("rgb(173, 252, 177)");
  // Header 
  fill(255);
  rect(10, 10, 780, 100, 20);
  textFont(PowerFont);
  textSize(18.5);
  fill(0);
  text("WELKOM  BIJ  DE  GROTE  ALGEMEEN  KENNIS  QUIZ", 20, 65);

  // rule block
  fill(255);
  rect(30, 140, 720, 420, 20);
  textSize(25);
  fill(0);
  textFont(CoinyFont);
  text("- Deze quiz bestaat uit 10 vragen", 40, 180);
  text("- Elke vraag is een multiple choice vraag", 40, 220);
  text("- Voor elk goed antwoord krijg je een punt", 40, 260);
  text("- Hoe moeilijker de vraag, hoe meer punten je krijgt", 40, 300);
  text("- Aan het eind van de quiz zie je je score", 40, 340);
  StartButton.show();
}

function questionScreen() {
  background("rgb(173, 252, 177)");
  strokeWeight(3);
  fill(255);
  StartButton.hide();
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
  // antwoord D hover
  if (mouseX >= 405 && mouseX <= 780 && mouseY >= 460 && mouseY <= 580) {
    fill(220);
    rect(405, 460, 375, 120, 50);
  }
}

function draw() {
  if (ShowquestionScreen >= 1) {
    questionScreen();
  }
}