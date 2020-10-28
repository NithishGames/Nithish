var car , wall 
var speed , weight

function setup() {
  createCanvas(1500,400);
  car = createSprite(1250, 200, 50, 50);
  car.shapeColor = "white"

  wall = createSprite(1310, 200, 50, height/2);
  wall.shapeColor = "blue"


}

function draw() {
  background(0,0,0); 
  
  speed  = random (50,90)
  weight = random (400,1500)


  //car.velocityX = speed;
  //wall.velocityX =  car.x


  /*if (wall,x-car.x < (car.width+wall.width)/2){
    car.velocityX = 0;
    var deformation = 0.5* weight * speed * speed/22509;
    if(deformation>180){
      car.shapeColor = color (255,0,0);
    }
    if (deformationn<180 && deformation > 100){
      car.shapeColor = color (230,230,0);
    }
    if (deformation<100){
      car.shapeColor = color(0,255,0)
    }
  }*/
  drawSprites();
}