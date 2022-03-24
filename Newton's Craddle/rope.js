class Rope{
    constructor(a,b){
        this.body = Matter.Constraint.create({
            pointA: a,
            bodyB: b,
            stiffness: 1,
            length: 450
        })
        Matter.World.add(myWorld, this.body);

    }

    display(){
        push();
        var a = this.body.pointA;
        var b = this.body.bodyB.position;
        stroke(255);
        strokeWeight(4);
        line(a.x, a.y, b.x, b.y);
        pop();
    }
}