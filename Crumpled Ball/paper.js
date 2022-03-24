class paper{
    constructor(x, y, r){
        this.r = r;
        this.body = Matter.Bodies.circle(x, y, this.r, {restitution:0.4});
        Matter.World.add(myWorld, this.body);
        this.img = loadImage("paper.png");
    }

    display(){
        push();
        image(this.img,this.body.position.x, this.body.position.y, this.r, this.r);
        pop();
    }
}