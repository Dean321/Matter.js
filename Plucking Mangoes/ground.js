class Ground{
    constructor(x, y, w, h){
        this.w = w;
        this.h = h;
        this.body = Matter.Bodies.rectangle(x, y, this.w, this.h, {isStatic:true});
        Matter.World.add(myWorld, this.body);
        this.img = loadImage("tree.png");
    }
    display(){
        push();
        rectMode(CENTER);
        imageMode(CENTER);
        fill("#4B1307")
        rect(this.body.position.x, this.body.position.y, this.w, this.h);
        image(this.img, 1000, 530, 400,600);
        pop();
    }
}