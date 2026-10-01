let colors = [];
let posS = [];
let size = 20;
let growA = 2;
let grow = true;
let actiefS = 0;
let opacityS = 0;

function setup() {
  createCanvas(800, 600);
  // pushed kleuren en posities naar de arrays voor gebruik
  for (let i = 0; i < 15; i++) {
    colors.push([random(255), random(255), random(255)]);
    posS.push([random(0, 800), random(0, 600)]);
  }
}

function draw() {
  background("rgb(130, 0, 145)");
  console.log(size);
  for (let i = 0; i <= actiefS; i++) {
    fill(colors[i]);
    if (i == actiefS) {
      strokeWeight(5);
      rect(...posS[i], size, size, opacityS);
    }
    else {
      rect(...posS[i], 0, 0);
    }
  }
  if (grow === true) {
    size += growA
  }
  else if (grow === false) {
    size -= growA
  }
  if (size <= 0) {
    grow = true
    actiefS += 1
  }
  if (size >= 100) {
    grow = false
  }
  if (actiefS == 15) {
    actiefS = 0
  }

}
