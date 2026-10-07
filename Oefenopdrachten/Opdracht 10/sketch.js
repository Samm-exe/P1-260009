let kleuren = ["red", "green", "blue", "orange", "purple", "yellow"];
let bestanden = ["elephant", "giraffe", "hippo", "monkey", "panda", "parrot", "penguin", "pig", "rabbit", "snake"];
let knoppen1 = [];
let knoppen2 = [];
let achtergrond = 'white';
let afbeeldingen = [];
let afb;

function preload() {
  for (let i = 0; i < bestanden.length; i ++) {
    afb = loadImage(bestanden[i] + '.png')
    afbeeldingen.push(afb)
  }
}

function setup() {
  createCanvas(800, 400);
  for (let i = 0; i < kleuren.length; i ++) {
    let button1 = createButton(kleuren[i]);
    button1.position(20 + i * 65, 30);
    button1.style('background', kleuren[i]);
    button1.mousePressed(BGkleur);
    knoppen1.push(button1);
  }
  for (let i = 0; i < bestanden.length; i ++) {
    let button2 = createButton(bestanden[i]);
    button2.position(20 + i * 70, 80);
    button2.style('background', 'pink');
    button2.mousePressed(showDier);
    knoppen2.push(button2);
  }
}

function BGkleur() {
  /* this = kiest de knop waar je op klikt
     html = leest wat er op de knop staat*/
  achtergrond = this.html();
  // Checkt of de knop gelijk is aan de achtergrond, en haalt hem weg als het zo is
  for (let i = 0; i < kleuren.length; i ++) {
    if (kleuren[i] == achtergrond) {
      knoppen1[i].hide();
    }
    else {
      knoppen1[i].show();
    }
  }
}

function showDier() {
  let naamDier = this.html();
  
}

function draw() {
  background(achtergrond);
}
