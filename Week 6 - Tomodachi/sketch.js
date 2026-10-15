let backgroundimg1;
let testbg1;
let testbg2;
let testbg3;
let testbg4;

let eatright;
let eatleft;
let sleepright;
let sleepleft;
let sitright;
let sitleft;
let washright;
let washleft;
let eatbr;
let eatbl;
let sleepbr;
let sleepbl;
let sitbr;
let sitbl;
let washbr;
let washbl;

function setup() {
  createCanvas(1200, 675);
  //Eat button rechts
  eatbr = createImg('assets/eat_arrow_right.png');
  eatbr.position(1040, 250);
  eatbr.size(200, 200);
  eatbr.mousePressed(kitchen);
  //Eat button links
  eatbl = createImg('assets/eat_arrow_left.png');
  eatbl.position(-20, 250);
  eatbl.size(200, 200);
  eatbl.mousePressed(kitchen);
  //Sleep button rechts
  sleepbr = createImg('assets/sleep_arrow_right.png');
  sleepbr.position(1040, 250);
  sleepbr.size(200, 200);
  sleepbr.mousePressed(bedroom);
  //Sleep button links
  sleepbl = createImg('assets/sleep_arrow_left.png');
  sleepbl.position(-20, 250);
  sleepbl.size(200, 200);
  sleepbl.mousePressed(bedroom);
  //Sit button rechts
  sitbr = createImg('assets/sit_arrow_right.png');
  sitbr.position(1040, 250);
  sitbr.size(200, 200);
  sitbr.mousePressed(livingroom);
  //Sit button links
  sitbl = createImg('assets/sit_arrow_left.png');
  sitbl.position(-20, 250);
  sitbl.size(200, 200);
  sitbl.mousePressed(livingroom);
  //Wash button rechts
  washbr = createImg('assets/wash_arrow_right.png');
  washbr.position(1040, 250);
  washbr.size(200, 200);
  washbr.mousePressed(bathroom);
  //Wash button links
  washbl = createImg('assets/wash_arrow_left.png');
  washbl.position(-20, 250);
  washbl.size(200, 200);
  washbl.mousePressed(bathroom);
  livingroom();
}

function preload() {
  backgroundimg1 = loadImage("assets/boe.jpg");
  testbg1 = loadImage("assets/test_bg1.png");
  testbg2 = loadImage("assets/test_bg2.png");
  testbg3 = loadImage("assets/test_bg3.png");
  testbg4 = loadImage("assets/test_bg4.png");
}

function draw() {
}
function livingroom() {
  background(testbg1);
  //Hides non used buttons
  eatbr.hide();
  eatbl.hide();
  sitbr.hide();
  sitbl.hide();
  sleepbr.hide();
  washbl.hide();
  //Shows used butttons
  sleepbl.show();
  washbr.show();
}

function bathroom() {
  background(testbg2);
  //Hides non used buttons
  eatbl.hide();
  sitbr.hide();
  sleepbl.hide();
  sleepbr.hide();
  washbr.hide();
  washbl.hide();
  //Shows used butttons
  sitbl.show();
  eatbr.show();
}

function kitchen() {
  background(testbg4);
  //Hides non used buttons
  eatbr.hide();
  eatbl.hide();
  sleepbl.hide();
  sitbr.hide();
  sitbl.hide();
  washbr.hide();
  //Shows used buttons
  sleepbr.show();
  washbl.show();
}

function bedroom() {
  background(testbg3);
  //Hides non used buttons
  eatbr.hide();
  sleepbl.hide();
  sleepbr.hide();
  sitbl.hide();
  washbl.hide();
  washbr.hide();
  //Shows used buttons
  eatbl.show();
  sitbr.show();
}