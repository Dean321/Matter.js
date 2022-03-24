var myWorld, myEngine, raindrops, raindrop_img, man_img,
    man, umbrella, thunder_ani, thunder, thunder_clap,
    context;
function preload(){
    raindrop_img = loadImage("raindrop.png");
    man_img = loadAnimation("walking_1.png","walking_2.png","walking_3.png",
                            "walking_4.png","walking_5.png","walking_6.png",
                            "walking_7.png","walking_8.png");
    thunder_ani = loadAnimation("1.png","2.png","3.png","4.png");
    thunder_clap = loadSound("rock_breaking.flac");
}
function setup(){
    createCanvas(600, 800);
    context = new AudioContext();
    imageMode(CENTER);
    myEngine = Matter.Engine.create();
    myWorld = myEngine.world;
    raindrops = [];
    man = createSprite(300,650);
    man.addAnimation("walks", man_img);
    man.scale=0.4;
    umbrella = Matter.Bodies.circle(300, 580, 60,{isStatic:true});
    Matter.World.add(myWorld, umbrella);

    
}

function draw(){
    if(touches.length>0){
        context.resume();
      }
    background("#010B70");
    Matter.Engine.update(myEngine);
    drawSprites();
    var drop = Matter.Bodies.circle(Math.round(random(0,width)), 0, 5, {friction:1});
    Matter.World.add(myWorld, drop);
    raindrops.push(drop);

    for(var i=0; i<raindrops.length; i++){
        var cor = raindrops[i].position;
        push();
        translate(cor.x, cor.y);
        rotate(raindrops[i].angle)
        image(raindrop_img, 0, 0, 12, 12);
        pop();
        if(cor.y>height){
            Matter.World.remove(myWorld, raindrops[i]);
            raindrops.splice(i,1);
            i--;
        }
        
    }
    if(frameCount % 160 == 0){
        thunder = createSprite(Math.round(random(20,width-20)), 0);
        thunder.addAnimation("lights", thunder_ani);
        thunder.lifetime = 15;
        thunder_clap.play();
    }
    
    
}

