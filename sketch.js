
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject,paper
var world;




function setup() {
	createCanvas(1300, 600);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,570,width,20);
	dustbinObj=new dustbin(1000,550);
	paper=new Paper(100,540,50,50);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
  pulando();

  groundObject.display();
  dustbinObj.display();
  paper.display();
  	
}
function pulando() {
	if (keyDown("up")) {
		Matter.Body.applyForce(paper.body,paper.body.position,{x:135,y:-145});
	}
}
