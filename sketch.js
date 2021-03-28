const World=Matter.World
const Engine=Matter.Engine
const Bodies=Matter.Bodies

var world,engine,ball,ground
function setup() {
  createCanvas(800,400);
    
  engine=Engine.create();
   world=engine.world
   ball=Bodies.circle(250,209,20,{restitution:2})

   World.add(world,ball)
   ground=Bodies.rectangle(400,390,800,20,{isStatic:true})
   World.add(world,ground)

}

function draw() {
  background(255,255,255);
  Engine.update(engine)  
  rectMode(CENTER)
  rect(ground.position.x,ground.position.y,800,20)
  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,20,20)
}