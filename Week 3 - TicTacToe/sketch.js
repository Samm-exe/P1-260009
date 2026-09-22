let turns = 0

let linksBoven = 0
let linksMidden = 0
let linksOnder = 0

let middenBoven = 0
let middenMidden = 0
let middenOnder = 0

let rechtsBoven = 0
let rechtsMidden = 0
let rechtsOnder = 0

function setup() {
  createCanvas(500, 500);

}
function mousePressed() {
  if (mouseButton == LEFT) {
    turns = (turns + 1) % 2;
    // Red turns(turns 0, square 1)
    if (mouseX >= 100 && mouseX <= 190 && mouseY >= 100 && mouseY <= 190 && linksBoven == 0) {
      linksBoven = turns + 1
    }
    if (mouseX >= 200 && mouseX <= 290 && mouseY >= 100 && mouseY <= 190 && middenBoven == 0) {
      middenBoven = turns + 1
    }
    if (mouseX >= 300 && mouseX <= 390 && mouseY >= 100 && mouseY <= 190 && rechtsBoven == 0) {
      rechtsBoven = turns + 1
    }
    if (mouseX >= 100 && mouseX <= 190 && mouseY >= 200 && mouseY <= 290 && linksMidden == 0) {
      linksMidden = turns + 1
    }
    if (mouseX >= 200 && mouseX <= 290 && mouseY >= 200 && mouseY <= 290 && middenMidden == 0) {
      middenMidden = turns + 1
    }
    if (mouseX >= 300 && mouseX <= 390 && mouseY >= 200 && mouseY <= 290 && rechtsMidden == 0) {
      rechtsMidden = turns + 1
    }
    if (mouseX >= 100 && mouseX <= 190 && mouseY >= 300 && mouseY <= 390 && linksOnder == 0) {
      linksOnder =  turns + 1
    }
    if (mouseX >= 200 && mouseX <= 290 && mouseY >= 300 && mouseY <= 390 && middenOnder == 0) {
      middenOnder = turns + 1
    }
    if (mouseX >= 300 && mouseX <= 390 && mouseY >= 300 && mouseY <= 390 && rechtsOnder == 0) {
      rechtsOnder = turns + 1
    }
  }
}

function draw() {
  background(220);
  console.log(turns)
 // speelveld base
  fill(0);
  noStroke();
  rect(80, 80, 330, 330, 15);

// speelvakjes
// Linksboven
if (linksBoven == 0) {
  fill("rgb(121, 120, 120)");
  rect(100, 100, 90, 90, 10);
}
if (linksBoven == 1) {
  fill("rgb(255, 0, 0)");
  rect(100, 100, 90, 90, 10);
}
if (linksBoven == 2) {
  fill("rgb(43, 0, 255)");
  rect(100, 100, 90, 90, 10);
}
// Middenboven 
if (middenBoven == 0) {
  fill("rgb(121, 120, 120)");
  rect(200, 100, 90, 90, 10);
}
if (middenBoven == 1) {
  fill("rgb(255, 0, 0)");
  rect(200, 100, 90, 90, 10);
}
if (middenBoven == 2) {
  fill("rgb(43, 0, 255)");
  rect(200, 100, 90, 90, 10);
}
// Rechtsboven
if (rechtsBoven == 0) {
  fill("rgb(121, 120, 120)");
  rect(300, 100, 90, 90, 10);
}
if (rechtsBoven == 1) {
  fill("rgb(255, 0, 0)");
  rect(300, 100, 90, 90, 10);
}
if (rechtsBoven == 2) {
  fill("rgb(43, 0, 255)");
  rect(300, 100, 90, 90, 10);
}
// Linksmidden
if (linksMidden == 0) {
  fill("rgb(121, 120, 120)");
  rect(100, 200, 90, 90, 10);
}
if (linksMidden == 1) {
  fill("rgb(255, 0, 0)");
  rect(100, 200, 90, 90, 10);
}
if (linksMidden == 2) {
  fill("rgb(43, 0, 255)");
  rect(100, 200, 90, 90, 10);
}
// Middenmidden
if (middenMidden == 0) {
  fill("rgb(121, 120, 120)");
  rect(200, 200, 90, 90, 10);
}
if (middenMidden == 1) {
  fill("rgb(255, 0, 0)");
  rect(200, 200, 90, 90, 10);
}
if (middenMidden == 2) {
  fill("rgb(43, 0, 255)");
  rect(200, 200, 90, 90, 10);
}
// Rechtsmidden
if (rechtsMidden == 0) {
  fill("rgb(121, 120, 120)");
  rect(300, 200, 90, 90, 10);
}
if (rechtsMidden == 1) {
  fill("rgb(255, 0, 0)");
  rect(300, 200, 90, 90, 10);
}
if (rechtsMidden == 2) {
  fill("rgb(43, 0, 255)");
  rect(300, 200, 90, 90, 10);
} 
// Linksonder
if (linksOnder == 0) {
  fill("rgb(121, 120, 120)");
  rect(100, 300, 90, 90, 10);
}
if (linksOnder == 1) {
  fill("rgb(255, 0, 0)");
  rect(100, 300, 90, 90, 10);
}
if (linksOnder == 2) {
  fill("rgb(43, 0, 255)");
  rect(100, 300, 90, 90, 10);
}
// Midddenonder
if (middenOnder == 0) {
  fill("rgb(121, 120, 120)");
  rect(200, 300, 90, 90, 10);
}
if (middenOnder == 1) {
  fill("rgb(255, 0, 0)");
  rect(200, 300, 90, 90, 10);
}
if (middenOnder == 2) {
  fill("rgb(43, 0, 255)");
  rect(200, 300, 90, 90, 10);
}
// Rechtsonder
if (rechtsOnder == 0) {
  fill("rgb(121, 120, 120)");
  rect(300, 300, 90, 90, 10);
}
if (rechtsOnder == 1) {
  fill("rgb(255, 0, 0)");
  rect(300, 300, 90, 90, 10);
}
if (rechtsOnder == 2) {
  fill("rgb(43, 0, 255)");
  rect(300, 300, 90, 90, 10);
}  
}
