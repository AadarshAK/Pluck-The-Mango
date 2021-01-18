
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var trump;

function preload()
{
	trump=loadImage("trump0.png");
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   // boy=new Boy(280,600,200,200);
	//boy.scale=5;

	stone=new Stone(180,600,50);
    tree=new Tree(800,500,100,500);
    
    m1=new Mango(594,436,50);
//694,436
	fill("green");
    chain=new Slingshot(stone.body,{x:200,y:548});
    
    m2=new Mango(722,336,50);
    m3=new Mango(850,358,50);
    m4=new Mango(950,360,50);
    m5=new Mango(890,250,50);
    m6=new Mango(790,250,50);
    m7=new Mango(740,450,50);
    m8=new Mango(940,450,50);
//	Engine.run(engine);
  
}


function draw() {

  Engine.update(engine);
  background("lightblue");
  
  image(trump,180,500,200,200);
  tree.display();
  stone.display();
  chain.display();
  m1.display();
  m2.display();
  m3.display();
  m4.display();
  m5.display();
  m6.display();
  m7.display();
  m8.display();
  hasCollided(stone,m2);
  hasCollided(stone,m1);
  hasCollided(stone,m3);
  hasCollided(stone,m4);
  hasCollided(stone,m5);
  hasCollided(stone,m6);
  hasCollided(stone,m7);
  hasCollided(stone,m8);
  console.log(mouseX);
  console.log(mouseY);//122,556
}


function mouseDragged(){
    Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
} 

function mouseReleased(){
    chain.fly();
}

function hasCollided(bodyA,bodyB){
var posA=bodyA.body.position;
var posB=bodyB.body.position;

var distance = dist(posA.x,posA.y,posB.x,posB.y);

    if(distance <= bodyA.radius+ bodyB.radius){
        Matter.Body.setStatic(bodyB.body,false);
    }

}