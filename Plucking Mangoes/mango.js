class Mango{
    constructor(x, y){
        this.w = 45;
        this.h = 60;
        this.r = 30;
        this.body = Matter.Bodies.circle(x, y, this.r, {
            isStatic:true,
            restitution:0.8,
            density:1,
            friction:0.3
        });
        Matter.World.add(myWorld, this.body);
        this.img = loadImage("mango.png");
    }
    display(){
        push();
        imageMode(CENTER);
        translate(this.body.position.x, this.body.position.y);
        rotate(this.body.angle);
        image(this.img, 0, 0, this.w, this.h);
        pop();
    }
}