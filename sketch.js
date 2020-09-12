
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground,ball

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
  box1 = new Box(400,650,400,10)
	box2 = new Box(100,500,10,300)
	box3 = new Box(500,500,10,300)

     ball = new Ball(100,650,40,40)
	engine = Engine.create();
	World = engine.world;

	//Create the Bodies Here.
   
   World.add(world,ground)
   

	Engine.run(engine);
  
}


function draw() {
	Engine.update(engine)
  rectMode(CENTER);
  background(0);
  box1.display()
  box2.display()
  box3.display()

  
  drawSprites();
 
}



