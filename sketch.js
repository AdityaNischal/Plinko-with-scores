const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var boundary1,boundary2,boundary3,boundary4;

var gameState = "start";

var count = 0;

var ball;

var divisions = [];

var plinkos = [];

var balls = [];

var score = 0;

var divisionHeight = 300;

function setup() {
  createCanvas(800,800);
  engine = Engine.create();
  world = engine.world;

 /* boundary1 = createSprite(5,300,10,600)
  boundary1.shapeColor="red"

  boundary2 = createSprite(200,5,500,10)
  boundary2.shapeColor="red"

  boundary3 = createSprite(395,300,10,600)
  boundary3.shapeColor="red"

  boundary4 = createSprite(200,595,500,10)
  boundary4.shapeColor="red"*/

  ground1 = new Ground(width/2,height,width,20)

  for(var k = 0;k <= width; k = k+80){
 divisions.push(new Division(k,height-divisionHeight/2,10,divisionHeight))
  }

  for(var j = 75;j <= width; j = j+50){
    plinkos.push(new Plinko(j,75))
     }

     for(var  j= 50;j <= width - 10; j = j+50){
      plinkos.push(new Plinko(j,175))
       }
  
       for(var j = 75;j <= width; j = j+50){
        plinkos.push(new Plinko(j,275))
         }
         
       for(var j = 50;j <= width - 10; j = j+50){
        plinkos.push(new Plinko(j,375))
         }
    

}

function draw() {
  background(0);
  text("Score" + score,20,40) ; 
  Engine.update(engine);

  ground1.display(); 

if(gameState == "end"){
text("Game Over", 150,200)
}
  for(var k = 0;k < divisions.length; k++){
    divisions[k].display();
    }

    for(var j = 0;j < plinkos.length; j++){
      plinkos[j].display();
      }
    if(ball != null){
      ball.display();
      if(ball.body.position.y > 760){
        if(ball.body.position.x < 300){
          score = score + 500;
          ball = null
          if(count >= 5){
            gameState = "end"
          }
        }
        else if(ball.body.position.x < 600 && ball.body.position.x > 301){
          score  = score + 100;
          ball = null
          if(count >= 5)
          gameState = "end"
        }
        else if(ball.body.position.x < 900 && ball.body.position.x > 601){
          score = score + 200
          ball = null
          if(count >= 5)
          gameState = "end"
        }
      }
}
  drawSprites();

}
function mousePressed(){
  if(gameState !== "end"){
count ++;
ball = new Ball(mouseX,10,10,10);
  }
}