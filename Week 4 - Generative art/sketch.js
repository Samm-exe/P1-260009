let colors = [];
let posS = [];
let posC = [];
let sizeS = 20;
let sizeC = 30;
let sizeR = 15;
let growAS = 2;
let growAC = 3;
let growAR = 1.5;
let growS = true;
let growC = true;
let growR = true;
let actiefS = 0;
let actiefC = 0;
let actiefR = 0;

function setup() {
  createCanvas(800, 600);
  // pushed kleuren en posities naar de arrays voor gebruik
  for (let i = 0; i < 240; i++) {
    colors.push([random(255), random(255), random(255)]);
    posS.push([random(10, 700), random(10, 500)]);
    posC.push([random(20, 700), random(20, 500)]);
  }
  angleMode(DEGREES)
}

function draw() {
  background("rgb(188, 147, 193)");
  console.log(sizeR);
  // draws the squares and makes them grow
  for (let i = 0; i <= actiefS; i++) {
    fill(colors[i]);
    if (i == actiefS) {
      strokeWeight(5);
      rect(...posS[i], sizeS, sizeS);
      rect(...posS[i], sizeS, sizeS);
      rect(...posS[i], sizeS, sizeS);
      rect(...posS[i], sizeS, sizeS);
      rect(...posS[i], sizeS, sizeS);
      rect(...posS[i], sizeS, sizeS);
      rect(...posS[i], sizeS, sizeS);
      rect(...posS[i], sizeS, sizeS);
    }
    else {
      rect(...posS[i], 0, 0);
      rect(...posS[i], 0, 0);
      rect(...posS[i], 0, 0);
      rect(...posS[i], 0, 0);
    }
  }
  if (growS === true) {
    sizeS += growAS
  }
  else if (growS === false) {
    sizeS -= growAS
  }
  if (sizeS <= 0) {
    growS = true
    actiefS += 1
  }
  if (sizeS >= 100) {
    growS = false
  }
  if (actiefS == 240) {
    actiefS = 0
  }
  // draws and grows the diamonds
  for (let i = 0; i <= actiefR; i++) {
    fill(colors[i]);
    if (i == actiefR) {
      push();
      translate(...posS[i]);
      rotate(45);
      strokeWeight(5);
      
      rect(...posS[i], sizeR, sizeR);
      rect(...posS[i], sizeR, sizeR);
      rect(...posS[i], sizeR, sizeR);
      rect(...posS[i], sizeR, sizeR);
      rect(...posS[i], sizeR, sizeR);
      rect(...posS[i], sizeR, sizeR);
      rect(...posS[i], sizeR, sizeR);
      rect(...posS[i], sizeR, sizeR);
      pop();
    }
    else {
      rect(...posS[i], 0, 0);
      rect(...posS[i], 0, 0);
      rect(...posS[i], 0, 0);
      rect(...posS[i], 0, 0);
    }
  }
  if (growR === true) {
    sizeR += growAR
  }
  else if (growR === false) {
    sizeR -= growAR
  }
  if (sizeR <= 0) {
    growR = true
    actiefR += 1
  }
  if (sizeR >= 100) {
    growR = false
  }
  if (actiefR == 40) {
    actiefR = 0;
  }
  // draws and grows the circles
  for (let i = 0; i <= actiefC; i++) {
    fill(colors[i]);
    if (i == actiefC) {
      strokeWeight(5);
      translate(...posC[i]);
      circle(...posC[i], sizeC + i * 2);
      circle(...posC[i], sizeC + i * 6);
      circle(...posC[i], sizeC + i * 8);
      circle(...posC[i], sizeC + i * 4);
      circle(...posC[i], sizeC + i * 1);
      circle(...posC[i], sizeC + i * 3);
      circle(...posC[i], sizeC + i * 5);
      circle(...posC[i], sizeC + i * 7);
    }
    else {
      circle(...posC[i], 0);
      circle(...posC[i], 0);
      circle(...posC[i], 0);
      circle(...posC[i], 0);
    }
  }
  if (growC === true) {
    sizeC += growAC
  }
  else if (growC === false) {
    sizeC -= growAC
  }
  if (sizeC <= 0) {
    growC = true
    actiefC += 1
  }
  if (sizeC >= 100) {
    growC = false
  }
  if (actiefC == 50) {
    actiefC = 0
  }
}
