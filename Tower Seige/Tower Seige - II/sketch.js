var boxes=[],grnd,p1,ball,con,
myWorld, myEngine, b_img,
w1, w2, p_img;

function preload(){
  b_img = loadImage("box.png");
  p_img = loadImage("p.png");
}

function setup(){
    createCanvas(800,800);

    myEngine = Matter.Engine.create();
    myWorld = myEngine.world;

    grnd = new Ground(width/2, height-10, width, 20);
    p1 = new Ground(width/2, height-100, 400, 20);
    ball = new Ball(40,670,20);
    con = new Slingshot({x:60, y:60}, ball.body);

    for(var i=265;i<540;i+=30){
      var b = new Box(i, height-140);
      boxes.push([b,255]);
      Matter.World.add(myWorld, b);
      if(i>265 && i<535){
        var c = new Box(i, height-170);
        boxes.push([c,255]);
        Matter.World.add(myWorld, c);
      }
      if(i>295 && i<505){
        var c = new Box(i, height-200);
        boxes.push([c,255]);
        Matter.World.add(myWorld, c);
      }
      if(i>325 && i<475){
        var c = new Box(i, height-230);
        boxes.push([c,255]);
        Matter.World.add(myWorld, c);
      }
      if(i>355 && i<445){
        var c = new Box(i, height-260);
        boxes.push([c,255]);
        Matter.World.add(myWorld, c);
      }
      if(i==415){
        var c = new Box(400, height-400);
        boxes.push([c,255]);
        Matter.World.add(myWorld, c);
      }
    }
}  


function draw(){
  background("lightblue")
  Matter.Engine.update(myEngine);
  
  grnd.display();
  p1.display();
  
  for(var i =0;i<boxes.length;i++){
    if(boxes[i][0].body.position.y>height-100)  
      boxes[i][1]-=5;
    tint(255, boxes[i][1])
    boxes[i][0].display();
    //image(b_img,boxes[i][0].position.x, boxes[i][0].position.y, 40, 60)  
  }
  
  ball.display();
  
  con.display();
  
  textSize(30)
  fill(0)
  text("TOWER SEIGE - II", 250, 50)
  text("Press Spacebar for another chance", 150, 80)
}

function mouseDragged(){
  Matter.Body.setPosition(ball.body,{x:mouseX, y:mouseY});
}

function mouseReleased(){
  con.detach();
}

function keyPressed(){
  if(keyCode==32){
    con.attach(ball.body);
  }
}