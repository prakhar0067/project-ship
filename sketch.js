var sea,ship;
var seaImg,shipImg;

function preload(){
  seaImg = loadImage("sea.png")
  shipImg = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")


}

function setup(){
  background("blue")
  createCanvas(400,400);
  sea = createSprite(400,200)
  sea.addImage("sea",seaImg)
  sea.velocityX = -5
  sea.scale = 0.3

  ship = createSprite(130,200,30,30)
  ship.addAnimation("ship",shipImg)
  ship.scale = 0.2
  
}

function draw() {
  background(0);
  sea.velocityX = -3
  if(sea.x < 50){
   sea.x = sea.width/8
  }
 drawSprites()
}