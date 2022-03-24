class Slingshot{
    constructor(a, b){
        this.body = Matter.Constraint.create({
            bodyB: b,
            pointA: a,
            stiffness: 0.8,
            length:10
        });
        Matter.World.add(myWorld, this.body);
        this.img = loadImage("boy.png");
        this.pointA = a;
    }
    display(){
        push();
        imageMode(CENTER);
        image(this.img, 200,650,120,300); 
        pop();
        if(this.body.bodyB){
            var a = this.body.bodyB.position;
            var b = this.pointA;
            line(a.x-5, a.y, b.x-10, b.y);
            line(a.x+5, a.y, b.x+10, b.y);
        }
    }
}