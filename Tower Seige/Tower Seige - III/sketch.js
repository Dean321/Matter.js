var boxes=[],grnd,p1,ball,con,
myWorld, myEngine, b_img,
w1, w2,  score, gameState,
m_img, n_img, backgroundImg;

function preload(){
  b_img = loadImage("go.jpg");
  m_img = loadImage("m.jpg");
  n_img = loadImage("n.jpg");
}

function setup(){
    createCanvas(800,800);
    score = 0;
    gameState=0;
    backgroundImg = m_img;
    imageMode(CENTER);
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
  background(0)
  image(backgroundImg, width/2, height/2, width, height);
  Matter.Engine.update(myEngine);
  
  grnd.display();
  p1.display();
  push();
  for(var i =0;i<boxes.length;i++){
    if(boxes[i][0].body.position.y>height-100)  
      boxes[i][1]-=5;
    tint(255, boxes[i][1])
    boxes[i][0].display();
    if(boxes[i][1]==0)
      score++; 
  }
  pop();
  
  ball.display();
  
  con.display();
  getTime();
  textSize(30)
  fill(0)
  text("TOWER SEIGE - III", 250, 50)
  text("Press Spacebar for another chance", 150, 80)
  text("Score: "+score, 650, 100)
  if(score==31)
    gameState=1
  if(gameState==1)
    image(b_img, width/2, height/2, width, height);
}

function mouseDragged(){
  if(gameState==0)
  Matter.Body.setPosition(ball.body,{x:mouseX, y:mouseY});
}

function mouseReleased(){
  con.detach();
}

function keyPressed(){
  if(keyCode==32 && gameState==0){
    con.attach(ball.body);
  }
}

async function getTime(){
  var response = await (await fetch("http://worldtimeapi.org/api/timezone/Asia/Tokyo")).json();
  var datetime = response.datetime;
  var date = datetime.slice(0,10);
  var hour = Number(datetime.slice(11,13));
  if(hour>=06 && hour<=19){
    backgroundImg = m_img;
  }
  else{
    backgroundImg = n_img;
  }
 
}