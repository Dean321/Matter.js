class Slingshot{
    constructor(a, b){
        this.sling = Matter.Constraint.create({
            pointA:a,
            bodyB:b,
            stiffness:0.8,
            length:20
          });
         Matter.World.add(myWorld, this.sling);
         this.a = a;
         this.b = b;
         this.img = loadImage("p.png");
    }
    display(){
        if(this.sling.bodyB)
            line(this.a.x, this.a.y,this.b.position.x,this.b.position.y)
    }
    detach(){
    this.sling.bodyB=null
    }
    attach(b){
        this.sling.bodyB=b;         
    }
}
