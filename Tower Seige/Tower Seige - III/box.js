class Box{
    constructor(x, y){
        this.w = 40;
        this.h = 60;
        this.body = Matter.Bodies.rectangle(x, y,this.w, this.h);
        Matter.World.add(myWorld, this.body);
        this.img = loadImage("box.png");
    }
    display(){
        push();
        imageMode(CENTER);
        fill("pink");
        translate(this.body.position.x, this.body.position.y);
        rotate(this.body.angle);
        image(this.img, 0, 0, this.w, this.h);
        pop();
    }
}