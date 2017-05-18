var sound;
var stage = 0;
var cracked = false;
var crack;

function preload(){
  sound = loadSound("kura.wav");
  crack = loadSound("wood-cracking-1.wav");
}

function setup() {
  createCanvas(600,600)
}

function draw() {
  fill(239, 230, 186)
  noStroke();
  ellipse(300,300,200,300);
  stroke(0);
  if(stage>=1){
    line(310,310,225,400);
  }
  if(stage>=2){
    line(320,270,310,310);
  }
  if(stage>=3){
    line(300,150,320,270);
  }
  if(stage>=4){
    line(310,310,368,410);
  }
  if(stage==5){
    cracked = true;
  }
  
  if(cracked===true){
    background(255);
    stroke(89, 77, 52);
    line(272,345,260,380);
    line(328,345,340,380);
    line(260,380,240,400);
    line(260,380,255,400);
    line(260,380,275,400);
    line(340,380,320,400);
    line(340,380,335,400);
    line(340,380,355,400);
    noStroke();
    fill(255,100,0);
    triangle(360,230,360,270,410,240);
    fill(229, 215, 185);
    ellipse(300,300,120,100);
    ellipse(350,250,60)
    fill(0);
    ellipse(360,240,10);
  }
  
  if(mouseIsPressed === true){
    if (cracked===true){
      background(255);
      stroke(89, 77, 52);
      line(272,345,260,380);
      line(328,345,340,380);
      line(260,380,240,400);
      line(260,380,255,400);
      line(260,380,275,400);
      line(340,380,320,400);
      line(340,380,335,400);
      line(340,380,355,400);
      noStroke();
      fill(255,100,0);
      triangle(370,245,360,265,410,265);
      triangle(360,235,370,255,410,235);
      fill(229, 215, 185);
      ellipse(300,300,120,100);
      ellipse(350,250,60)
      fill(0);
      ellipse(360,240,10);
    }
  }
}

function mousePressed(){
  if (cracked===true){
    sound.play();
  }
  if (cracked===false){
    stage += 1;
    crack.play()
  }
}