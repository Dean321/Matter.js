var myEngine, myWorld, grnd, bin, ppr
function setup(){
    createCanvas(1200,600);
    myEngine = Matter.Engine.create();
    myWorld = myEngine.world;
    grnd = new ground(width/2, height-10, width, 20);
    bin = new dustbin(width-120, height-30);
    ppr = new paper(100,0,40);
}

function draw(){
    background(220);
    Matter.Engine.update(myEngine);
    grnd.display();
    bin.display();
    ppr.display();
    textSize(30);
    fill(0);
    text("Press Up Arrow Key to throw paper ball into the dustbin", 100,50);
}

function keyPressed(){
    if(keyCode==UP_ARROW){
        if(ppr.body.position.x<1060)
        Matter.Body.applyForce(ppr.body, ppr.body.position, {x:0.3 , y:-0.30});
    }
}