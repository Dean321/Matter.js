class Ball{
    constructor(x, y){
        this.r = 20;
        this.body = Matter.Bodies.circle(x, y, this.r, {density:3});
        Matter.World.add(myWorld, this.body);
        this.img = loadImage("p.png");
    }
    display(){
        push();
        imageMode(CENTER);
        translate(this.body.position.x, this.body.position.y);
        rotate(this.body.angle);
        image(this.img, 0, 0, this.r*2, this.r*2);
        pop();
    }
}