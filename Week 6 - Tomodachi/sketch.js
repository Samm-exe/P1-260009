let kitchenbg;
let livingroombg;
let bathroombg;
let bedroombg;
let deathbg;
let currentRoom = "livingroom";

let speechbubble_r;
let speechbubble_l;
let click;

let samStand;
let sam_kitchen;
let sam_bathroom;
let sam_livingroom;
let sam_bedroom;

let hungerdecay = 0.18;
let happinessdecay = 0.16;
let cleandecay = 0.1;
let energydecay = 0.15;
let healthdecay = 0.1;
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

  //Gets the statistics for last time booted
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
  // the stats get saved
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
  speechbubble_r = loadImage("assets/speech_bubble_r.png");
  speechbubble_l = loadImage("assets/speech_bubble_l.png");
  emote_hunger = loadImage("assets/emote_hunger.png");
  emote_sad = loadImage("assets/emote_sad.png");
  emote_sleepy = loadImage("assets/emote_sleep.png");
  emote_stinky = loadImage("assets/emote_stinky.png");

  click = loadSound("assets/click.mp3");
}

function switchbathroom() {
  currentRoom = "bathroom"
  click.play();
}
function switchlivingroom() {
  currentRoom = "livingroom"
  click.play();
}
function switchkitchen() {
  currentRoom = "kitchen"
  click.play();
}
function switchbedroom() {
  currentRoom = "bedroom"
  click.play();
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
  //hides all buttons
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
    click.play();
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
    click.play();
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
    click.play();
    energy = energy + 1
    saveData();
  }
}

function play() {
  for (let i = 0.0; i < 5; i += 1.0) {
    if (i < happiness) {
      image(happiness_full, 245 + i * 45, 520, 70, 70);
    }
  }
}
function playing() {
  if (currentRoom == "livingroom") {
    click.play();
    happiness = happiness + 1
    energy = energy - 0.5
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
  //displays a textbubble with an emoji if a certain stat is low
  if (hunger < 3) {
    image(speechbubble_r, 490, 160, 110, 100);
    image(emote_hunger, 525, 180, 40, 40);
  } 
  if (energy < 3) {
    image(speechbubble_r, 510, 250, 110, 100);
    image(emote_sleepy, 545, 270, 40, 40);
  }
  if (dirty < 3) {
    image(speechbubble_l, 320, 175, 110, 100);
    image(emote_stinky, 355, 195, 40, 40);
  }
  if (happiness < 3) {
    image(speechbubble_l, 300, 265, 110, 100);
    image(emote_sad, 335, 285, 40, 40);
  } 
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
  playbutton.show();

  image(sam_bathroom, 600, 250, 205, 250);
  //displays a textbubble with an emoji if a certain stat is low
  if (hunger < 3) {
    image(speechbubble_r, 730, 210, 110, 100);
    image(emote_hunger, 765, 230, 40, 40);
  } 
  if (energy < 3) {
    image(speechbubble_r, 730, 300, 110, 100);
    image(emote_sleepy, 765, 320, 40, 40);
  }
  if (dirty < 3) {
    image(speechbubble_l, 560, 225, 110, 100);
    image(emote_stinky, 595, 245, 40, 40);
  }
  if (happiness < 3) {
    image(speechbubble_l, 540, 315, 110, 100);
    image(emote_sad, 575, 335, 40, 40);
  } 
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
  //displays a textbubble with an emoji if a certain stat is low
  if (hunger < 3) {
    image(speechbubble_r, 310, 110, 110, 100);
    image(emote_hunger, 345, 130, 40, 40);
  } 
  if (energy < 3) {
    image(speechbubble_r, 310, 200, 110, 100);
    image(emote_sleepy, 345, 220, 40, 40);
  }
  if (dirty < 3) {
    image(speechbubble_l, 140, 125, 110, 100);
    image(emote_stinky, 175, 145, 40, 40);
  }
  if (happiness < 3) {
    image(speechbubble_l, 120, 215, 110, 100);
    image(emote_sad, 155, 235, 40, 40);
  } 
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
  //displays a textbubble with an emoji if a certain stat is low
  if (hunger < 3) {
    image(speechbubble_r, 170, 240, 110, 100);
    image(emote_hunger, 205, 260, 40, 40);
  } 
  if (energy < 3) {
    image(speechbubble_r, 175, 330, 110, 100);
    image(emote_sleepy, 210, 350, 40, 40);
  }
  if (dirty < 3) {
    image(speechbubble_l, -15, 245, 110, 100);
    image(emote_stinky, 20, 265, 40, 40);
  }
  if (happiness < 3) {
    image(speechbubble_l, -10 , 335, 110, 100);
    image(emote_sad, 25, 355, 40, 40);
  } 
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
  //makes the stats decay a certain amount per second and limits it so the min is 0 and the max is 5
  hunger -= deltaTime * 0.001 * hungerdecay
  hunger = constrain(hunger, 0, 5);
  saveData();
  dirty -= deltaTime * 0.001 * cleandecay
  dirty = constrain(dirty, 0, 5);
  saveData();
  energy -= deltaTime * 0.001 * energydecay
  energy = constrain(energy, 0, 5);
  saveData();
  happiness -= deltaTime * 0.001 * happinessdecay
  happiness = constrain(happiness, 0, 5);
  saveData();
  image(status_bar, 250, 275, 700, 625);
  //decays the health if all other stats are empty
  if (hunger == 0 && dirty == 0 && energy == 0 && happiness == 0) {
    healthy -= deltaTime * 0.001 * healthdecay
    saveData();
  }
  //shows the deathscreen if the health is at 0
  if (healthy <= 0) {
    currentRoom = "deathscreen";
    deathscreen();
  }
  //regenerates the hearths if the stats are nolonger empty
  if (healthy < 5 && hunger > 0 && dirty > 0 && energy > 0 && happiness > 0) {
    healthy += deltaTime * 0.001 * healthregen
    saveData();
  }
}