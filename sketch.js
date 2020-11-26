const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, box2,box3,box4, box5;
var pig1,pig2;
var log1,log2,log3,log4;
var Bird1;

function setup(){
    var canvas = createCanvas(1000,800);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(500,735);
    box2 = new Box(700,735);
    ground = new Ground(500,height,1000,50);
    pig1= new Pig(600,735);
log1= new Log(600,680,320,PI);
log2= new Log(600,600,320,PI);
//log3= new Log(590,570,200,3 * PI/4);
//log4= new Log(650,570,200,PI/4);
box3= new Box(500,650);
box4= new Box(700,650);
pig2= new Pig(600,650);
box5= new Box(600,570);
Bird1= new Bird(200,750)
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    ground.display();
    pig1.display();
    pig2.display();
    log1.display();
    log2.display();
    Bird1.display();
    //log3.display();
    //log4.display();
}