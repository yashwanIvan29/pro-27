
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint ; 
var ballObject1,ballObject2,ballObject3 ,ballObject4,ballObject5;
var ground;
var roofObject ; 

function preload()
{
	
}

function setup() {
	engine = Engine.create();
	world = engine.world;
	createCanvas(1300, 700);

ballObject1=new ball(300,350,50);
ballObject2=new ball(350,350,50);
ballObject3=new ball(400,350,50);
ballObject4=new ball(450,350,50);
ballObject5=new ball(500,350,50);
ground = new Roof(400,200,300,20);
sling1= new Rope(ballObject1.body,ground.body,-50*2,0);
sling2= new Rope(ballObject2.body,ground.body,-25*2,0);
sling3= new Rope(ballObject3.body,ground.body,-0*2,0);
sling4= new Rope(ballObject4.body,ground.body,25*2,0);
sling5= new Rope(ballObject5.body,ground.body,50*2,0);
	



	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
  
  drawSprites();

  ballObject1.display();
	ballObject2.display();
	ballObject3.display();
	ballObject4.display();
	ballObject5.display();
	ground.display();
	sling1.display();
  sling2.display();
  sling3.display();
  sling4.display();
  sling5.display();
	

}

function keyPressed() { 
	if (keyCode === RIGHT_ARROW) 
	{ Matter.Body.applyForce(ballObject1.body,ballObject1.body.position,{x:-100,y:-100}); } 
} 



