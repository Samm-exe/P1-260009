let x = 100
let a = 20
let b = 10

function setup() {
  createCanvas(400, 400);
}

function draw() {
 /*variabels*/
  y = 80
  let greeting = "Hello World"
  let optellen = a + b
  let aftrekken = a - b
  let vermenigvuldigen = a * b
  let delen = a / b
  background(220);


  text(x, 20, 20);
  text(greeting, 20, 60);
  /*elke regel schrijft het stukje tekst, en daarna roept hij de variabel aan om de som te maken*/
  text("Optellen: " + optellen, 20, y);
  y = y + 20
  text("Aftrekken: " + aftrekken, 20, y);
  y = y + 20
  text("Vermenigvuldigen: " + vermenigvuldigen, 20, y);
  y = y + 20
  text("Delen: " + delen, 20, y);
  
  
}
