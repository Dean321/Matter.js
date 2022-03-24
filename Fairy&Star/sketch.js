var fairy_img, star_img, bg_img,
    myEngine, myWorld, starBody,
    star, fairyBody, fairy;

function preload(){
  bg_img = loadImage("starNight.png");
  star_img = loadImage("star.png");
  fairy_img = loadAnimation("fairyImage1.png","fairyImage2.png");
}

function setup() {
  createCanvas(800,800);
  
  myEngine = Matter.Engine.create();
  myWorld = myEngine.world;
  
  star = createSprite(690,50);
  star.addImage(star_img);
  star.scale=0.25;
  star.rotationSpeed=1;
  
  fairyBody = Matter.Bodies.rectangle(width/2,height-250, width, 20, {
    isStatic:true,
    friction:0,
    restitution:0
  });

  starBody = Matter.Bodies.rectangle(690, 50, 50, 50, {
    isStatic:true,
    friction:0,
    restitution:0
  });

  Matter.World.add(myWorld, [starBody, fairyBody]);
  
  fairy = createSprite(200,550);
  fairy.addAnimation("flies", fairy_img);
  fairy.scale = 0.3;



}
 
function draw() {
  background("lightblue");  
  Matter.Engine.update(myEngine);
  image(bg_img, 0, 0, width, height);
  star.x = starBody.position.x;
  star.y = starBody.position.y;
  fairy.x = fairyBody.position.x;
  drawSprites();
}

function keyPressed(){
  if(keyCode==DOWN_ARROW){
    Matter.Body.setStatic(starBody, false);
  }
  if(keyCode==LEFT_ARROW){
    fairyBody.position.x-=5;
  }
  if(keyCode==RIGHT_ARROW){
    fairyBody.position.x+=5;
  }
}