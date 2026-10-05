function setup() {
  createCanvas(800, 600);
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
  questionScreen()
}