class ground
{
	constructor(x, y, w, h){
		this.w = w;
		this.h = h;
		this.body = Matter.Bodies.rectangle(x, y, this.w, this.h, {isStatic:true});
		Matter.World.add(myWorld, this.body);
	}

	display(){
		push();
		rectMode(CENTER);
		fill("brown")
		rect(this.body.position.x, this.body.position.y, this.w, this.h);
		pop();
	}

}