function setup() {
  createCanvas(380, 350);
}

function checkNumber(x){
  return x < 300;
}

function draw() {
  background(220);

  let colors = ['red', 'green', 'blue', 'purple', 'yellow'];
  let numbers = [400, 240, 10, 490, 30, 60, 244, 500, 301, 300];
  let sum1 = [3, 55, 93, 20, 102, 6];
  let sum2 = [14, 22, 80, 5];

  //numbers
  fill(0);
  textSize(15);
  text("1.", 20, 15);
  text("2.", 20, 100);
  text("3.", 20, 190);
  text("4.", 20, 250);
  text("5.", 120, 15);
  text("6.", 120, 100);
  text("7.", 120, 190);
  text("8.", 120, 280);
  text("9.", 240, 15);

  // 1
  for (let i = 0; i < colors.length; i++) {
    textSize(15);
    fill(colors[i]);
    text(colors[i], 40, 15 + i * 15);
  }

  // 2
  colors.shift();
  colors.push('red');
  for (let i = 0; i < colors.length; i++) {
    textSize(15);
    fill(colors[i]);
    text(colors[i], 40, 100 + i * 15);
  }

  // 3
  colors.splice(1, 2);
  for (let i = 0; i < colors.length; i++) {
    textSize(15);
    fill(colors[i]);
    text(colors[i], 40, 190 + i * 15);
  }

  // 4 
  let Lower300 = numbers.filter(checkNumber);
  for (let i = 0; i < Lower300.length; i++) {
    textSize(15);
    fill(0);
    text(Lower300[i], 40, 250 + i * 15);
  }

  // 5
  for (let i = 0; i < 1; i ++) {
    textSize(30);
  }
}


