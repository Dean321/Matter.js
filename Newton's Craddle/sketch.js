var myEngine, myWorld

function setup() {
	createCanvas(800, 700);

	myEngine = Matter.Engine.create();
	myWorld = myEngine.world;

	roof = new Roof(420, 100, 400, 30);
	b1 = new Bob(300, 550);
	b2 = new Bob(360, 550);
	b3 = new Bob(420, 550);
	b4 = new Bob(480, 550);
	b5 = new Bob(540, 550);
	r1 = new Rope({x:300, y:100}, b1.body);
	r2 = new Rope({x:360, y:100}, b2.body);
	r3 = new Rope({x:420, y:100}, b3.body);
	r4 = new Rope({x:480, y:100}, b4.body);
	r5 = new Rope({x:540, y:100}, b5.body);
}


function draw() {
  background(0);
  Matter.Engine.update(myEngine);
  roof.display();
  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  r1.display();
  r2.display();
  r3.display();
  r4.display();
  r5.display();
 
}

function keyPressed(){
	if(keyCode==UP_ARROW){
		console.log(23)
		Matter.Body.applyForce(b1.body, b1.body.position, {x:-550, y:-250})
	}
}



