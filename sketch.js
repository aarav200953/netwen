
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var roof, rope ;

var bob1, bob2, bob3, bob4, bob5;

function setup() {
	createCanvas(800, 500);
	roof = new Roof(350,100,100,50);
	rope = new Rope(350,100,100,50);
	bob1 = new Bob(350,400,50,50);
	

	engine = Engine.create();
	world = engine.world;

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  roof.display();
  
  drawSprites();
 
}



