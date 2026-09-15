  let score = 0

function setup() {
  createCanvas(400, 200);
}

function keyPressed(){
  if (keyCode === 32) {
    score = random(0, 100);
  }
}
function draw() {
  background(220);
  console.log(score);
  fill(0);
  text('Je score is', 125 , 100);
  if (score >= 90) {
    fill(0, 255, 0);
    text('Uitstekend!', 200, 100);
  }
  else if (score >= 70 && score <= 89) {
    fill('yellow');
    text('Goed gedaan!', 200, 100);
  }
  else if (score >= 50 && score <= 69) {
    fill('orange');
    text('Voldoende', 200, 100);
  }
  else if(score <= 49) {
    fill('red');
    text('Onvoldoende', 200, 100);
  }

}
