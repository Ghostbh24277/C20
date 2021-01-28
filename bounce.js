//Program to make algorithm for collision sprites
var car, wall;
var carImage
var edges
function preload(){
    carImage=loadImage('car.png')
}

function setup()
{
    createCanvas(windowWidth,windowHeight)
    edges=createEdgeSprites()

    car=createSprite(200,100,50,50);
    wall=createSprite(1250,height/2,60,height)
    wall.shapeColor="yellow"
    car.addImage(carImage)
    car.velocityX=5
    car.velocityY=7

}
function draw()
{
    background(0);
    //car.x=World.mouseX;
    // car.y=World.mouseY;

     console.log("Width Gap " + (car.x-wall.x )+ " "+(car.width/2+wall.width/2))
     console.log("Height Gap "+ (car.y-wall.y )+ " " +(car.height/2+wall.height/2))

     car.bounceOff(edges)
     
     //collision algorithm
    if(Math.abs(car.x-wall.x)<=(car.width/2+wall.width/2) && (Math.abs(car.y-wall.y)<=(car.height/2+wall.height/2))){
        wall.shapeColor="blue"
        car.scale=0.5
        car.velocityX=car.velocityX*-1
    }



    
    drawSprites();
}