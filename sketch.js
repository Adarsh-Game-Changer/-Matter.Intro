
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var body1;
var body2;
var body3;
function setup(){
  var canvas = createCanvas(1200,400);
  engine = Engine.create();
  world = engine.world;
 
  body1=Bodies.rectangle(100,200,40,40)
  World.add(world,body1)
  
  body2=Bodies.rectangle(170,170,60,60)
  World.add(world,body2)

  body3=Bodies.circle(70,70,30)
  World.add(world,body3)
}
function draw()
{
  Engine.update(engine)
  background(0);
  rectMode(CENTER);
  fill("red")
  
  

    rect(body1.position.x,body1.position.y,50,50);
    fill("yellow")
   rect(body2.position.x,body2.position.y,100,100)
   fill("green")
   circle(body3.position.x,body3.position.y,30)
}
