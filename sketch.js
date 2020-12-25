var fixedRect,movingRect;

function setup() {
  createCanvas(1200,800);

  fixedRect=createSprite(200, 200, 50, 80);
  fixedRect.shapeColor="blue";

  movingRect=createSprite(400,200,80,30);
  movingRect.shapeColor="blue";

  movingRect.velocityY = -5;
  movingRect.velocityX=-5

  fixedRect.velocityY = +5;
  fixedRect.velocityX=5

  gameObject1 = createSprite(100, 100, 50, 50);
  gameObject1.shapeColor = "blue";

  gameObject2 = createSprite(200, 100, 50, 50);
  gameObject2.shapeColor = "blue";

  gameObject3 = createSprite(300, 100, 50, 50);
  gameObject3.shapeColor = "blue";

  gameObject4 = createSprite(400, 100, 50, 50);
  gameObject4.shapeColor = "blue";
}

function draw() {
  background(0);
  console.log(movingRect.x-fixedRect.x);

 if(isTouching(movingRect,gameObject1)){
  movingRect.shapeColor="yellow"
gameObject1.shapeColor="yellow"
 }else{
  movingRect.shapeColor="blue"
  gameObject1.shapeColor="blue"
 }

bounceOff(movingRect,fixedRect) ;

  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;  

  
  drawSprites();
}

