
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint 

var roof;
var bob1,bob2,bob3,bob4,bob5;
var rope1,rope2,rope3,rope4,rope5;

function preload(){
	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	roof = new Roof(400,100,500,40);
	bob1 = new Bob(400,550);
	bob2 = new Bob(340,550);
	bob3 = new Bob(280,550);
	bob4 = new Bob(460,550);
	bob5 = new Bob(520,550);
	rope1 = new Rope(roof.body,bob1.body,-120,0);
	rope2 = new Rope(roof.body,bob2.body,-120,0);
	rope3 = new Rope(roof.body,bob3.body,-120,0);
	rope4 = new Rope(roof.body,bob4.body,-120,0);
	rope5 = new Rope(roof.body,bob5.body,-120,0);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("skyblue");
  
  drawSprites();
 
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  roof.display();

}



