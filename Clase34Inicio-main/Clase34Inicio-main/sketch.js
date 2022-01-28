const World = Matter.World;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var suelo;
var caja1, caja2, caja3, caja4;
var bola;
var rope;

function setup(){
    createCanvas(1000, 500);
    engine = Engine.create();
    world = engine.world;
    suelo = new Ground(400, 400, 8000, 20);
    caja1 = new Box(600,360,60,60);
    caja2 = new Box(600,300,60,60);
    caja3 = new Box(600,240,60,60);
    caja4 = new Box(600,180,60,60);
    bola = new Ball(350,250,80,80);
    rope = new Rope(bola.body, {x:50, y:50});
}

function draw(){
    background(180);
    Engine.update(engine);
    suelo.display();
    caja1.display();
    caja2.display();
    caja3.display();
    caja4.display();
    bola.display();
    //rope.display();
    rope.display();
}
function mouseDragged(){
    Matter.Body.setPosition(bola.body, {x: mouseX, y: mouseY});
}