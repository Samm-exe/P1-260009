let cirkels = [];
let punten = 0;

function setup() {
  createCanvas(400, 400);
  uphev = loadFont("upheavtt.ttf")
  for (let i = 0; i < 100; i ++) {
    let c = {
      X: random(150, 250),
      Y: random(150, 250),
      R: random(10, 50),
      kleur: random(["rgb(170, 241, 182)", "rgb(124, 203, 137)", "rgb(89, 172, 103)", "rgb(47, 114, 58)", "rgb(22, 87, 33)", "rgb(22, 77, 31)"]),
      snelheidX: random(-1.5, 1.5),
      snelheidY: random(-1.5, 1.5)
    }
    cirkels.push(c);
  }
}

function draw() {
  background("rgb(158, 209, 152)");

  for (let i = 0; i < cirkels.length; i++) {
    let cirkel = cirkels[i];

    fill(cirkel.kleur);
    circle(cirkel.X, cirkel.Y, cirkel.R);
    cirkel.X = cirkel.X + cirkel.snelheidX;
    cirkel.Y = cirkel.Y + cirkel.snelheidY;

    if (cirkel.X <= 0) {
      cirkel.snelheidX *= -1.0
    }
    if (cirkel.X >= 400) {
      cirkel.snelheidX *= -1.0
    }
    if (cirkel.Y <= 0) {
      cirkel.snelheidY *= -1.0
    }
    if (cirkel.Y >= 400) {
      cirkel.snelheidY *= -1.0
    }
  }
  fill(255);
  textSize(100);
  textFont(uphev);
  text(punten, 170, 200);
}

function mousePressed() {
  for (let i = 0; i < cirkels.length; i++) {
    let cirkel = cirkels[i]
    let d = dist(mouseX, mouseY, cirkel.X, cirkel.Y);
    if (d <= cirkel.R) {
      punten += 1;
    }
  }
}