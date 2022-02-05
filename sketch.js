const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Constraint=Matter.Constraint;

var engine,world;

var ground;
var wall;

var slingshot;

var rock1,rock2,rock3,rock4,rock5,rock6;

var ball;

var backgroundIMG;

var PLAY=0;
var END=1;
var gameState=PLAY;

function preload(){

  backgroundIMG=loadImage("Picture/Background.png");

  /*rock1=loadImage("Picture/Rock-1.png");
  rock2=loadImage("Picture/Rock-2.png");
  rock3=loadImage("Picture/Rock-3.png");
  rock4=loadImage("Picture/Rock-4.png");
  rock5=loadImage("Picture/Rock-5.png");
  rock6=loadImage("Picture/Rock-6.png");*/
  
}

function setup() {
  createCanvas(800,400);

  engine=Engine.create();
  world=engine.world;

  ground= new Ground(400,390,800,20);
  wall=new Ground(790,200,20,400);

  ball=new Ball(50,100,50);

  rock1=new Rock(650,350,40,40);
  rock2=new Rock(650,320,40,40);
  rock3=new Rock(650,290,40,40);
  rock4=new Rock(650,260,40,40);
  rock5=new Rock(650,230,40,40);
  rock6=new Rock(650,200,40,40);

  slingshot=new Launcher(ball.body,{x:200,y:100})
  
  Engine.run(engine);
  
}

function draw() {
  background(backgroundIMG);  

  Engine.update(engine);

  

  ground.display();
  wall.display();

  ball.display();

  rock1.display();
  rock2.display();
  rock3.display();
  rock4.display();
  rock5.display();
  rock6.display();

  slingshot.display();

}



  function mouseDragged(){
    if (gameState===PLAY){
      Matter.Body.setPosition(ball.body, {x:mouseX, y:mouseY});
    }
  }
   
  function mouseReleased(){
    slingshot.fly();
    gameState=END;
  }

function keyPressed(){
  if (keyCode===32){
    slingshot.attach(ball.body)
    Matter.Body.setPosition(rock1.body, {x:650, y:350});
    Matter.Body.setPosition(rock2.body, {x:650, y:320});
    Matter.Body.setPosition(rock3.body, {x:650, y:290});
    Matter.Body.setPosition(rock4.body, {x:650, y:260});
    Matter.Body.setPosition(rock5.body, {x:650, y:230});
    Matter.Body.setPosition(rock6.body, {x:650, y:200});
  }
}