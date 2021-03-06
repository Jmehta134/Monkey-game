var monkey , monkey_running
var ground ;
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var survivaltime=0;
function preload(){
  createCanvas(400,400);
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");

}



function setup() {
  monkey=createSprite(200,300,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1;

  ground=createSprite(200,350,800,10);
  ground.velocityX=-4;
  
  FoodGroup=new Group();
  obstacleGroup=new Group();
}


function draw() {
  background(255);
  if (keyDown("space")&&monkey.y>=300) {
    monkey.velocityY=-20;
  }
  monkey.velocityY=monkey.velocityY+1;
  if (ground.x<=0){
    ground.x=ground.width/2;
  }
  monkey.collide(ground);
  
  food();
  obstacles();
  textSize(20);
  survivaltime=Math.ceil(frameCount/frameRate());
  text("Survival Time : "+ survivaltime,100,50);
  
  drawSprites();       
}
function food (){ 
  if (frameCount%80===0){
    banana=createSprite(400,0,10,10);
    banana.scale=0.08;
    banana.y=Math.round(random(120,200));
    banana.addImage(bananaImage);
    banana.velocityX=-5;
    banana.lifetime=500;
    FoodGroup.add(banana);
  }
}
function obstacles(){
  if (frameCount%300===0){
    var stone=createSprite(400,330,10,10);
    stone.scale=0.1;
    stone.addImage(obstaceImage);
    stone.velocityX=-5;
    stone.lifetime=500;
    obstacleGroup.add(stone);
  }
}




