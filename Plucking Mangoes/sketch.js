var myWorld, myEngine, grnd, mango1;
function setup() {
  createCanvas(1200,800);
  myEngine = Matter.Engine.create();
  myWorld = myEngine.world;
  grnd = new Ground(width/2, height-10, width, 20);
  mango1 = new Mango(989,325);
  mango2 = new Mango(910,410);
  mango3 = new Mango(992,440);
  mango4 = new Mango(1080,410);
  mango5 = new Mango(910,514);
  mango6 = new Mango(910,626);
  mango7 = new Mango(1105,492);
  mango8 = new Mango(1113,580);
  stone1 = new Stone(240, 540);
  sling1 = new Slingshot({x: 245, y:545}, stone1.body);
}
 
function draw() {
  background("lightblue");  
  Matter.Engine.update(myEngine);
  grnd.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  stone1.display();
  sling1.display();
  textSize(30);
  fill(0);
  text("Use mouse to aim stone at the mangoes.\nFor another turn press spacebar",100,30);
  detectCollision(stone1, mango1);
  detectCollision(stone1, mango2);
  detectCollision(stone1, mango3);
  detectCollision(stone1, mango4);
  detectCollision(stone1, mango5);
  detectCollision(stone1, mango6);
  detectCollision(stone1, mango7);
  detectCollision(stone1, mango8);
}

function mouseDragged(){
  Matter.Body.setPosition(stone1.body, {x:mouseX, y:mouseY});
}

function mouseReleased(){
  sling1.body.bodyB=null;
}

function detectCollision(a, b){
  var distance = dist(a.body.position.x, a.body.position.y, 
                      b.body.position.x, b.body.position.y);
  if(distance <= a.r + b.r){
    Matter.Body.setStatic(b.body, false);
  }
}

function keyPressed(){
  if(keyCode==32){
    sling1.body.bodyB = stone1.body;
  }
}