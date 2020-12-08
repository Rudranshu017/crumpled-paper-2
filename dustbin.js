class dustbin
{  
    constructor(x, y) {
    var options = {
        isStatic:true
    }
    this.image = loadImage("dustbingreen.png")
    this.x = x;
    this.y = y;
    this.angle=0;
    
    this.bottomBody=Bodies.rectangle(this.x,this.y,200,20,{isStatic : true})
    World.add(world, this.bottomBody);

    this.leftBody=Bodies.rectangle(this.x-100,this.y-50,20,100,{isStatic : true})
    Matter.Body.setAngle(this.leftBody,this.angle)
    World.add(world, this.leftBody);

    this.rightBody=Bodies.rectangle(this.x+100,this.y-50,20,100,{isStatic : true})
    Matter.Body.setAngle(this.rightBody,-1*this.angle)
    World.add(world, this.rightBody);

  }
  display()
  {

    var posBottom=this.bottomBody.position;
	var posLeft=this.leftBody.position;
	var posRight=this.rightBody.position;

    push();
    translate(posLeft.x, posLeft.y);
    rectMode(CENTER);
    angleMode(RADIANS)
    strokeWeight(4);
    fill(255);
    rotate(this.angle)
    //rect(0,0, 20, 100);
    pop();
    //rect(this.x,this.y,20,100)

    push();
    translate(posBottom.x, posBottom.y);
    imageMode(CENTER);
    strokeWeight(4);
    fill(255);
    image(this.image,0,-80, 200, 200);
    pop();

    push();
    translate(posRight.x, posRight.y);
    rectMode(CENTER);
    angleMode(RADIANS)
    strokeWeight(4);
    fill(255);
    rotate(-1 * this.angle)
    //rect(0,0, 20, 100);
    pop();
    //rect(this.x,this.y,20,100)
  }
};