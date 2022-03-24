const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world, object,grnd,package,helicoter,bimg,himg,pimg,g1,g2,g3,g_1,g_2,g_3;

function preload(){
    bimg = loadImage("background.jpg");
    himg = loadImage("Helicopter.png");
    pimg = loadImage("package.png");
}

function setup(){
    var canvas = createCanvas(800,800);
    engine = Engine.create();
    world = engine.world;
    
    var ground_options = {
        isStatic: true
    }

    ground = Bodies.rectangle(400,790,800,20, ground_options);
    World.add(world,ground);
    g1 = Bodies.rectangle(400,770,200,20, ground_options);
    World.add(world,g1);
    g2 = Bodies.rectangle(300,730,20,100, ground_options);
    World.add(world,g2);
    g3 = Bodies.rectangle(500,730,20,100, ground_options);
    World.add(world,g3);

    ball = Bodies.circle(200,80,25,{restitution:0, isStatic:true});
    World.add(world,ball);

    grnd = createSprite(400,790,800,20);
    grnd.shapeColor="brown";
    g_1 = createSprite(400,390,200,20);
    g_1.shapeColor="red";
    g_2 = createSprite(100,350,20,100);
    g_2.shapeColor="red";
    g_3 = createSprite(300,350,20,100);
    g_3.shapeColor="red";

    package = createSprite(200,80,10,10);
    package.addImage(pimg);
    package.scale=0.3;
    helicoter = createSprite(200,80,10,10);
    helicoter.addImage(himg);
}
function draw(){
    background(bimg);
    Engine.update(engine);
    rectMode(CENTER);
    ellipseMode(RADIUS);
    grnd.x=ground.position.x;
    grnd.y=ground.position.y;
    g_1.x = g1.position.x;
    g_1.y = g1.position.y;
    g_2.x = g2.position.x;
    g_2.y = g2.position.y;
    g_3.x = g3.position.x;
    g_3.y = g3.position.y;
    if(package.y==80){
        helicoter.x = package.x;
        helicoter.y = package.y;
    }
    package.x=ball.position.x;
    package.y=ball.position.y;
    drawSprites();

}
function keyPressed() {
    if (keyCode === DOWN_ARROW) {
        Matter.Body.setStatic(ball, false);
     }
     if(keyCode === LEFT_ARROW && package.y==80){
        var x = ball.position.x;
        var y = ball.position.y;
        Matter.Body.setPosition(ball, {x:x-15, y:y})
     }
     if(keyCode === RIGHT_ARROW && package.y==80){
        var x = ball.position.x;
        var y = ball.position.y;
        Matter.Body.setPosition(ball, {x:x+15, y:y})
    }
   }
