function setup() {
  createCanvas(800, 400);
}

function tekenHuis(x, y) {
  fill("rgb(255, 255, 255)");
  rect(x, y, 80, 50);
  triangle(x, y, x + 80, y, x + 40, y - 40);
  rect(x + 10, y + 25, 15, 25);
  rect(x + 45, y + 15, 25, 20);
}

function tekenCircle(x, y, d) {
  fill("rgb(234, 255, 0)");
  circle(x, y, d);
}

function tekenRechthoek(x, y, w, h) {
  fill("rgb(0, 203, 254)");
  rect(x, y, w, h);
}

function tekenLijn(x1, y1, x2, y2) {
  fill(0);
  line(x1, y1, x2, y2);
}

function tekenText(x, y, kleur, size) {
  textSize(size);
  fill(kleur);
  text("De bakzal straat", x, y);
}

function optelGetal(a, b) {
  textSize(20);
  return a + b;
}

function deelGetal(a, b) {
  textSize(20);
  return a / b;
}

function keerGetal(a, b) {
  textSize(20);
  return a * b;
}

function minGetal(a, b) {
  textSize(20);
  return a - b;
}

function draw() {
  background(220);

// tekent de blauwe lucht
  tekenRechthoek(0, 0, 800, 270);

// tekent de huizen
  tekenHuis(100, 220);
  tekenHuis(200, 220);
  tekenHuis(300, 220);
  tekenHuis(400, 220);
  tekenHuis(500, 220);

// tekent de zon 
  tekenCircle(50, 50, 70);

// tekent de weg
  tekenLijn(0, 270, 800, 270);
  tekenLijn(0, 330, 800, 330);

// tekent de straat naam
  tekenText(250, 70, 0, 30);

// print het optel, deel, keer en min getal
text(optelGetal(3,6), 135, 210);
text(deelGetal(12, 4), 235, 210);
text(keerGetal(9, 3), 330, 210);
text(minGetal(27, 12), 430, 210);
text(optelGetal(5, 6), 530, 210);
}
