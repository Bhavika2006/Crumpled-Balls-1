
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground,ball,box1,box2,box3
var world,engine


function setup() {
  createCanvas(800, 700);
  engine = Engine.create()
  world = engine.world
  box1 = new Box(400,650,400,10)
	box2 = new Box(100,500,10,300)
  box3 = new Box(500,500,10,300)
  ball = new Ball(100,650,40,40)
  ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true, friction:2} );
 	World.add(world, ground);

  
  Engine.run(engine);
  
}


function draw() {
	Engine.update(engine)
  rectMode(CENTER);
  background(0);
  box1.display();
  box2.display();
  box3.display();
  ball.display();
  
  drawSprites();
 
}
function KeyPressed(){
  if (keyCode === UP_ARROW) {
  
    Matter.Body.setStatic(ball,false);
  }
}




