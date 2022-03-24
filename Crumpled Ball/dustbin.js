class dustbin
{
	constructor(x, y){
		this.w = 100;
		this.h = 20;
		this.bottom_body = Matter.Bodies.rectangle(x-40,y-10,this.w,this.h, {isStatic: true});
		this.left_body = Matter.Bodies.rectangle(x-60, y-90, this.h, this.w, {isStatic: true});
		this.right_body = Matter.Bodies.rectangle(x+60, y-90, this.h, this.w, {isStatic: true});
		Matter.World.add(myWorld, [this.bottom_body, this.left_body, this.right_body]);
		this.img = loadImage("dustbin.png");
	}

	display(){
		push();
		noFill();
		noStroke();
		rect(this.bottom_body.position.x, this.bottom_body.position.y, this.w, this.h);
		rect(this.left_body.position.x, this.left_body.position.y, this.h, this.w);
		rect(this.right_body.position.x, this.right_body.position.y, this.h, this.w);
		image(this.img, this.bottom_body.position.x, this.bottom_body.position.y-80, 100, 110);
		pop();
	}
}
