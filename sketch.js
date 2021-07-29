var starI,bgImg;
var star, starBody;
//crea la variable para el sprite del hada y fairyImg
var hada, hadaI, hadaB;



const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine;
var world;

function preload()
{
	starImg = loadImage ("images/starImage.png");
	bgI = loadImage("images/starryNight.jpg");
	hadaI = loadAnimation ("images/fairyImage1.png", "images/fairyImage2.png");

}

function setup() {
	createCanvas(800, 750);

    

	hada = createSprite (300, 700, 20, 50);
	hada = addAnimation ("viva",hadaI);
	hada.scale = 1;

	star = createSprite(650,30);
	star.addImage (starI);
	star.scale = 0.2;


	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);


	world.add (world, hadaB);
	
	Engine.run(engine);
}


function draw() {
  background(bgImg);

  star.x= starBody.position.x;
  star.y= starBody.position.y;

  if (keyDown ("DOWN_ARROW")) {
	Matter.Body.setStatic(starBody,false); 
}
if (star.collide (hada)){
	Matter.Body.setStatic(starBody,true); 
}

//escribe el código para mover al hada a la izquierda y derecha
if (keyDown ("RIGTH_ARROW")){
	hada.x = +1;
}
if (keyDown ("LEFT_ARROW")){
	hada.x = - 1;
}
  //escribe aquí el código para detener la estrella en la mano del hada


  drawSprites();

}


