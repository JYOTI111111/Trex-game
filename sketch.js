var trex_running;
var trex,groundImage;

function preload()
{
  trex_running= loadAnimation("trex1.png ","trex3.png","trex4.png");
  groundImage=loadImage("ground2.png");
}

function setup()
{
  createCanvas(600,200);
  trex=createSprite(50,170,20,30);
  trex.addAnimation( "xyz",trex_running);
  trex.scale=0.5;
  edges=createEdgeSprites();
  
  ground=createSprite(50,180,30,20);
  ground.addImage("x",groundImage);
    
}

function draw()
{
  background("lightblue");
  
  ground.velocityX=-5;
  
  if(ground.x<0)
  {
    ground.x=ground.width/2;
   // ground.x=50;
  }
  
  if(keyDown("space"))
     {
     trex.velocityY=-10;
     }
  trex.velocityY=trex.velocityY+1;
  trex.collide(ground);
  drawSprites();

}