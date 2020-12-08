
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	//dustbin1 = createSprite(780,600,20,150);
	//dustbin2 = createSprite(580,600,20,150);
	//dustbin3 = createSprite(680,670,210,20);
	paper1 = new Paper(200,450,40);
	ground = new groundclass(width/2,670,width,10);
  dustbin1 = new dustbin(1200,650);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255,255,0);
  ground.display();
  dustbin1.display();
  paper1.display();
  drawSprites();
 
}
function keyPressed() {
	if(keyCode === UP_ARROW){
	   Matter.Body.applyForce(paper1.body,paper1.body.position,{x:87,y:-87});

	}
}