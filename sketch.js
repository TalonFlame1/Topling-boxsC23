const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

var engine,world,ball,ground

function setup() {
  createCanvas(800,400);
engine = Engine.create();
world = engine.world
box1 = new Box(360,0,80,80)
box2 = new Box(300,100,80,80)
ground = new Ground (400,380,800,20)
}

function draw() {
  background(255,255,255); 
  Engine.update(engine)
  box1.display()
  box2.display()
  ground.display ()
}