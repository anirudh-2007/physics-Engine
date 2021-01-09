//namespacing or nicknaming
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;


//declaring variables for the angry birds game
var engine,world,ball,ground;


function setup() {
  //creates the base of the game
  createCanvas(800,400);

   //to create engine from the main Engine class
   engine = Engine.create();
   //the world of my game is also my engine's world;
   world = engine.world;

   //To change the property of object to static;
   options = {
    isStatic:true
   }
    //created an object from the main Bodies class and added options
    object = Bodies.rectangle(400,350,800,10,options);
    //adding the object to the main World
    World.add(world,object);

   //To change the property to bounce;
    ballOption={
      restitution:0.8
    }
   
   //created a ball from the main Bodies class and added options
   ball = Bodies.circle(400,0,10,ballOption);
   // added ball to the main World
   World.add(world,ball);
   
   
   console.log(object);

}

function draw() {
  //determines the color of the background
  background(180); 
  //it updates our game engine 
  Engine.update(engine);

  //it colors the object
  fill("brown");
  //it creates the object in the center
  rectMode(CENTER);
  //this creates the rectangle shape 
  rect(object.position.x,object.position.y,800,10);

  fill("red");
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,10,10);
}