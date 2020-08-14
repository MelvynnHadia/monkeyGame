//made END state but it isnt relevant so i didnt use it
//also cannot run it for some reason so i just coded whatever i could 
var PLAY = 1;

var END = 0; 

var gameState = 1;


var junglebkgd;

var invisground;

var player;

var bnnImage,bnnGroup;

var obsImage, obsGroup;

var score = 0;

function preload(){
  
  bkgd = loadImage("jungle.png");
  
  monkey = loadAnimation("Monkey_01.png", "Monkey_02.png", "Monkey_03.png", "Monkey_04.png", "Monkey_05.png", "Monkey_06.png", "Monkey_07.png", "Monkey_08.png", "Monkey_09.png", "Monkey_10.png");
  
  bnn = loadImage("banana.png");
  
  obs = loadImage("stone.png");
  
}

function setup() {
  createCanvas(600, 300);
  
  junglebkgd = createSprite(300, 150, 600, 300);
  junglebkgd.addImage("jungle", bkgd);
  
  invisground = createSprite(300, 255, 600, 1);
  invisground.visiblity = false;
  
  player = createSprite(90, 251, 20, 20);
  player.addAnimation("running", monkey);
  player.scale = 0.1;
  
  bnnGroup = new Group();
  obsGroup = new Group();
  
}

function draw() {
  
  if (gameState === PLAY) {
    
    text("score:" + score, 30, 40);
    
    banana();
    obstacle();
    
    if (keyDown("space") && player.y >= 250){
      player.velocityY = -15;
    }
    
    player.velocityY = player.velocityY + 1;
    player.collide(invisground);
    
    if (player.isTouching(bnnGroup)) { 
        bnnGroup.destroyEach;
        
        score = score + 2;
        switch(score) {
            
          case 10: player.scale = player.scale + 0.2;
                  break;

          case 20: player.scale = player.scale + 0.2;
                  break;
          
          case 30: player.scale = player.scale + 0.2;
                  break;
            
          case 40: player.scale = player.scale + 0.2;
                  break;
                  
          case 50: player.scale = player.scale + 0.2;
                  break;
              
          default: break;
        }
      
    if (obsGroup.isTouching(player)){
        player.scale = 0.1;
      // how do i make it know that the player has touched and obstacle 2 times
    }
} 
  }
  
  background(220);
    
  drawSprites();
}

function banana() {
 
  if (world.frameCount % 60 === 0) {
    var bnn = createSprite(600, 120, 20, 20);
    bnn.y = Math.round(random(80,120));
    bnn.addImage("bnnImage");
    bnn.scale = 0.5;
    bnn.velocityX = -4;
    
    
    bnn.lifetime = 100;
    
    bbnGroup.add(bnn);
  }
}

function obstacle() { 
  
   if (world.frameCount % 80 === 0) {
     var obs = createSprite(600, 251, 20, 20);
     obs.addImage("obsImage");
     obs.scale = 0.5;
     obs.velocityX = -4;
     
     obs.lifetime = 100;
     
     obsGroup.add(obs);
   }
}
  