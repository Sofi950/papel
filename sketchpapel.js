var ball
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//crear los cuerpos aquí.

    var ball_options={
		isStatic:false,
		restitution:0,3,
		friction:0
		density:1,2
	} 

	Engine.run(engine);
	var groundoptions= {
		isStatic: true
	  }
   ground = Bodies.rectangle(0, height - 1, width * 2, 1, options);
  World.add(world, ground);
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



