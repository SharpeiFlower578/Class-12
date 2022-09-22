
var trex , trex_running, trex_collided;
var ground, groundImage, groundInvisible;

function preload(){
  trex_running = loadAnimation ("trex1.png","trex3.png","trex4.png");
  trex_collided = loadImage ("trex_collided.png");
  groundImage = loadImage ("ground2.png");


}

function setup(){
  createCanvas(600,200);
  //crear el sprite del suelo
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  
  //dar velocidad negativa al piso
  ground.velocityX = -3;

  //crear el sprite groundInvisible
  groundInvisible = createSprite(200,190,400,20);
  groundInvisible.visible = false;
  
  //crear sprite de Trex
 trex = createSprite(50,160,20,50);
 trex.addAnimation("running",trex_running);
 trex.scale = 0.5;
 trex.x = 50; 
}

function draw(){
  background(220);
  console.log(trex.y);
  //hacer que el Trex salte al presionar la barra espaciadora
  if (keyDown("space") && trex.y >= 100){
    trex.velocityY = -10;
  }
   

if(ground.x < 0){
  ground.x = ground.width/2;
}
trex.velocityY = trex.velocityY + 0.8;
trex.collide(groundInvisible);
drawSprites();
}