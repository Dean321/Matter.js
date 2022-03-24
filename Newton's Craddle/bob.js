class Bob{
    constructor(x,y){
        this.r = 30;
        this.body = Matter.Bodies.circle(x, y, this.r, {
            isStatic:false,
            density:3,
            friction:0,
            restitution:1
        });
        Matter.World.add(myWorld, this.body)
    }
    display(){
        push();
        ellipseMode(RADIUS);
        fill("#F417E9");
        ellipse(this.body.position.x, this.body.position.y, this.r);
        pop();
    }
}