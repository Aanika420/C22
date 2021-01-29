const Engine = Matter.Engine; //namespacing
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world, box, ball, ground;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  var options= {isStatic: true, mass:4}
  ground = Bodies.rectangle(200,380,400,10,options);
  World.add(world,ground);
  console.log(ground);

  var option = {
    restitution:2,
    isStatic: false,
    mass:4
  }; //json format
  ball = Bodies.circle(200,100,20,option);
  World.add(world,ball);

}

function draw() {
  background(0); 
  Engine.update(engine);
  var posg = ground.position
  rectMode(CENTER);
  rect(posg.x, posg.y,400,10);
  var posb = ball.position
  ellipseMode(RADIUS);
  ellipse(posb.x,posb.y,20);
  // montgomery township upper middle school
}

