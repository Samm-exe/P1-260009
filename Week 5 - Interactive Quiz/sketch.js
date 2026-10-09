let PowerFont;
let CoinyFont;
let StartButton;
let AwnserButtons = [];
let aButton;
let ShowScreen = 0;
let correctAwnser;
let score = 0;
let currentquestion = 0;
let posAwnser = [
  { x: 80, y: 350 },
  { x: 475, y: 350 },
  { x: 80, y: 480 },
  { x: 475, y: 480 }
]
let questions = [
  {
    question: "1. Welk pokedex nummer heeft Pikachu?",
    awnsers: ["130", "323", "1", "25"],
    correctAwnser: "25"
  },
  {
    question: "2. Welk dier heeft een groter oog dan zn brein?",
    awnsers: ["Leeuw", "Cavia", "Struisvogel", "Stier"],
    correctAwnser: "Struisvogel"
  },
  {
    question: "3. Welk van deze dieren is ouder dan bomen?",
    awnsers: ["Haaien", "Eekhorns", "Honden", "Giraffen"],
    correctAwnser: "Haaien"
  },
  {
    question: "4. Welk dier is het nationale dier van Schotland?",
    awnsers: ["Paard", "Beer", "Eenhoorn", "Schildpad"],
    correctAwnser: "Eenhoorn"
  },
  {
    question: "5. Wat is de vorm van de planeet Mars?",
    awnsers: ["Cirkel", "Vierkant", "Rugby ball", "Driehoek"],
    correctAwnser: "Rugby ball"
  },
  {
    question: "6. Hoe duur zijn alle organen in je lichaam bij elkaar?",
    awnsers: ["1 miljoen", "5 miljoen", "100 duizend", "3 miljoen"],
    correctAwnser: "3 miljoen"
  },
  {
    question: "7. Hoeveel van de oceaan vloer hebben we al onderzocht?",
    awnsers: ["10 procent", "1 procent", "0,1 procent", "0,01 procent"],
    correctAwnser: "0,01 procent"
  },
  {
    question: "8. Waar waren kettingzagen eerst voor gemaakt?",
    awnsers: ["Bomen zagen", "Helpen bij geboorte", "De bouw van huizen", "Kunst maken"],
    correctAwnser: "Helpen bij geboorte"
  },
  {
    question: "9. Hoe communiceren giraffen met elkaar?",
    awnsers: ["neuriën", "fluiten", "blaffen", "Met hun lange nekken"],
    correctAwnser: "neuriën"
  },
  {
    question: "10. Wat was de aller eerste taal?",
    awnsers: ["Engels", "Spaans", "Lachen", "Frans"],
    correctAwnser: "Lachen"
  }
]
let yippeimg;
let goedimg;


function setup() {
  createCanvas(800, 600);
  console.log(score);
  PowerFont = loadFont("Powerful.ttf");
  CoinyFont = loadFont("Coiny-Cyrillic.ttf");
  StartButton = createButton("Start de quiz!!");
  StartButton.position(280, 450);
  StartButton.size(260, 90);
  StartButton.style('background', 'rgb(91, 219, 91)');
  StartButton.style('font-size', '30px');
  StartButton.style('border-radius', '15px')
  StartButton.style('font-family', 'Arial')
  StartButton.mousePressed(showquestions);
  startScreen();
}

function preload() {
  Tooter = loadSound("Toot.mp3");
  yippeimg = loadImage("blu.png");
  goedimg = loadImage("blue.png");
}

function makeAwnserButtons() {
  // Eerst eventuele oude knoppen verwijderen uit je browser
  for (let i = 0; i < AwnserButtons.length; i++) {
    AwnserButtons[i].remove();
  }
  AwnserButtons = []; // Maak de array weer leeg
  
  let awnsers = questions[currentquestion].awnsers;

  for (let i = 0; i < awnsers.length; i++) {
    aButton = createButton(awnsers[i]);
    aButton.position(posAwnser[i].x, posAwnser[i].y);
    aButton.size(260, 100);
    aButton.style('background', 'transparent');
    aButton.style('font-family', 'Coiny-Cyrillic.ttf')
    aButton.style('font-size', '30px');
    aButton.style('color', 'black');
    aButton.style('border', 'none');
    aButton.mousePressed(checkAwnser);

    AwnserButtons.push(aButton);
  }
}

function checkAwnser() {
  if (this.html() == questions[currentquestion].correctAwnser) {
    score += 1
  }
  currentquestion += 1;

  // Check of er nog vragen over zijn
  if (currentquestion < questions.length) {
    makeAwnserButtons(); // Maak knoppen voor de volgende vraag
  }
  else {
   // Verwijderd de laatste knoppen
    for (let i = 0; i < AwnserButtons.length; i++) {
      AwnserButtons[i].remove();
      ShowScreen +=1
    }

  }
}
function showquestions() {
  ShowScreen += 1;
  makeAwnserButtons();
  StartButton.hide();
}
function startScreen() {
  background("rgb(173, 252, 177)");
  // Header 
  fill(255);
  rect(10, 10, 780, 100, 20);
  fill(0);
  textFont(PowerFont);
  textSize(18.5);
 
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
  fill(0);
  noStroke();
  textAlign(CENTER, CENTER);
  textFont(CoinyFont);
  textSize(24);
  // Toon de huidige vraag in het vragen vak
  text(questions[currentquestion].question, 400, 170);
  textAlign(LEFT, BASELINE); // zorgt dat in de rest van de code te text niet verplaatst
}

function endScreen() {
  background("rgb(173, 252, 177)")
  // Header 
  fill(255);
  rect(10, 10, 780, 100, 20);
  textFont(PowerFont);
  textSize(14);
  fill(0);
  text("DAT  WAS  HET  EINDE  VAN  DE  GROTE  ALGEMEEN  KENNIS  QUIZ!", 20, 65);

  // text block
  fill(255);
  rect(30, 140, 720, 420, 20);
  textSize(25);
  fill(0);
  textFont(CoinyFont);
  text("- De quiz was super leuk toch??", 40, 310);
  text("- Laat mij een mooie review achter op yelp <3", 40, 340);
  text("- Je eind score is:"+ score, 40, 370);
  image(goedimg, 30, 90, 200, 200);
  image(yippeimg, 500, 400 , 200, 200);
}
function draw() {
  if (ShowScreen >= 2) {
    endScreen();
  }
  if (ShowScreen == 1) {
    questionScreen();
    
  }
  
}