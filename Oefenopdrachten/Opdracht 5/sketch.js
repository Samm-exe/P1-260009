
function setup() {
  createCanvas(800, 400);
}

function draw() {
  background(220);
  fill(0);
  text("1.", 20, 15);
  text("2.", 20, 105);
  text("3.", 80, 105);
  text("4.", 80, 205);
  text("5.", 540, 20);
  text("6.", 350, 105);
  text("7.", 625, 105);
  // 1
  strokeWeight(1);
  for (let i = 0; i < 10; i ++) {
    fill(255, 254, 254);
    rect(20 + i * 50, 20, 50, 50);
    if (i == 6) {
    fill("rgb(46, 1, 243)");
    rect(320, 20, 50, 50 );
    }
  }
  // 2
  strokeWeight(1);
  for (let i = 0; i < 5; i ++) {
    fill(i * 70);
    rect(20, 110 + i * 50, 50, 50);
  }
  // 3
  strokeWeight(1);
  let offset = 0;
  for (let i = 0; i < 4; i ++) {
    fill(0, i * 70, 0);
    rect(80 + i * 25 + offset, 110, 25 + i * 25 , 50);
    offset = offset + i * 25;
  }
  // 4
  strokeWeight(1);
  let offsetW = 0;
  let offsetH = 0;
  for (let i = 0; i < 4; i ++) {
    fill(0, 0, 255 - i * 90);
    rect(80 + i * 25 + offsetW, 210,  25 + i * 25, 50 + i * 25);
    offsetW = offsetW + i * 25;
    offsetH = offsetH + i * 25
  }
  // 5
  for (let i = 0; i < 5; i ++) {
    fill("rgb(78, 246, 0)");
    strokeWeight(0 + i * 2);
    circle(550 + i * 50, 50, 40);

  }
  // 6
  let color = true;
  for (let i = 0; i < 10; i ++) {
    fill(color ? "red" : "white")
    strokeWeight(1);
    circle(480, 220, 250 - i * 25);
    color =! color;
  }
  // 7
  let color2 = true;
  for (let i = 0; i < 21; i ++) {
    strokeWeight(1);
    fill(0);
  }
}