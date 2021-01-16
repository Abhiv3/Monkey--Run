
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var Foodgroup, obstacleGroup
var score
var ground , score = 0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,600);
  ground = createSprite(300,400,700,10);
    ground.x = ground.width /2;

  monkey = createSprite(100,370,20,20);
  monkey.addAnimation("ijjijji",monkey_running);
  monkey.scale = 0.09;
  
  Foodgroup = createGroup();
  obstacleGroup = createGroup();
  
  
  

   }


function draw() {
  background("white");
   if (ground.x < 0){
      ground.x = ground.width/2;
    }
   text("Survival Time: "+ score, 500,50);
  
  if(keyDown("space")&& monkey.y >= 100){
    monkey.velocity.y = -12;
    
   
  }
 if(frameCount%2 === 0){
   score = score+1;
 }
 
 
  
   monkey.velocityY = monkey.velocityY + 0.9;
   monkey.collide(ground);
  
    
  spawnbananas();
  spawnobstacle();
  
   if(obstacleGroup.isTouching(monkey)){
    ground.velocityX = 0;
    Foodgroup.velocityX = 0;
    monkey.velocityY = 0;
   
  }
   drawSprites();
}
function spawnbananas(){
  //write code here to spawn the clouds
  if (frameCount % 100 === 0) {
    var banana = createSprite(600,80,40,10);      
     banana.y = Math.round(random(80,120));
     banana.addImage(bananaImage);
     banana.scale = 0.09;
     banana.velocityX = -3;
    
     //assign lifetime to the variable
     banana.lifetime = 200;
    
    //adjust the depth
     
    
    //add each cloud to the group
    Foodgroup.add(banana);
  }
}
function spawnobstacle(){
  //write code here to spawn the clouds
  if (frameCount % 200 === 0) {
    var obstacle = createSprite( Math.round(random(550,600)),380,40,10);      
      
      obstacle .addImage(obstaceImage);
      obstacle .scale = 0.09;
    obstacle.velocityX = -3;
      
    
     //assign lifetime to the variable
     obstacle.lifetime = 200;
    
    //adjust the depth
     
    
    //add each cloud to the group
    obstacleGroup.add(obstacle);
  }
}









