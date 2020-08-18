var fixedRect, movingRect;
var obj1, obj2, obj3, obj4;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 500, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 500,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  obj1 = createSprite(300, 500, 50, 80);
  obj2 = createSprite(100, 500, 50, 80);
  obj3 = createSprite(400, 500, 50, 80);
  obj4 = createSprite(800, 500, 50, 80);

  movingRect.velocityX = -5;
  fixedRect.velocityX = +5;

  obj1.velocityX=+8;
  obj2.velocityX=-3;
  obj3.velocityX=+4;
  obj4.velocityX=-5;
}

function draw() {
  background(0,0,0);  

  bounceOff(obj1,obj2);
  
  drawSprites();
}

function bounceOff(jo1,jo2){
  if (jo1.x - jo2.x < jo2.width/2 + jo1.width/2
    && jo2.x - jo1.x < jo2.width/2 + jo1.width/2) {
  jo1.velocityX = jo1.velocityX * (-1);
  jo2.velocityX = jo2.velocityX * (-1);
}
if (jo1.y - jo2.y < jo2.height/2 + jo1.height/2
  && jo2.y - jo1.y < jo2.height/2 + jo1.height/2){
  jo1.velocityY = jo1.velocityY * (-1);
  jo2.velocityY = jo2.velocityY * (-1);
}
}