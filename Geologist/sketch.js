var myEngine, myWorld,
    hammer, stone, rubber, 
    iron, sand, ground;
function setup() {
  createCanvas(800,400,20,20);
  rectMode(CENTER);
  ellipseMode(RADIUS);
  myEngine = Matter.Engine.create();
  myWorld = myEngine.world;
  ground = Matter.Bodies.rectangle(width/2, height-10, width, 20,{
    isStatic: true
  });
  sand = [];
  for(var i=0; i<50; i++){
    var s = Matter.Bodies.circle(Math.round(random(100,600)), 0, 5,{
      restitution:0.1,
      density:0.001,
      friction:1
    });
    sand.push(s);
    Matter.World.add(myWorld, s);
  }
  iron = Matter.Bodies.rectangle(400, 200, 100, 30, {
    restitution:0.05,
    density:3,
    friction:0.4
  })
  stone = Matter.Bodies.circle(200, 200, 25,{
    restitution: 0,
    friction:0,
    density:1
  });
  rubber = Matter.Bodies.rectangle(200, 200, 20 ,20, {
    restitution:0,
    density:0.01,
    friction:0
  })
  hammer = Matter.Bodies.rectangle(mouseX, mouseY, 80, 20, {
    restitution:0.05,
    density:2,
    friction:0.4
  })
  Matter.World.add(myWorld, [ground, iron, stone, rubber, hammer]);
}
 
function draw() {
  background("lightblue");  
  Matter.Engine.update(myEngine);
  fill("#2A0F03");
  rect(50,50,10,10);
  fill(0);
  text("GROUND",60,55);
  fill("#F1B59B");
  rect(50,65,10,10);
  fill(0);
  text("SAND",60,70);
  fill("#D5E3DD");
  rect(50,80,10,10);
  fill(0);
  text("IRON",60,85);
  fill("grey");
  rect(50,95,10,10);
  fill(0);
  text("STONE",60,100);
  fill("#D5ED");
  rect(50,110,10,10);
  fill(0);
  text("RUBBER",60,115);
  fill(230);
  rect(50,125,10,10);
  fill(0);
  text("HAMMER",60,130);

  fill("#2A0F03");
  rect(ground.position.x, ground.position.y, width, 20);
  Matter.Body.setPosition(hammer, {x:mouseX, y:mouseY});
  fill(230);
  rect(hammer.position.x, hammer.position.y, 80, 20);
  for(var i=0; i<sand.length; i++){
    push();
    translate(sand[i].position.x, sand[i].position.y);
    rotate(sand[i].angle);
    fill("#F1B59B")
    ellipse(0, 0, 5);
    pop();
  }

  push();
  translate(iron.position.x, iron.position.y);
  rotate(iron.angle);
  fill("#D5E3DD");
  rect(0, 0, 100, 30);
  pop();

  push();
  translate(stone.position.x, stone.position.y);
  rotate(stone.angle);
  fill("grey");
  ellipse(0, 0, 25);
  pop();

  push();
  translate(rubber.position.x, rubber.position.y);
  rotate(rubber.angle);
  fill("#D5ED");
  rect(0, 0, 20, 20);
  pop();

}