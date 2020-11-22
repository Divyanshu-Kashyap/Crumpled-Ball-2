
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var backgroundd,dustR,dustL,dustB,ground ,paper,engine,dustbin;

var backgroundImg,dustbinImg;

function preload(){

  backgroundImg=loadImage("grass.jpg");

  dustbinImg=loadImage("dustbingreen.png");

}
function setup() {

	backgroundd=createSprite(400,200);
  backgroundd.addImage(backgroundImg);
  backgroundd.scale=2;
  
	createCanvas(1000, 500);
	
  rectMode(CENTER);


	
  engine=Engine.create();
  world=engine.world;

	Engine.run(engine);
  
  //Create the Bodies Here.

  dustbin=createSprite(800,340);
  dustbin.addImage(dustbinImg);
  dustbin.scale=0.65;

  paper=new Paper(100,345,65);

  dustR = Bodies.rectangle(865,350,10,250,{isStatic:true} );
  World.add(world,dustR);

  dustL = Bodies.rectangle(730,350,10,250,{isStatic:true} );
  World.add(world,dustL);
    
  dustB = Bodies.rectangle(800, 410,200,10,{isStatic:true} );
  World.add(world,dustB);

  ground=createSprite(400,450,2000,20);
  ground.shapeColor="brown";
  ground = Bodies.rectangle(400,450,2000,40,{isStatic:true} );
  World.add(world,ground);

}

function draw() {
  rectMode(CENTER);

  drawSprites();

  paper.display();

  dustbin.display();
 
  
  textSize(40);
  fill("green");
  text("Clean India,Green India!!!",300,100);
}


function keyPressed(){
  if(keyCode===UP_ARROW){

    Matter.Body.applyForce(paper.body, paper.body.position, {
      x: 45,
      y: -50
      });


  }
}
