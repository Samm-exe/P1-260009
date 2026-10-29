let kitchenbg;
let livingroombg;
let bathroombg;
let bedroombg;
let deathbg;
let currentRoom = "livingroom";

let textbox;

let samStand;
let sam_kitchen;
let sam_bathroom;
let sam_livingroom;
let sam_bedroom;

let hungerdecay = 0.28;
let happinessdecay = 0.26;
let cleandecay = 0.2;
let energydecay = 0.25;
let healthdecay = 0.2;
let healthregen = 0.3;

let heart_full;
let food_full;
let happiness_full;
let energy_full;
let clean_full;
let status_bar;

let hunger = 5.0;
let happiness = 5.0;
let dirty = 5.0;
let energy = 5.0;
let healthy = 5.0;

let feedbutton;
let washbutton;
let sleepbutton;
let playbutton;

let emote_sad;
let emote_hunger;
let emote_stinky;
let emote_sleepy;

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
  eatbr.position(870, 585);
  eatbr.size(80, 80);
  eatbr.mousePressed(switchkitchen);
  //Eat button links
  eatbl = createImg('assets/eat_arrow_left.png');
  eatbl.position(275, 585);
  eatbl.size(80, 80);
  eatbl.mousePressed(switchkitchen);
  //Sleep button rechts
  sleepbr = createImg('assets/sleep_arrow_right.png');
  sleepbr.position(870, 585);
  sleepbr.size(80, 80);
  sleepbr.mousePressed(switchbedroom);
  //Sleep button links
  sleepbl = createImg('assets/sleep_arrow_left.png');
  sleepbl.position(275, 585);
  sleepbl.size(80, 80);
  sleepbl.mousePressed(switchbedroom);
  //Sit button rechts
  sitbr = createImg('assets/sit_arrow_right.png');
  sitbr.position(870, 585);
  sitbr.size(80, 80);
  sitbr.mousePressed(switchlivingroom);
  //Sit button links
  sitbl = createImg('assets/sit_arrow_left.png');
  sitbl.position(275, 585);
  sitbl.size(80, 80);
  sitbl.mousePressed(switchlivingroom);
  //Wash button rechts
  washbr = createImg('assets/wash_arrow_right.png');
  washbr.position(870, 585);
  washbr.size(80, 80);
  washbr.mousePressed(switchbathroom);
  //Wash button links
  washbl = createImg('assets/wash_arrow_left.png');
  washbl.position(275, 585);
  washbl.size(80, 80);
  washbl.mousePressed(switchbathroom);

  //Button to feed
  feedbutton = createImg('assets/Bread.png');
  feedbutton.position(355, 597);
  feedbutton.size(50, 50);
  feedbutton.mousePressed(feeding);
  //Button to wash
  washbutton = createImg('assets/soapbar_full.png');
  washbutton.position(430, 597);
  washbutton.size(50, 50);
  washbutton.mousePressed(cleaning);
  //Button to sleep
  sleepbutton = createImg('assets/energybar_full.png');
  sleepbutton.position(510, 597);
  sleepbutton.size(50, 50);
  sleepbutton.mousePressed(sleep);
  //Button to play
  playbutton = createImg('assets/smile_full.png');
  playbutton.position(575, 590);
  playbutton.size(70, 70);
  playbutton.mousePressed(playing);


  let data = getItem("stats");

  if (data !== null && data !== undefined) {
    hunger = data.hunger
    dirty = data.dirty
    energy = data.energy
    healthy = data.healthy
    happiness = data.happiness
  }
}

function saveData() {
  // De 4 stats worden opgeslagen
  storeItem("stats", {
    hunger: hunger,
    dirty: dirty,
    energy: energy,
    healthy: healthy,
    happiness: happiness
  });
}
function preload() {
  deathbg = loadImage("assets/death_screen.png");
  livingroombg = loadImage("assets/living_room.png");
  bathroombg = loadImage("assets/bath_room.png");
  kitchenbg = loadImage("assets/kitchen.png");
  bedroombg = loadImage("assets/bed_room.png");
  samStand = loadImage("assets/sam_stand.png");
  sam_kitchen = loadImage("assets/sam_kitchen.png");
  sam_bathroom = loadImage("assets/sam_bathroom.png");
  sam_livingroom = loadImage("assets/sam_livingroom.png");
  sam_bedroom = loadImage("assets/sam_bedroom.png");
  food_full = loadImage("assets/hungerbar_full.png");
  heart_full = loadImage("assets/heart_full.png");
  happiness_full = loadImage("assets/smile_full.png");
  energy_full = loadImage("assets/energybar_full.png");
  clean_full = loadImage("assets/soapbar_full.png");
  status_bar = loadImage("assets/stats_bar.png");
  textbar = loadImage("assets/scroll.png");
  emote_hunger = loadImage("assets/emote_hunger.png");
  emote_sad = loadImage("assets/emote_sad.png");
  emote_sleepy = loadImage("assets/emote_sleep.png");
  emote_stinky = loadImage("assets/emote_stinky.png"); 
}

function switchbathroom() {
  currentRoom = "bathroom"
}
function switchlivingroom() {
  currentRoom = "livingroom"
}
function switchkitchen() {
  currentRoom = "kitchen"
}
function switchbedroom() {
  currentRoom = "bedroom"
}

function mousePressed() {
  if (mouseButton == LEFT) {
    if (mouseX >= 320 && mouseX <= 930 && mouseY <= 400 && mouseY >= 375 && currentRoom == "deathscreen") {
      currentRoom = "livingroom";
      hunger = 5.0;
      energy = 5.0;
      healthy = 5.0;
      dirty = 5.0;
      happiness = 5.0;
    }
  }
}
function deathscreen() {
  background(deathbg);
  eatbr.hide();
  eatbl.hide();
  sitbr.hide();
  sitbl.hide();
  sleepbr.hide();
  washbl.hide();
  sleepbl.hide();
  washbr.hide();
  feedbutton.hide();
  washbutton.hide();
  sleepbutton.hide();
  playbutton.hide();
}

function eating() {
  for (let i = 0.0; i < 5; i += 1.0) {
    if (i < hunger) {
      image(food_full, 895 - i * 35, 450, 50, 40);
    }
  }
}
function feeding() {
  if (currentRoom == "kitchen") {
    hunger = hunger + 1
    saveData();
  }
}

function washing() {
  for (let i = 0.0; i < 5; i += 1.0) {
    if (i < dirty) {
      image(clean_full, 895 - i * 45, 540, 40, 35);
    }
  }
}
function cleaning() {
  if (currentRoom == "bathroom") {
    dirty = dirty + 1
    saveData();
  }
}

function sleeping() {
  for (let i = 0.0; i < 5; i += 1.0) {
    if (i < energy) {
      image(energy_full, 900 - i * 30, 490, 40, 50);
    }
  }
}
function sleep() {
  if (currentRoom == "bedroom") {
    energy = energy + 1
    saveData();
  }
}

function play() {
  for (let i = 0.0; i < 5; i += 1.0) {
    if (i < happiness) {
      image(happiness_full, 695 - i * 35, 450, 70, 70);
    }
  }
}
function playing() {
  if (currentRoom == "livingroom") {
    happiness = happiness + 1
    saveData();
  }
}

function health() {
  for (let i = 0.0; i < 5; i += 1.0) {
    if (i < healthy) {
      image(heart_full, 900 - i * 40, 410, 35, 35);
    }
  }
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
  feedbutton.show();
  sleepbutton.show();
  washbutton.show();
  playbutton.show();

  image(sam_livingroom, 400, 200, 175, 220);
}

function bathroom() {
  background(bathroombg);
  //Hides non used buttons
  eatbr.hide();
  sitbl.hide();
  sleepbl.hide();
  sleepbr.hide();
  washbr.hide();
  washbl.hide();
  //Shows used butttons
  sitbr.show();
  eatbl.show();
  feedbutton.show();
  sleepbutton.show();
  washbutton.show();
  playbuttton.show();

  image(sam_bathroom, 600, 250, 205, 250);
}

function kitchen() {
  background(kitchenbg);
  //Hides non used buttons
  eatbr.hide();
  eatbl.hide();
  sleepbr.hide();
  sitbr.hide();
  sitbl.hide();
  washbl.hide();
  //Shows used buttons
  sleepbl.show();
  washbr.show();
  feedbutton.show();
  sleepbutton.show();
  washbutton.show();
  playbutton.show();

  image(sam_kitchen, 180, 150, 145, 250);
}

function bedroom() {
  background(bedroombg);
  //Hides non used buttons
  eatbl.hide();
  sleepbl.hide();
  sleepbr.hide();
  sitbr.hide();
  washbl.hide();
  washbr.hide();
  //Shows used buttons
  eatbr.show();
  sitbl.show();
  feedbutton.show();
  sleepbutton.show();
  washbutton.show();
  playbutton.show();

  image(sam_bedroom, 10, 230, 240, 280);
}

function draw() {
  if (currentRoom == "livingroom") {
    livingroom();
  }
  else if (currentRoom == "bathroom") {
    bathroom();
  }
  else if (currentRoom == "bedroom") {
    bedroom();
  }
  else if (currentRoom == "kitchen") {
    kitchen();
  }
  eating();
  sleeping();
  washing();
  health();
  play();
  hunger -= deltaTime * 0.001 * hungerdecay
  hunger = constrain(hunger, 0, 5);
  saveData();
  dirty -= deltaTime * 0.001 * cleandecay
  dirty = constrain(dirty, 0, 5);
  saveData();
  energy -= deltaTime * 0.001 * energydecay
  energy = constrain(energy, 0, 5);
  saveData();
  image(status_bar, 250, 275, 700, 625);

  if (hunger == 0 && dirty == 0 && energy == 0) {
    healthy -= deltaTime * 0.001 * healthdecay

    saveData();
  }
  if (healthy <= 0) {
    currentRoom = "deathscreen";
    deathscreen();
  }
  if (healthy < 5 && hunger > 0 && dirty > 0 && energy > 0) {
    healthy += deltaTime * 0.001 * healthregen
    saveData();
  }
  console.log(healthy);
}