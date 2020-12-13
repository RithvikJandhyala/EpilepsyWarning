var imouse;
var mouse;
var distancex;
var distancey;
var color1,color2,color3;

function setup() {
  createCanvas(1366,657);
  mouse = createSprite(400, 200, 50, 50);
  imouse = createSprite(400,200,50,50);
  imouse.visible = false;
  mouse.visible = false;
  color1 = 25;
  color2 = 25;
  color3 = 25;
}

function draw() {
  background(color1,color2,color3);
  mouse.x = mouseX;
  mouse.y = mouseY;
  distancex = mouse.x - imouse.x;
  distancey = mouse.y - imouse.y; 
  distance = distancex + distancey;
  if(distance != 0) {
    color1 = random(50,250);
    color2 = random(50,250);
    color3 = random(50,250);
    distance = 0;
    imouse.x = mouse.x;
    imouse.y = mouse.y;    
  }
  drawSprites();
  textSize(25);
  fill("black");
  text("EPILEPSY WARNING",560,50);
}