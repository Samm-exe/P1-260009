let backgroundimg1;
let kitchenbg;
let livingroombg;
let bathroombg;
let bedroombg;
let samStand;
let samStandangle;
let sam_kitchen;
let sam_bathroom;

let heart_full;
let heart_empty;
let food_full;
let food_empty;
let energy_full;
let energy_empty;
let clean_full;
let clean_empty;

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
  livingroombg = loadImage("assets/living_room.png");
  bathroombg = loadImage("assets/bath_room.png");
  kitchenbg = loadImage("assets/kitchen.png");
  bedroombg = loadImage("assets/bed_room.png");
  samStand = loadImage("assets/sam_stand.png");
  sam_kitchen = loadImage("assets/sam_kitchen.png");
  sam_bathroom = loadImage("assets/sam_bathroom.png");
  food_full = loadImage("assets/hungerbar_full.png");
  food_empty = loadImage("assets/hungerbar_empty.png");
  heart_full = loadImage("assets/heart_full.png");
  heart_empty = loadImage("assets/heart_empty.png");
  energy_full = loadImage("assets/energybar_full.png");
  energy_empty = loadImage("assets/energybar_empty.png");
  clean_full = loadImage("assets/soapbar_full.png");
  clean_empty = loadImage("assets/soapbar_empty.png");
}

function eating() {
 image(food_full, 1000, 70, 50, 50);
}

function livingroom() {
  background(livingroombg);
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
  background(bathroombg);
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

  image(sam_bathroom, 600, 250, 205, 250);
}

function kitchen() {
  background(kitchenbg);
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

  image(sam_kitchen, 180, 150, 145, 250);
}

function bedroom() {
  background(bedroombg);
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

function draw() {
  eating();
}