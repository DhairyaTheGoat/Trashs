
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var groundObj
var trash
var leftSide
var radius = 40
var engine
var world

function preload(){

	
}

function setup() {
	createCanvas(1200, 900);

	var trash_options ={
		isStaic:false,
		friction:0,
		restitution:0.3,
		density:1.2
	}

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
groundObj = new Ground(width/2,670,width,20)
leftSide = new Ground(1100,600,20,120)
rightSide = new Ground(900,600,20,120)
trash = Bodies.circle(9,655,radius/2,trash_options)
World.add(world,trash)

Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  groundObj.display()
  leftSide.display()
  rightSide.display()
  ellipse(trash.position.x,trash.position.y,radius,radius)
}

function keyPressed() {
	if (keyCode === DOWN_ARROW){

	 Matter.Body.applyForce(trash,trash.position,{x:85,y:-85})

	}
}
