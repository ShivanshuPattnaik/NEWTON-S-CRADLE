// BY SHIVANSHU PATTNAIK
// PROJECT - C27(NEWTON'S CRADLE)
// HOPE YOU'LL LIKE THE PROJECT

// THESE("CONST") HELP TO GIVE NAMESPACE
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

// VARIABLES
var bob1, bob2, bob3, bob4, bob5;
var roof;
var rope1, rope2, rope3, rope4, rope5;

// TO LOAD IMAGES FOR THE SPRITES
function preload() {

}

// TO SETUP THE VARIABLES
function setup() {
	
	createCanvas(1200, 600);

	engine = Engine.create();
	world = engine.world;

	// HERE BODIES ARE CREATED
	bob1 = new Bob(500, 350);
	bob2 = new Bob(550, 350);
	bob3 = new Bob(600, 350);
	bob4 = new Bob(650, 350);
	bob5 = new Bob(700, 350);

	roof = new Roof(600, 150, 500, 40);

	rope1 = new Rope(bob1.body, roof.body, -100, 0);
	rope2 = new Rope(bob2.body, roof.body, -50, 0);
	rope3 = new Rope(bob3.body, roof.body, 0, 0);
	rope4 = new Rope(bob4.body, roof.body, 50, 0);
	rope5 = new Rope(bob5.body, roof.body, 100, 0);

	Engine.run(engine);

}

// MAIN AREA(TO DISPLAY)
function draw() {

	rectMode(CENTER);

	background("white");

	bob1.display();
	bob2.display();
	bob3.display();
	bob4.display();
	bob5.display();

	roof.display();

	rope1.display();
	rope2.display();
	rope3.display();
	rope4.display();
	rope5.display();

	textSize(40)
	textFont("Typograph Pro")
	stroke("black");
	strokeWeight(5);
	fill("lightgreen")
	text("NEWTON'S CRADLE", 400, 450);
	textSize(20)
	text("PRESS UP ARROW TO START", 450, 500);

	drawSprites();

}

function keyPressed(){

	if(keyCode === UP_ARROW){

		// Matter.Body.setStatic(bob1.body, false);
		// Matter.Body.setStatic(bob2.body, false);
		// Matter.Body.setStatic(bob3.body, false);
		// Matter.Body.setStatic(bob4.body, false);
		// Matter.Body.setStatic(bob5.body, false);
		Matter.Body.applyForce(bob1.body, bob1.body.position, {x : -20, y: 20})
		
	}

}