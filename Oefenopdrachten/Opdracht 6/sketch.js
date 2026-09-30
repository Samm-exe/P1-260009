let kleuren = [];
let cijfers = [];


function setup() {
  createCanvas(380, 350);
  for (let i = 0; i < 5; i ++) {
    kleuren.push([random(255), random(255), random(255)]);
  }
  for (let i = 0; i < 12; i++) {
    cijfers.push(round(random(0, 100)))
  }
}
//checks numbers for 
function checkNumber(x){
  return x < 300;
}

function draw() {
  background(220);

  let colors = ['red', 'green', 'blue', 'purple', 'yellow'];
  let colors2 = ['red', 'green', 'blue', 'purple', 'yellow'];

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
  let antwoord = 0;
  for (let i = 0; i < sum1.length; i ++) {
    textSize(30);
    if (i < sum2.length) {
      antwoord += sum2[i];
    }
    antwoord += sum1[i];
  }
  text(antwoord, 130, 50);

  // 6
  let hoeveelE = 0;
  let woord = 'Overheidsfinancieringstekort'
  for (let i = 0; i < woord.length; i ++) {
    if (woord[i] == 'e') {
      hoeveelE += 1;
    }
  }
  text(hoeveelE + 'x', 140, 120); 

  //7 
  colors2.sort();
  for (let i = 0; i < colors2.length; i++) {
    textSize(15);
    fill(colors2[i]);
    text(colors2[i], 140, 190 + i * 15);
  }  
  // 8
  for (let i = 0; i < 5; i++) {
    fill(kleuren[i]);
    rect(130 + i * 30, 290, 30, 30);
  }
  // 9 
  let totaal = 0;
  
  for (let i = 0; i < 12; i ++) {
    totaal = totaal + cijfers[i];
    fill(0);
    textSize(15);
    text(cijfers[i], 260, 15 + i * 15);
    
  }
  let gem = totaal / cijfers.length;
  text('totaal:' + totaal, 260, 210);
  text('gem:' + round(gem, 3), 260, 230);
}
