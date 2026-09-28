
function setup() {
  createCanvas(400, 400);
  
}

function draw() {
  background(220);
  for(let i = 1 ; i < 4; i++) {
    fill(255, i * 90 , 0);
    circle(40, i * 35, 30);
  }

}
