
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(400, 680, 800, 10)

	paper = new Paper(100, 200, 46)

	bs = new Dustbin(650, 670, 200, 20)
    rs = new Dustbin(545, 630, 20, 100)
	ls = new Dustbin(755, 630, 20, 100)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paper.display();

  ground.display();
  bs.display();
  ls.display();
  rs.display();
 
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
	}
}

