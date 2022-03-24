var ball, myWorld, myEngine, wedge, angle, wedge2, 
    angle2, wedge3, angle3, particles
function setup() {
  createCanvas(400,400);
  rectMode(CENTER);
  ellipseMode(RADIUS);
  myEngine = Matter.Engine.create();
  myWorld = myEngine.world;
  particles = []
  particles_properties = {
    restitution: 0.4,
    friction: 0.2
  }
  for(var i=0; i<5; i++){
    var  p = Matter.Bodies.circle(Math.round(random(150,250)), 0, 10, particles_properties);
      Matter.World.add(myWorld, p)
      particles.push(p)
  }
  ground = Matter.Bodies.rectangle(width/2, height-10, width, 20,{isStatic:true});
  g1 = Matter.Bodies.rectangle(100, 320, 100, 10, {isStatic:true});
  g2 = Matter.Bodies.rectangle(300, 320, 100, 10, {isStatic:true});
  
  wedge2 = Matter.Bodies.rectangle(200, 200, 100, 10, {isStatic:true})
  wedge = Matter.Bodies.rectangle(200, 200, 100, 10, {isStatic:true})
  wedge3 = Matter.Bodies.rectangle(200, 200, 100, 10, {isStatic:true})
  Matter.World.add(myWorld, [g1, g2, ground, wedge, wedge2, wedge3]);
  angle = 0
  angle2 = 360;
  angle3 = 90;
}

function draw() {
  background(220);
  Matter.Engine.update(myEngine);  
  Matter.Body.rotate(wedge, angle);
  fill("black");
  rect(ground.position.x, ground.position.y, width, 20)
  fill(100);
  rect(g1.position.x, g1.position.y, 100, 10);
  rect(g2.position.x, g2.position.y, 100, 10);

  push()
  translate(wedge.position.x, wedge.position.y)
  rotate(angle)
  fill("turquoise")
  rect(0,0, 100, 10);
  angle++
  pop()

  Matter.Body.rotate(wedge2, angle2);
  push()
  translate(wedge2.position.x, wedge2.position.y)
  rotate(angle2)
  fill("aqua")
  rect(0,0, 100, 10);
  angle2--
  pop()

  Matter.Body.rotate(wedge3, angle3);
  push()
  translate(wedge3.position.x, wedge3.position.y)
  rotate(angle3)
  fill("cadetblue")
  rect(0,0, 100, 10);
  angle3+=0.6
  pop()

  for(var i=0;i<particles.length;i++){
    fill("lightpink");
    ellipse(particles[i].position.x, particles[i].position.y,10)
  }
  
}