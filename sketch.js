const Engine = Matter.Engine;
const World  = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ground,ball;
var box1,box2,box3,box4,box5,box6,box7,box8,box9;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    var ground_option = {
        isStatic : true
    }
    ground = Bodies.rectangle(200,330,400,20,ground_option);
    World.add(world,ground);
    
    var holder_option = {
        isStatic : true
    }
    holder = Bodies.rectangle(400,150,200,20,holder_option);
    World.add(world,holder);
    
    var ball_option = {
        restitution : 1.0,
        density : 1.0
    }
    ball = Bodies.circle(50,100,40,ball_option);
    World.add(world,ball);

    
    var options ={
     bodyA : ball,
     bodyB : holder,
     stiffness : 0.004,
     length : 100
    }
    var string = Constraint.create(options);
    World.add(world,string);

    box1 = new Enemy(400,130,20,40);
    box2 = new Enemy(420,130,20,40);
    box4 = new Enemy(380,130,20,40);
    box5 = new Enemy(360,130,20,40);
    box6 = new Enemy(340,130,20,40);
    box7 = new Enemy(360,90,20,40);
    box8 = new Enemy(380,90,20,40);
    box9 = new Enemy(400,90,20,40);
    box3 = new Enemy(380,50,20,40);
}

function draw(){
    background("white");
    Engine.update(engine);
    strokeWeight(4);
    rectMode(CENTER);
    fill("black");
    rect(ground.position.x,ground.position.y,400,20);
     fill("black");
    rectMode(CENTER);
    rect(holder.position.x,holder.position.y,200,20);
    fill("blue");
    ellipseMode(CENTER);
    ellipse(ball.position.x,ball.position.y,40);
    line(ball.position.x,ball.position.y,50,200);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display(); 
    if(keyCode === 32){
        ball.position.x = mouseX;
        ball.position.y = mouseY;
    }
    
}

